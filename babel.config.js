module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'react-native-reanimated/plugin',
        {
          // If you want to enable the plugin in production mode, set this to true.
          // By default, it is disabled in production mode.
          production: false,
        },
      ]
    ]
  };
};
