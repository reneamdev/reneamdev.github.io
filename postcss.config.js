module.exports = {
    plugins: [
        require("postcss-import"),
        require("autoprefixer"),
        require("postcss-preset-env"),
        require("cssnano"),
        purgecss({
            content: ['./**/*.html']
        })
    ]
}

const purgecss = await new PurgeCSS().purge({
    content: ['index.html', '**/*.js'],
    css: ['dist/css/main.min.css']
});