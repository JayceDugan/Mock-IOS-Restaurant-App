import React, { useState } from "react";
import { View, TextInput, Keyboard, FlatList, StyleSheet } from "react-native";

import Header from 'components/Header';
import Restaurant from "components/Restaurant";
import restaurants from '../../data/restaurants.json';

const RestaurantList = () => {
  const [filter, setFilter] = useState('')
  const restaurantsList = filter ? restaurants.filter((x) => x.name.toLowerCase().includes(filter.toLowerCase())) : restaurants

  return (
    <FlatList
      ListHeaderComponent={
        <View style={{ backgroundColor: 'white' }}>
          <Header />
          <View style={{ paddingTop: 10 }}>
            <TextInput
              style={styles.input}
              value={filter}
              onChangeText={setFilter}
              onSubmitEditing={Keyboard.dismiss}
              placeholder="Search"
            />
          </View>
        </View>
      }
      stickyHeaderIndices={[0]}
      data={restaurantsList}
      renderItem={({ item, index }) => (<Restaurant item={item} index={index} />)}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f7f7f7"
  }
})

export default RestaurantList;
