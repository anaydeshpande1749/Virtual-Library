import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import BookItem from '@/components/shared/BookItem';

const pyqData = [
  {
    id: 1,
    title: "Engineering Mathematics-I",
    category: "CSE",
    semester: 1,
    image: require('../../assets/images/pyq1.png'),
    description: "CSE Semester 1 Engineering Mathematics-I Previous Year Questions",
    pdfUrl: "https://muquestionpapers.com/storage/questionpapers/be_first-year-engineering_semester-1_2024_december_applied-mathematics-i-nep-2020-scheme.pdf"
  },
  {
    id: 2,
    title: "Engineering Physics",
    category: "CSE",
    semester: 1,
    image: require('../../assets/images/pyq1.png'),
    description: "CSE Semester 1 Engineering Physics Previous Year Questions",
    pdfUrl: "https://muquestionpapers.com/storage/questionpapers/be_first-year-engineering_semester-1_2024_december_applied-physics-nep-2020-scheme.pdf"
  },
  {
    id: 3,
    title: "Basic Electrical Engineering",
    category: "CSE",
    semester: 2,
    image: require('../../assets/images/pyq1.png'),
    description: "CSE Semester 2 BEE Previous Year Questions",
    pdfUrl: "https://muquestionpapers.com/storage/solutions/be_first-year-engineering_semester-1_2017_december_basic-electrical-engineering-cbcgs.pdf"
  },
  {
    id: 4,
    title: "Engineering Chemistry",
    category: "EXTC",
    semester: 1,
    image: require('../../assets/images/pyq1.png'),
    description: "EXTC Semester 1 Engineering Chemistry PYQs",
    pdfUrl: "https://muquestionpapers.com/storage/questionpapers/be_first-year-engineering_semester-1_2024_december_applied-mathematics-i-nep-2020-scheme.pdf"
  },
  {
    id: 5,
    title: "Engineering Drawing",
    category: "ME",
    semester: 1,
    image: require('../../assets/images/pyq1.png'),
    description: "ME Semester 1 Engineering Drawing PYQs",
    pdfUrl: "https://www.africau.edu/images/default/sample.pdf"
  },
];

const categories = ["CSE", "EXTC", "ME", "IT"];
const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

const PyqPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("CSE");
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const router = useRouter();

  const filteredPYQs = pyqData.filter(
    (item) =>
      item.category === selectedCategory &&
      (selectedSemester === null || item.semester === selectedSemester)
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Branch Filter */}
        <ScrollView horizontal contentContainerStyle={styles.pillContainer} showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.pill, selectedCategory === category && styles.activePill]}
              onPress={() => {
                setSelectedCategory(category);
                setSelectedSemester(null);
              }}
            >
              <Text style={[styles.pillText, selectedCategory === category && styles.activeText]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Semester Filter */}
        <ScrollView horizontal contentContainerStyle={styles.pillContainer} showsHorizontalScrollIndicator={false}>
          {semesters.map((sem) => (
            <TouchableOpacity
              key={sem}
              style={[styles.pill, selectedSemester === sem && styles.activePill]}
              onPress={() => setSelectedSemester(sem)}
            >
              <Text style={[styles.pillText, selectedSemester === sem && styles.activeText]}>
                Sem {sem}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* PYQ Display */}
        {selectedSemester ? (
          <>
            <Text style={styles.semesterHeader}>Semester {selectedSemester}</Text>
            {filteredPYQs.length > 0 ? (
              <FlatList
                data={filteredPYQs}
                numColumns={1}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.cardWrapper}>
                    <BookItem
                      book={item}
                      onPress={() => {
                        if (item.pdfUrl) {
                          if (Platform.OS === 'web') {
                            window.open(item.pdfUrl, '_blank');
                          } else {
                            router.push({
                              pathname: "/pdf-viewer",
                              params: { url: item.pdfUrl },
                            });
                          }
                        } else {
                          alert("No PDF URL provided.");
                        }
                      }}
                    />
                  </View>
                )}
                contentContainerStyle={styles.grid}
              />
            ) : (
              <Text style={styles.emptyText}>No PYQs in this semester.</Text>
            )}
          </>
        ) : (
          <Text style={styles.selectText}>Please select a semester</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  scrollContainer: {
    paddingBottom: 100,
    paddingHorizontal: 10,
  },
  pillContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
    paddingHorizontal: 10,
  },
  pill: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    margin: 6,
    minWidth: 80,
    maxHeight: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  activePill: {
    backgroundColor: "#8A2BE2",
  },
  pillText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  semesterHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#333",
  },
  grid: {
    paddingBottom: 80,
    alignItems: 'center',
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
  selectText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },
  cardWrapper: {
    width: '90%',
    marginVertical: 10,
  },
});

export default PyqPage;
