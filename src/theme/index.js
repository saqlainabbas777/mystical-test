import {createTheme} from "@mui/material";
import {themePalette} from './generalPallete';


export default createTheme({
    palette: {
        primary: {
            main: themePalette.colorPalette.colorPrimary
        },
        secondary: {
            main: themePalette.colorPalette.colorSecondary,
            main70: themePalette.colorPalette.colorSecondary70,
            main50: themePalette.colorPalette.colorSecondary50,
        },
        tertiary: {
            main: themePalette.colorPalette.colorTertiary,
        },
        Quaternary: {
            main: themePalette.colorPalette.colorQuaternary,
        },
    },
    typography: {
        fontFamily: themePalette.typography.fontFamily,
        fontSize: {
            fsLarge: themePalette.typography.fsLarge,
            fsMediumCustomize: themePalette.typography.fsMediumCustomize,
            fsMedium: themePalette.typography.fsMedium,
            fsSmallCustomize: themePalette.typography.fsSmallCustomize, //16
            fsSmall: themePalette.typography.fsSmall,
            fsExtraSmall: themePalette.typography.fsExtraSmall,
        },
        subtitle2: {
            fontSize: themePalette.typography.fsSmallCustomize, //16px
            color: themePalette.colorPalette.colorSecondary,
            fontWeight: 400,
            cursor: 'default',
            // '@media (max-width:1280px)': {
            //     fontSize: themePalette.typography.fsSmall,
            // },
        },
        subtitle1: {
            fontSize: themePalette.typography.fsMediumCustomize, //18px
            color: themePalette.colorPalette.colorSecondary,
            fontWeight: 400,
            cursor: 'default',
        },
        h3: {
            fontSize: themePalette.typography.fsXLarge, //36px
            color: themePalette.colorPalette.colorSecondary,
            fontWeight: 400,
            cursor: 'default',
        },
        h4: {
            fontSize: themePalette.typography.fsLarge, //24px
            color: themePalette.colorPalette.colorSecondary,
            fontWeight: 400,
            cursor: 'default',
        },
        h6: {
            fontSize: themePalette.typography.fsSmallCustomize14, //14px
            color: themePalette.colorPalette.colorSecondary,
            fontWeight: 400,
            cursor: 'default',
        },
        body1: {
            fontSize: themePalette.typography.fsMediumCustomize, //18px
            color: themePalette.colorPalette.colorSecondary,
            fontWeight: 400,
            cursor: 'default',
        }
    },
    spacing: themePalette.spacing,
    breakpoints: {
        xs: themePalette.breakpoints.xs,
        sm: themePalette.breakpoints.sm,
        md: themePalette.breakpoints.md,
        lg: themePalette.breakpoints.lg,
        xl: themePalette.breakpoints.xl
    },
    zIndex: {},
    transitions: {},
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: themePalette.colorPalette.colorSecondary50,
                    border: '1px solid #FFFFFF1A',
                    borderRadius: 8,
                    backgroundColor: 'rgba(255, 255, 255, .05)'
                },
                notchedOutline: {
                    borderColor: '#FFFFFF1A',
                    borderWidth: 1,
                },
                input: {
                    padding: '8px 14px',
                    background: 'transparent'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: themePalette.colorPalette.colorSecondary50,
                    fontSize: themePalette.typography.fsSmallCustomize14,
                    borderColor: '1px solid #FFFFFF1A',
                    '&::placeholder': {
                        textColor: themePalette.colorPalette.colorSecondary50,
                    },
                    '@media (max-width:1280px)': {
                        // fontSize: themePalette.typography.fsSmall,
                        // padding: '10px 14px'
                    },
                },
                root: {
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: themePalette.colorPalette.colorSecondary50,
                }
            }
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: 'contained'},
                    style: {
                        fontSize: themePalette.typography.fsSmallCustomize14,
                        fontWeight: 600,
                        padding: '10px 12px',
                        lineHeight: '28px',
                        borderRadius: '0',
                        height: '40px',
                        '@media (max-width:1280px)': {
                            // fontSize: themePalette.typography.fsSmall,
                            padding: '6px 6px'
                        },
                    },
                },
                {
                    props: {variant: 'text'},
                    style: {
                        fontSize: themePalette.typography.fsSmallCustomize14,
                        fontWeight: 400,
                        color: themePalette.colorPalette.colorPrimary,
                        textTransform: 'none',
                        backgroundColor: 'transparent',
                        padding: 0,
                        lineHeight: '28px',
                        borderRadius: '0',
                        '@media (max-width:1280px)': {
                            // fontSize: themePalette.typography.fsSmall,
                        },
                    },
                },
            ],
        },
        MuiLoadingButton: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        backgroundColor: themePalette.colorPalette.colorLoading
                    },
                },
                loadingIndicator: {
                    color: themePalette.colorPalette.colorSecondary70
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: themePalette.colorPalette.colorSecondary50,
                    '& .MuiSvgIcon-root': {
                        fontSize: '24px',
                        // '@media (max-width:1280px)': {
                        //     fontSize: themePalette.typography.fsMediumCustomize,
                        // },
                    },
                }
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontSize: themePalette.typography.fsSmallCustomize14,
                    borderColor: '#FFFFFF1A'
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: themePalette.colorPalette.colorSecondary
                    }
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    columnGap: '29px'
                }
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    backgroundColor: '#373737'
                }
            }
        }
    },
});
