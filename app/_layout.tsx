import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{ headerShown: false }} 
        />
        {/* <Stack.Screen 
          name="screens/Usage" 
          options={{ 
            title: 'Usage Policies',
            headerBackTitle: 'Back'
          }} 
        />
        <Stack.Screen name="+not-found" /> */}
      </Stack>
    </ThemeProvider>
  );
}

// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen 
//         name="index" 
//         options={{ 
//           headerShown: false 
//         }} 
//       />
//       <Stack.Screen 
//         name="screens/Usage" 
//         options={{ 
//           title: 'Usage Policies',
//           headerBackTitle: 'Back'
//         }} 
//       />
//     </Stack>
//   );
// }

// import { Stack } from 'expo-router';
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent splash screen auto-hiding
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) SplashScreen.hideAsync();
//   }, [loaded]);

//   if (!loaded) return null;

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen 
//           name="index" 
//           options={{ headerShown: false }} 
//         />
//         <Stack.Screen 
//           name="Usage" 
//           options={{ 
//             title: 'Usage Policies',
//             headerBackTitle: 'Back'
//           }} 
//         />
//         <Stack.Screen 
//           name="Library" 
//           options={{ 
//             title: 'Virtual Library',
//             headerBackTitle: 'Back'
//           }} 
//         />
//       </Stack>
//     </ThemeProvider>
//   );
// }