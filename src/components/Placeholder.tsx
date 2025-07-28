import { Text, View, StyleSheet, Image } from 'react-native';
import React from 'react';

// PlaceHolder component to display when no location is selected

interface Props {
  placeholderText: string;
  helperText?: string;
  placeholderImage?: any;
}

export const Placeholder = React.memo(({ placeholderText, helperText, placeholderImage }: Props) => {
    return (
        <View style={styles.placeholder}>
            {placeholderImage && <Image
                source={placeholderImage}
                style={styles.placeholderImage}
                resizeMode="contain"
            />}
            {placeholderText && <Text style={styles.placeholderText}>{placeholderText}</Text>}
            {helperText && <Text style={styles.helperText}>{helperText}</Text>}
        </View>
    );
});

const styles = StyleSheet.create({
    placeholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    placeholderImage: {
        width: 80,
        height: 80,
        marginBottom: 20,
    },
    placeholderText: {
        fontSize: 18,
        color: '#444',
        fontWeight: '600',
        marginBottom: 8,
    },
    helperText: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        paddingHorizontal: 24,
    },
});
