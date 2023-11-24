import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'ReactApp',
  slug: 'reactapp',
  owner: 'slvstr',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  scheme: 'reactapp',
  userInterfaceStyle: 'automatic',
  jsEngine: 'hermes',
  assetBundlePatterns: ['**/*'],
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#EBE5DE',
    dark: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#111B21',
    },
  },
  ios: {
    supportsTablet: false,
    bundleIdentifier: 'com.slvstrdev.reactapp',
    userInterfaceStyle: 'automatic',
    requireFullScreen: true,
  },
  plugins: ['expo-router'],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: 'c52b4a5b-ff9c-4178-ada6-c852f87a1fd6',
    },
  },
  updates: {
    url: 'https://u.expo.dev/c52b4a5b-ff9c-4178-ada6-c852f87a1fd6',
    requestHeaders: {
      'expo-channel-name': 'main',
    },
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
});
