import CancelIcon from '@mui/icons-material/Clear'
import SaveIcon from '@mui/icons-material/Done'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Button, Collapse, TextareaAutosize } from '@mui/material'
import clsx from 'clsx'
import { memo, useState } from 'react'
import useStyles from './styles'
import { connect } from 'react-redux'
import apis from '../../apis'
import actions from '../../actions'
import { bindActionCreators } from 'redux'

function Item({ index, data, image, right, isAdmin, actionsCreator }) {
   const [expanded, setExpanded] = useState(false)
   const [editing, setEditing] = useState(false)
   const [value, setValue] = useState(data.content)
   const [valueEditing, setValueEditing] = useState(data.content)

   const styles = useStyles()

   const handleSave = async () => {
      try {
         const res = await apis.editData(data._id, valueEditing)
         actionsCreator.editData(res.data._id, res.data)
         setValue(valueEditing)
         setEditing(false)
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <Box className={styles.item}>
         <Box
            className={clsx(
               styles.orderNumber,
               right ? styles.orderNumberRight : styles.orderNumberLeft
            )}
         >
            {index}
         </Box>
         <Box className={right ? styles.topRight : styles.topLeft}>
            <Box className={clsx(styles.productName, right && styles.productNameRight)}>
               {data.lesson}
            </Box>
            <br />
            {right && <br />}
            <Box
               className={clsx(styles.author, right && styles.authorRight, {
                  [styles.authorAvtive]: expanded,
               })}
               onClick={() => setExpanded(!expanded)}
            >
               {data.author}
            </Box>
            <Collapse
               in={expanded}
               timeout='auto'
               unmountOnExit
               className={clsx(styles.collapse, right && styles.collapseRight)}
            >
               {isAdmin ? (
                  editing ? (
                     <>
                        <Button
                           className={clsx(
                              styles.saveBtn,
                              right ? styles.saveBtnRight : styles.saveBtnLeft
                           )}
                           onClick={handleSave}
                        >
                           <SaveIcon className={styles.editIcon} />
                        </Button>
                        <Button
                           className={clsx(
                              styles.cancelBtn,
                              right ? styles.cancelBtnRight : styles.cancelBtnLeft
                           )}
                           onClick={() => setEditing(false)}
                        >
                           <CancelIcon className={styles.editIcon} />
                        </Button>
                     </>
                  ) : (
                     <Button
                        className={clsx(
                           styles.editBtn,
                           right ? styles.editBtnRight : styles.editBtnLeft
                        )}
                        onClick={() => setEditing(true)}
                     >
                        <EditIcon className={styles.editIcon} />
                     </Button>
                  )
               ) : null}
               {isAdmin && editing ? (
                  <TextareaAutosize
                     className={styles.editArea}
                     placeholder='Empty'
                     minRows={2}
                     onChange={e => setValueEditing(e.target.value)}
                     value={valueEditing}
                  />
               ) : (
                  <Box className={styles.collapseContent}>
                     <img className={styles.avtAuthor} src={data.image} alt='' />
                     <div>
                        {value.split('\n').map((d, i) => (
                           <p key={i}>{d}</p>
                        ))}
                     </div>
                  </Box>
               )}
            </Collapse>
         </Box>
      </Box>
   )
}

const mapState = state => ({
   isAdmin: state.admin,
})

const mapDispatch = dispatch => ({
   actionsCreator: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(Item))
