import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export function Button2({ title, onPress }: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={style.button}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderRadius: 5,

        padding: 5,
    }
})