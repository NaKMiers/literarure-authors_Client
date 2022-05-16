import { Backdrop, Box, CircularProgress } from '@mui/material'
import { memo, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../actions'
import apis from '../../apis'
import Header from '../../components/Header'
import Item from '../../components/Item'
import useStyles from './styles'

function HomePage({ datas, actionCreators }) {
   const [isOpenBackdrop, setOpenBackdrop] = useState(true)

   const styles = useStyles()

   useEffect(() => {
      const getData = async () => {
         try {
            const res = await apis.getData()
            actionCreators.setData(res.data)
            setOpenBackdrop(false)
         } catch (err) {
            console.log(err)
         }
      }

      getData()
   }, [actionCreators])

   const renderItems = () =>
      datas && datas.map((d, i) => <Item key={i} index={i + 1} data={d} right={i % 2 !== 0} />)

   return (
      <Box className={styles.homePage}>
         <Header />

         <Box className={styles.main}>{renderItems()}</Box>

         <Backdrop
            sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
            open={isOpenBackdrop}
         >
            <CircularProgress color='inherit' />
         </Backdrop>
      </Box>
   )
}

const mapState = state => ({
   datas: state.datas,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(HomePage))
