import ShowIcon from '@mui/icons-material/ArrowBackIos'
import { Box } from '@mui/material'
import { memo, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../actions'
import apis from '../../apis'
import useStyles from './styles'

function Footer({ actionCreators, admin }) {
   const [value, setValue] = useState('')
   const [isOpenInput, setOpenInput] = useState('')
   const [wrongPw, setWrongPw] = useState(false)
   const inpuRef = useRef(null)

   const handleChange = e => {
      if (wrongPw) {
         setWrongPw(false)
      }
      setValue(e.target.value)
   }

   const handleSubmit = async e => {
      if (e.keyCode === 13) {
         setValue('')
         try {
            const res = await apis.checkAdmin(value)
            if (res.data.isAdmin) {
               setOpenInput(false)
               actionCreators.checkAdmin(value)
            } else {
               setWrongPw(true)
            }
         } catch (err) {
            console.log(err)
         }
      }
   }

   const styles = useStyles()

   return (
      <Box className={styles.footer}>
         <p className={styles.text}>
            <a className={styles.link} href='mailto:diwas118151@gmail.com'>
               diwas118151@gmail.com
            </a>{' '}
            © Nguyen Anh Khoa. All Rights Reserved
         </p>
         <Box className={styles.adminBox}>
            {isOpenInput ? (
               <>
                  {wrongPw && <span className={styles.error}>Wrong paswword...</span>}
                  <input
                     ref={inpuRef}
                     className={styles.input}
                     value={value}
                     onChange={handleChange}
                     onBlur={() => setOpenInput(false)}
                     placeholder='enter code...'
                     type='password'
                     onKeyUp={handleSubmit}
                     autoFocus
                  />
               </>
            ) : (
               <ShowIcon className={styles.showIcon} onClick={() => setOpenInput(true)} />
            )}
         </Box>
      </Box>
   )
}

const mapState = state => ({
   admin: state.admin,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(Footer))
