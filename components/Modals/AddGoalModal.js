import { useState } from "react";
import { Image, Modal, Pressable, Text, TextInput, View } from "react-native";

export default function AddGoalModal ({ closeModal, enterNewGoal }) {
    const [newGoal, setNewGoal] = useState({ text: "", id: Math.random() * 10000 });
    function inputChangeHandle (enteredValue) {
        setNewGoal(...newGoal, { text: enteredValue })
    }

    function addGoal () {
        setIsButtonPressed(true);
        enterNewGoal(newGoal);
        setNewGoal({ text: "", id: "" });
        closeModal();
    }

    const [isButtonPressed, setIsButtonPressed] = useState(false);

    return (
        <Modal animationType="slide">
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 30, backgroundColor: "#fa4" }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <View>
                        <Image style={{ width: 100, height: 100 }} source={require("../../assets/images/goal.png")} />
                    </View>
                    <View style={{ width: "100%", justifyContent: "center", marginTop: 10 }}>
                        <TextInput style={{ backgroundColor: "#fff", width: "100%", padding: 10, borderWidth: 2, borderColor: "#777", borderRadius: 8 }} onChangeText={inputChangeHandle} value={newGoal.text} placeholder="Escribe una meta aquí..." />
                    </View>

                    <View style={{ marginVertical: 20, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingHorizontal: 20 }}>
                        <Pressable android_ripple={{ color: "#fa4" }} style={{ width: "40%", padding: 10, backgroundColor: "#f82", borderRadius: 8 }} onPress={closeModal}>
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}>
                                Cancelar
                            </Text>
                        </Pressable>
                        <Pressable android_ripple={{ color: "#fa4" }} style={{ width: "40%", padding: 10, backgroundColor: "#f82", borderRadius: 8 }} onPress={addGoal}>
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}>
                                Agregar
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}