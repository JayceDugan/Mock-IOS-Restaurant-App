import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  restaurantWrapper: {
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  restaurantDetails: {
    flex: 1
  },
  restaurantAction: {
    alignSelf: 'center',
    color: '#5898DC',
    fontWeight: '600'
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10
  }
})

const Restaurant = (props: any) => {
  const { item, index } = props
  const [showInformation, setShowInformation] = useState(false)
  const navigation = useNavigation();

  return (
    <View>
      <View style={[
        styles.restaurantWrapper,
        { backgroundColor: (index % 2 === 0) ? 'white' : '#F7F7F7' },
      ]} key={index}>
        <View>
          <Text style={{ opacity: 0.3 }}>{ index }</Text>
        </View>
        <View style={styles.restaurantDetails}>
          <Text>
            { item.name }
          </Text>
          <Text style={{ color: 'grey', marginLeft: 10 }}>{ item.address }</Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate('Info')}
            underlayColor='#5398DC'
            style={{
              borderWidth: 1,
              borderColor: '#5398DC',
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 20
            }}
          >
            <Text style={styles.restaurantAction}>
              View
            </Text>
          </TouchableHighlight>
        </View>
      </View>

      { showInformation && (
        <View>
          <Text>Information</Text>
        </View>
      )}
    </View>
  )
}

export default Restaurant
