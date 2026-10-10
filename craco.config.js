module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: (options) => {
        options.postcssOptions.plugins = [require('@tailwindcss/postcss')()];
        return options;
      },
    },
  },
};
