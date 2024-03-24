import { useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function ListOfGoals ({ list }) {

    return (
        <View style={{ flex: 4, width: "100%", justifyContent: "start", alignItems: "center" }}>
				{list && (list.length < 1) && <Text>
					No has registrado ninguna meta.
				</Text>}
				{list && (list.length > 0) && <Text style={{ textAlign: "center", margin: 10 }}>
					Mis metas
				</Text>}
				{list && (list.length > 0) && <FlatList 
					data={list} 
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