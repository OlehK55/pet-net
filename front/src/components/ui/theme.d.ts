import {
    createTheme,
    makeStyles,
    createStyles,
} from '@material-ui/core/styles';

// A custom theme for this app
// @ts-ignore
const theme = {
    palette: {
        common: {
            arcBlue: "#0B72B9",
            arcOrange:"#FFBA60"
        }
    }
} as const;

type CustomTheme = {
    [Key in keyof typeof theme]: typeof theme[Key]
}
declare module '@material-ui/core/styles/createTheme' {
    interface Theme extends CustomTheme { }
    interface ThemeOptions extends CustomTheme { }

    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}