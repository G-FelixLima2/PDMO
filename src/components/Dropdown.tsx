import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native"
import React, { useCallback, useState } from "react"
import AntDesign from '@expo/vector-icons/AntDesign';

export function Dropdown() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = useCallback(() => setExpanded(!expanded), [])
    return (
        <View>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}
                onPress={toggleExpanded}>
                <Text>Selecione a seleção</Text>
                <AntDesign name={expanded ? "caret-up" : "caret-down"} />
            </TouchableOpacity>
            {expanded ? (
                <View style={styles.options}>
                    <FlatList
                        keyExtractor={(item) => item.value}
                        data={[
                            { value: 'React Native', label: 'rn' },
                            { value: 'Flutter', label: 'fl' }]}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text>{item.value}</Text>
                            </TouchableOpacity>
                        )} />
                </View>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({

    options: {
        position: 'absolute',
        top: 53,
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
    },

    button: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
    }
})