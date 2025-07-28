module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
        alias: {
          '@components/*': './src/components/*',
          '@screens/*': './src/screens/*',
          '@utils/*': './src/utils/*',
          '@storage/*': './src/storage/*',
        },
      },
    ],
  ],
};
