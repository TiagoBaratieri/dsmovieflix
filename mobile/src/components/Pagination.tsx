import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { text, theme } from '../styles';

type Props = {
    totalPages: number;
    activePage: number;
    onChange: (item: number) => void;
}

const generateList = (amount: number) => {
    return Array.from(Array(amount).keys());
}

const Pagination = ({ totalPages, activePage, onChange }: Props) => {
    const items = generateList(totalPages);

    return (
        <View style={theme.paginationCoreContainer}>
            {items.map(item => (
                <TouchableOpacity
                    key={item}
                    style={theme.paginationItem}
                    onPress={() => onChange(item)}
                >
                    <Text style={text}>{item + 1}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default Pagination; 