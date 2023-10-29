import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../../Home/homecss";

function FeaturedEvent({ data }) {
  const { Name, Picture, EventStartDate } = data;
  return (
    <View style={styles.featuredEvent}>
      <View
        style={{
          width: "100%",
          height: 180,
          marginBottom: 40,
        }}
      >
        <Image
          source={
            Picture
              ? { uri: Picture }
              : require("../../../assets/featured.png")
          }
          style={{
            width: "100%",
            height: 180,
            borderRadius: 20,
          }}
        />
        <View style={styles.eventInfoCard}>
          <Text style={styles.textsHeader}>
            {Name != "" ? Name : "Music of the Spheres"}
          </Text>
          <Text style={styles.texts}>
            Event Date:{" "}
            {EventStartDate != ""
              ? EventStartDate.split("T")[0]
                  .split("-")
                  .reverse()
                  .join(" ")
              : "2021-08-20"}
          </Text>
          <Text style={styles.texts}>
            Event Time:{" "}
            {EventStartDate != ""
              ? EventStartDate.split("T")[1].split(":")[0] +
                ":" +
                EventStartDate.split("T")[1].split(":")[1]
              : "20:00"}{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default FeaturedEvent;
