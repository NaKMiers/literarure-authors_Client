import { Box } from '@mui/material'
import Item from '../../components/Item'
import Header from '../../components/Header'
import useStyles from './styles'
import { useEffect } from 'react'
import apis from '../../apis'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../actions'

function HomePage({ datas, actionCreators }) {
   console.log('homePage')

   const styles = useStyles()

   useEffect(() => {
      const getData = async () => {
         try {
            const res = await apis.getData()
            actionCreators.setData(res.data)
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
      </Box>
   )
}

const mapState = state => ({
   datas: state.datas,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(HomePage)
