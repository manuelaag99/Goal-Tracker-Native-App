import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import AddNoteSection from './components/AddNoteSection';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<AddNoteSection />
			<View style={{ flex: 4, width: "100%", justifyContent: "center", alignItems: "center" }}>
				<Text style={{ textAlign: "center", margin: 10 }}>
					Mis metas
				</Text>
				<ScrollView>

				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
