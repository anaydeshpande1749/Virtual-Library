// import React from 'react';
// import { View, StyleSheet, Dimensions } from 'react-native';
// import pdf from 'react-native-pdf'

// const PYQDetail = ({ route }) => {
//   const { item } = route.params; // ✅ Extract data from route params

//   return (
//     <View style={styles.container}>
//       <Pdf
//         source={{ uri: item.pdfUrl }}
//         style={styles.pdf}
//         onLoadComplete={(numberOfPages) => console.log(`Number of pages: ${numberOfPages}`)}
//         onPageChanged={(page) => console.log(`Current page: ${page}`)}
//         onError={(error) => console.log(error)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   pdf: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });

// export default PYQDetail;
