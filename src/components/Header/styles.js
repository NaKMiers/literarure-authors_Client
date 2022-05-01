import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   heading: {
      '&.MuiTypography-root': {
         fontSize: 58,
         margin: '16px auto 0px auto !important',
         textAlign: 'center',
         fontWeight: 'bold',
         background: 'linear-gradient(90deg, #c2b900, #4af0a6, #e24a4a, #00d4ff)',
         WebkitBackgroundClip: 'text',
         WebkitTextFillColor: 'transparent',
         fontFamily: 'Nunito, cursive !important',
      },
   },
   subHeading: {
      '&.MuiTypography-root': {
         fontSize: 18,
         margin: '0px !important',
         textAlign: 'center',
         fontFamily: 'Nunito, cursive !important',
         fontWeight: 'light',
         color: '#666',
         textDecoration: 'underline',
      },
   },
}))
