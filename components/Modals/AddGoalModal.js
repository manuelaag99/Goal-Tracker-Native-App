import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";

export default function AddGoalModal ({ closeModal, enterNewGoal }) {
    const [newGoal, setNewGoal] = useState({ text: "", id: "" });
    function inputChangeHandle (enteredValue) {
        setNewGoal({ text: enteredValue })
    }

    function addGoal () {
        enterNewGoal(newGoal);
        setNewGoal({ text: "", id: "" });
        closeModal();
    }

    return (
        <Modal animationType="slide">
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 30 }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <View style={{ width: "100%", justifyContent: "center" }}>
                        <TextInput style={{ width: "100%", padding: 10, borderWidth: 2, borderColor: "#777", borderRadius: 8 }} onChangeText={inputChangeHandle} value={newGoal.text} placeholder="Write down a goal here..." />
                    </View>

                    <View style={{ marginVertical: 10, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingHorizontal: 20 }}>
                        <Pressable style={{ width: "40%", backgroundColor: "#f82", borderRadius: 8 }} onPressIn={closeModal}>
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", padding: 10}}>
                                Cancel
                            </Text>
                        </Pressable>
                        <Pressable style={{ width: "40%", backgroundColor: "#f82", borderRadius: 8 }} onPressIn={addGoal}>
                            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", padding: 10}}>
                                Add
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}