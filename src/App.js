import { Box, CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import routes from './routes'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
   app: {
      // background: 'url(/images/bg.jpg)',
      background: 'linear-gradient(90deg, #cfd9df, #ebedee, #e2ebf0)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
   },
}))

function App() {
   const styles = useStyles()
   return (
      <Box className={styles.app}>
         <Router>
            <CssBaseline />
            <Box>
               <Switch>{routes}</Switch>
            </Box>

            <Footer />
         </Router>
      </Box>
   )
}

export default App
