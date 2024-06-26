import { Pressable, Text, View } from "react-native";

export default function AddGoalSection ({ buttonPress }) {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
			<Pressable android_ripple={{ color: "#fa4" }} style={{ backgroundColor: "#f82", padding: 10, borderRadius: 6, margin: 16, width: "100%" }} onPressIn={buttonPress}>
				<Text style={{ color: "#fff", fontWeight: "bold", marginHorizontal: 5 }}>
					Agregar nueva meta
				</Text>
			</Pressable>
		</View>
    )
}