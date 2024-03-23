import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import AddGoalSection from './components/AddGoalSection';
import { useState } from 'react';
import ListOfGoals from './components/ListOfGoals';
import AddGoalModal from './components/Modals/AddGoalModal';

export default function App() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<AddGoalSection buttonPress={() => setIsModalVisible(true)} />
			<ListOfGoals />
			{isModalVisible && <AddGoalModal closeModal={() => setIsModalVisible(false)} />}
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
