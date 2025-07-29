import { View, StyleSheet, Text, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import { PlaceSearch } from '@components/PlaceSearch';
import { PlaceInMap } from '@components/PlaceInMap';
import { Placeholder } from '@components/Placeholder';
import { SearchHistory } from '@components/SearchHistory';
import { useState, useEffect, useCallback } from 'react';
import { getHistory, saveHistory, clearHistory } from '@utils/utilityHistory';
import { LOCATION_NOT_SELECTED, LOCATION_SUBTEXT, EXPLORE_THE_WORLD, SEARCH_LOCATION, RECENT_SEARCHES } from '@constants/strings';
import Assets from '@assets/index';
import { PlaceItem } from '@/types';

export const Home = () => {
    const [location, setLocation] = useState<PlaceItem | null>(null);
    const [history, setHistory] = useState<PlaceItem[]>([]);

    useEffect(() => {
        setHistory(getHistory());
    }, []);

    const onPlaceSelected = useCallback((place: PlaceItem) => {
        saveHistory(place);
        setLocation(place);
        setHistory(getHistory());
    }, []);

    const handleHistorySelect = useCallback((place: PlaceItem) => {
        setLocation(place);
    }, []);

    const handleClearHistory = useCallback(() => {
        clearHistory();
        setHistory([]);
        setLocation(null);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.keyboardContainer}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={80}
            >
                <View style={styles.innerContent}>
                    <Text style={styles.headerTitle}>{EXPLORE_THE_WORLD}</Text>

                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>{SEARCH_LOCATION}</Text>
                        <PlaceSearch onPlaceSelected={onPlaceSelected} />
                        {location ? (
                            <View style={styles.mapContainer}>
                                <PlaceInMap location={location} />
                            </View>
                        ) : (
                            <View style={styles.mapContainer}>
                                <Placeholder
                                    placeholderText={LOCATION_NOT_SELECTED}
                                    helperText={LOCATION_SUBTEXT}
                                    placeholderImage={Assets.locationOff}
                                />
                            </View>
                        )}
                    </View>

                    <View style={[styles.card, styles.historyCard]}>
                        <Text style={styles.sectionTitle}>{RECENT_SEARCHES}</Text>
                        <SearchHistory history={history} onSelect={handleHistorySelect} clearHistory={handleClearHistory} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2efef',
    },
    keyboardContainer: {
        flex: 1,
    },
    innerContent: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 10,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 24,
        textAlign: 'center',
        color: '#2c2c2c',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
        color: '#333',
    },
    mapContainer: {
        height: 200,
        borderRadius: 12,
        overflow: 'hidden',
    },
    historyCard: {
        flex: 1,
        minHeight: 150,
        maxHeight: 400,
    },
});
