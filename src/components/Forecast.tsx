import * as React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

interface ForecastProps {
  data: {
    time: string;
    weather: string;
    temperature: string;
  }[];
}

export const Forecast: React.FC<ForecastProps> = ({ data }) => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollView}>
      <View style={styles.columnsContainer}>
        {data.map((item, index) => (
          <View style={styles.column} key={index}>
            <Text>{item.time}</Text>
            <Text>{item.weather}</Text>
            <Text>{item.temperature}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
  },
  columnsContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Alinea horizontalmente al centro
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    width: 100, // Ancho de cada columna
    height: 100, // Alto de cada columna
    margin: 5,
  },
});
