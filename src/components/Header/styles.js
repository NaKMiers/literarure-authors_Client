import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   heading: {
      '&.MuiTypography-root': {
         fontSize: 58,
         margin: '0px auto 0px auto !important',
         textAlign: 'center',
         fontWeight: 'bold',
         fontFamily: 'Nunito, cursive !important',
         padding: '16px 0px 0px 0px',
         color: '#9e9e9e',
         textShadow: '1px 2px 1px #333',
      },
   },
   subHeading: {
      '&.MuiTypography-root': {
         fontSize: 18,
         margin: '0px !important',
         textAlign: 'center',
         fontFamily: 'Nunito, cursive !important',
         fontWeight: 'light',
         color: '#565656',
         textDecoration: 'underline',
         textShadow: '1px 1px 0.5px #fff',
      },
   },
}))
