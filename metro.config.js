const { getDefaultConfig } = require('expo/metro-config');

// 1. Enable CSS for Expo.
const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

// 2. Enable NativeWind
const { withNativeWind } = require('nativewind/metro');
module.exports = withNativeWind(config, {
  // 3. Set `input` to your CSS file with the Tailwind at-rules
  input: './src/assets/styles/global.css',

  inlineRem: false,
});
