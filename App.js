import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import AddGoalSection from './components/AddGoalSection';
import { useState } from 'react';
import ListOfGoals from './components/ListOfGoals';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<AddGoalSection />
			<ListOfGoals />
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
