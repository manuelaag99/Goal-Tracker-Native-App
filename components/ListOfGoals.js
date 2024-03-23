import { useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function ListOfGoals () {
	const [listOfGoals, setListOfGoals] = useState([]);

    return (
        <View style={{ flex: 4, width: "100%", justifyContent: "start", alignItems: "center" }}>
				{listOfGoals && (listOfGoals.length < 1) && <Text>
					No has registrado ninguna meta.
				</Text>}
				{listOfGoals && (listOfGoals.length > 0) && <Text style={{ textAlign: "center", margin: 10 }}>
					Mis metas
				</Text>}
				{listOfGoals && (listOfGoals.length > 0) && <FlatList 
					data={listOfGoals} 
					renderItem={({item}) => <View>
						<Text>
							{item.text}
						</Text>
					</View>} 
					keyExtractor={item => item.id} 
				/>}
			</View>
    )
}