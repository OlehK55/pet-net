import {
    createTheme,
} from '@material-ui/core/styles';

import {deepOrange, green, yellow} from '@material-ui/core/colors';


export default  createTheme({
    palette: {
        primary: {
            main: green[100],
        },
        secondary: {
            main: deepOrange[500]
        }
    },
});
