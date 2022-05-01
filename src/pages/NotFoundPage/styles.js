import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   notFoundPage: {
      '&.MuiBox-root': {
         maxWidth: 1024,
         margin: 'auto',
         textAlign: 'center',
      },
   },
   heading: {
      '&.MuiTypography-root': {
         fontSize: 40,
      },
   },
   link: {},
}))
