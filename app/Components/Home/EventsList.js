import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Home/homecss";
import Card from "./Card";

const EventsList = ({ data, title, navigation }) => {
  return (
    <View>
      {data.length > 0 ? (
        <>
          <View style={styles.eventListHeader}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
            <TouchableOpacity>
              <Text>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cards}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Card
                  key={item.Id}
                  title={
                    item.Name.length > 20
                      ? item.Name.slice(0, 20) + "..."
                      : item.Name
                  }
                  location={
                    item.Location.length > 20
                      ? item?.Location.slice(0, 20) + "..."
                      : item?.Location
                  }
                  date={item.EventStartDate.toString().split("T")[0]}
                  price={item.FreeEvent}
                  id={item.Id}
                  eventImage={item.Picture}
                  navigation={navigation}
                />
              )}
              keyExtractor={(item) => item.Id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </>
      ) : (
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          <Text>No Events</Text>
        </View>
      )}
    </View>
  );
};

export default EventsList;
