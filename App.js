import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import AddGoalSection from './components/AddGoalSection';
import { useState } from 'react';
import ListOfGoals from './components/ListOfGoals';
import AddGoalModal from './components/Modals/AddGoalModal';

export default function App() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [listOfGoals, setListOfGoals] = useState([]);
	function addNewGoalToListOfGoals (newGoal) {
		setListOfGoals(currentGoals => [...currentGoals, newGoal])
	}
	
	console.log(listOfGoals)
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<AddGoalSection buttonPress={() => setIsModalVisible(true)} />
			<ListOfGoals />
			{isModalVisible && <AddGoalModal closeModal={() => setIsModalVisible(false)} enterNewGoal={addNewGoalToListOfGoals} />}
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
