/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    semi: false,
    singleQuote: true,
    printWidth: 80,
    tabWidth: 4,
    plugins: ['prettier-plugin-tailwindcss'],
}

export default config
