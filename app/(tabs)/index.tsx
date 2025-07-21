import { StyleSheet, Image, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import Pressable from '@/components/Pressable'; // Ensure you have a pressable component
import { Pressable } from 'react-native';  // Change the import
import { router } from 'expo-router';

export default function HomeScreen() {

  const showPolicies = () => {
    router.push('/Usage');
  };
  
  const showLibrary = () => {
    router.push('/Library');
  };
  
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/Social-Media-Chatting-PNG-Clipart.png')} // Add a chat icon image
        style={styles.chatIcon}
      />
      <ThemedText type="title" style={styles.title}>Virtual Library Chat</ThemedText>
      
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#4a5568' : '#2d3748' }
        ]}
        onPress={showPolicies}
      >
        <ThemedText type="defaultSemiBold" style={styles.buttonText}>📜 Usage Policies</ThemedText>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#48bb78' : '#38a169' }
        ]}
        onPress={showLibrary}
        // onPress={() => Alert.alert("Enter Library", "Welcome to the Virtual Library!")}
      >
        <ThemedText type="defaultSemiBold" style={styles.buttonText}>📚 Enter Library</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 40,
  },
  chatIcon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 40,
    color: '#2d3748',
  },
  button: {
    width: '100%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});


// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12'
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });


// import { StyleSheet, Image, Alert, Pressable } from 'react-native';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   const showPolicies = () => {
//     Alert.alert(
//       "Usage Policies",
//       "1. Be respectful to all users\n2. No offensive language\n3. Keep discussions relevant\n4. No sharing of personal information\n5. Follow academic integrity rules",
//       [{ text: "I AGREE" }]
//     );
//   };

//   return (
//     <ThemedView style={styles.container}>
//       {/* Chat Icon Section */}
//       <ThemedView style={styles.header}>
//         <Image
//           source={require('@/assets/images/chat-icon.png')}
//           style={styles.chatIcon}
//         />
//         <ThemedText type="title" style={styles.title}>VIRTUAL LIBRARY CHAT</ThemedText>
//       </ThemedView>

//       {/* Buttons Section */}
//       <ThemedView style={styles.buttonGroup}>
//         <Pressable
//           style={({ pressed }) => [
//             styles.policyButton,
//             { opacity: pressed ? 0.8 : 1 }
//           ]}
//           onPress={showPolicies}
//         >
//           <ThemedText style={styles.buttonText}>📜 USAGE POLICIES</ThemedText>
//         </Pressable>

//         <Pressable
//           style={({ pressed }) => [
//             styles.enterButton,
//             { opacity: pressed ? 0.8 : 1 }
//           ]}
//           onPress={() => Alert.alert("Welcome", "Entering Virtual Library...")}
//         >
//           <ThemedText style={styles.buttonText}>📚 ENTER LIBRARY</ThemedText>
//         </Pressable>
//       </ThemedView>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     padding: 25,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     alignItems: 'center',
//     marginTop: 60,
//   },
//   chatIcon: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     textAlign: 'center',
//     textTransform: 'uppercase',
//     letterSpacing: 1.2,
//   },
//   buttonGroup: {
//     marginBottom: 40,
//     gap: 20,
//   },
//   policyButton: {
//     backgroundColor: '#34495e',
//     padding: 20,
//     borderRadius: 12,
//     alignItems: 'center',
//     elevation: 3,
//   },
//   enterButton: {
//     backgroundColor: '#27ae60',
//     padding: 20,
//     borderRadius: 12,
//     alignItems: 'center',
//     elevation: 3,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });
