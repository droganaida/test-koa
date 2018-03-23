// read more https://github.com/michael-ciniawsky/postcss-load-config

module.exports = () => ({
  plugins: {
    autoprefixer: {},
    'css-mqpacker': {},
    // cssnano: ctx.env === 'production'
    //   ? {
    //     preset: 'default',
    //     autoprefixer: false,
    //   } : false,
  },
})
