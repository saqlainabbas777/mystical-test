// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';
import theme from "../src/theme";
import {CssBaseline} from "@mui/material";

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

const withThemeProvider = (Story, context) => {
    return (
        <Emotion10ThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Story {...context} />
            </ThemeProvider>
        </Emotion10ThemeProvider>
    );
};

export const decorators = [withThemeProvider];



// export const decorators = [
//   (Story) => (
//       <ThemeProvider theme={Theme}>
//         <Story />
//       </ThemeProvider>
//   ),
// ];
