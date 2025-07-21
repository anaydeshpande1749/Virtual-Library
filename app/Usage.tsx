
// UsageScreen.tsx
import { ScrollView, StyleSheet, Pressable, View, ImageBackground } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function UsageScreen() {
  return (
    <ImageBackground 
      source={require('@/assets/images/USAGE-policy.png')} // Correct local image path
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ThemedView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            
            <ThemedText type="title" style={styles.header}>
              Virtual Library Usage Policies
            </ThemedText>

            <ThemedText style={styles.section}>1. General Rules</ThemedText>
            <ThemedText style={styles.text}>
              • Be respectful to all users{"\n"}
              • No harassment or discrimination{"\n"}
              • Maintain academic integrity{"\n"}
              • No spamming or advertisements
            </ThemedText>

            <ThemedText style={styles.section}>2. Content Guidelines</ThemedText>
            <ThemedText style={styles.text}>
              • Keep discussions relevant to studies{"\n"}
              • Cite sources properly{"\n"}
              • No plagiarized content{"\n"}
              • No sharing of copyrighted material
            </ThemedText>

            <ThemedText style={styles.section}>3. Privacy Policy</ThemedText>
            <ThemedText style={styles.text}>
              • Never share personal information{"\n"}
              • Respect other's privacy{"\n"}
              • Report suspicious activity{"\n"}
              • All chats are monitored for quality
            </ThemedText>

            <Pressable 
              style={({ pressed }) => [
                styles.button,
                { opacity: pressed ? 0.8 : 1 }
              ]}
              onPress={() => router.back()}
            >
              <ThemedText style={styles.buttonText}>I Understand</ThemedText>
            </Pressable>
          
          </ScrollView>
        </ThemedView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    //backgroundColor: 'rgba(255, 255, 255, 0.4)', // White transparent layer
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  scrollContainer: {
    paddingVertical: 30,
    paddingBottom: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#2c3e50',
  },
  section: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#34495e',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4a5568',
    marginBottom: 15,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});


// import { ScrollView, StyleSheet, Pressable } from 'react-native';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { router } from 'expo-router';
// import { Image, ImageBackground } from 'react-native';


// // Add these imports at the top
// //import { Image } from 'react-native';

// export default function UsageScreen() {
//   return (
//     <ImageBackground 
//       //source={require('@/assets/images/USAGE-policy.png')} 
//       source={{ uri: 'https://picsum.photos/400/800' }}

//       style={styles.backgroundImage}
//       resizeMode="cover"
//      >

//     <ThemedView style={styles.container}>

        

//       <ScrollView contentContainerStyle={styles.scrollContainer}>

        

//         <ThemedText type="title" style={styles.header}>
//           Virtual Library Usage Policies
//         </ThemedText>
        
//         <ThemedText style={styles.section}>1. General Rules</ThemedText>
//         <ThemedText style={styles.text}>
//           • Be respectful to all users{"\n"}
//           • No harassment or discrimination{"\n"}
//           • Maintain academic integrity{"\n"}
//           • No spamming or advertisements
//         </ThemedText>

//         <ThemedText style={styles.section}>2. Content Guidelines</ThemedText>
//         <ThemedText style={styles.text}>
//           • Keep discussions relevant to studies{"\n"}
//           • Cite sources properly{"\n"}
//           • No plagiarized content{"\n"}
//           • No sharing of copyrighted material
//         </ThemedText>

//         <ThemedText style={styles.section}>3. Privacy Policy</ThemedText>
//         <ThemedText style={styles.text}>
//           • Never share personal information{"\n"}
//           • Respect other's privacy{"\n"}
//           • Report suspicious activity{"\n"}
//           • All chats are monitored for quality
//         </ThemedText>

//         <Pressable 
//           style={({ pressed }) => [
//             styles.button,
//             { opacity: pressed ? 0.8 : 1 }
//           ]}
//           onPress={() => router.back()}
//         >
//           <ThemedText style={styles.buttonText}>I Understand</ThemedText>
//         </Pressable>
//       </ScrollView>
//     </ThemedView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   scrollContainer: {
//     paddingVertical: 30,
//     paddingBottom: 50,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//     color: '#2c3e50',
//   },
//   section: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginTop: 20,
//     marginBottom: 10,
//     color: '#34495e',
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: '#4a5568',
//     marginBottom: 15,
//   },
//   button: {
//     marginTop: 40,
//     backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },

//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(255, 255, 255, 0.9)', // Optional overlay for readability
//     paddingHorizontal: 20,
//   },
  
// });
