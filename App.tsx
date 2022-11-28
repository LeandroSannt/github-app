import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { QueryClientProvider } from 'react-query';

import { FavoritesProvider } from './src/hooks/useFavorites';
import Routes from './src/Routes';
import { queryClient } from './src/services/queryClient';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
// TrackPlayer.registerPlaybackService(() => require('./src/services/trackPlayer.ts'));

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="light-content"  translucent  backgroundColor="transparent" />
      <FavoritesProvider>
        <Routes/>
      </FavoritesProvider>
      <View onLayout={onLayoutRootView}/>
    </QueryClientProvider>
  );
}