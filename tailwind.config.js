import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                serif: ['Poppins', ...defaultTheme.fontFamily.serif],
            },
            colors : {
                'primary': {
                    DEFAULT: '#02544D',
                        50: '#B4FDF7',
                        100: '#A0FDF5',
                        200: '#78FCF1',
                        300: '#50FBEC',
                        400: '#28FAE8',
                        500: '#06F3DF',
                        600: '#05CCBB',
                        700: '#04A496',
                        800: '#037C72',
                        900: '#02544D',
                        950: '#013934'
                    },
            },
            boxShadow: {
                'inner-shadow-sm' : 'inset 0 5px 4px rgba(0, 0, 0, 0.1)', 
            },
        },
    },

    plugins: [forms],
};
