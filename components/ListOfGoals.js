import { FlatList, Pressable, Text, View } from "react-native";

export default function ListOfGoals ({ list, sendIdOfItemToDelete }) {
    function deleteItem (id) {
        sendIdOfItemToDelete(id);
    }
    return (
        <View style={{ flex: 4, width: "100%", justifyContent: "start", alignItems: "center", padding: 10 }}>
				{list && (list.length < 1) && <Text>
					No has registrado ninguna meta.
				</Text>}
				{list && (list.length > 0) && <Text style={{ textAlign: "center", margin: 16 }}>
					Mis metas
				</Text>}
				{list && (list.length > 0) && <FlatList 
					data={list} 
					renderItem={({item}) => <View style={{ width: "100%", backgroundColor: "#f82", marginTop: 10 }}>
                        <Pressable android_ripple={{ color: "#fa4" }} onPress={() => deleteItem (item.id)} style={{ padding: 10, borderRadius: 8 }}>
                            <Text style={{ color: "#fff", width: "100%", textAlign: "center", fontWeight: "bold" }}>
                                {item.text}
                            </Text>
                        </Pressable>
					</View>} 
					keyExtractor={item => item.id} 
                    key={item => item.id} 
                    style={{ width: "100%" }}
				/>}
			</View>
    )
}