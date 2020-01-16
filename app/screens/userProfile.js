import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import { f, auth, database, storage } from "../../config/config.js";
import PhotoList from "../components/photolist.js";
/*TODO set params here & look into proptypes, mapStateToProps, and connect*/
const userProfile = props => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loaded: false
  //   };
  // }
  const [loaded, SetLoading] = useState(false);
  /* This is equivalent to the three lines of commented code below*/
  // const loadedState = useState(false);
  // const loaded = loadedState[0];
  // const SetLoading = loadedState[1]
  /* TODO   check to see if these are correct initial values for useState*/

  const [userId, SetUserId] = useState("");
  const [username, SetUsername] = useState("");
  const [name, SetName] = useState("");
  const [avatar, SetAvatar] = useState("");

  const checkParams = () => {
    let params = props.navigation.state.params;
    if (params) {
      if (params.userId) {
        SetUserId(params.userId);

        fetchUserInfo(params.userId);
      }
    }
  };

  const fetchUserInfo = userId => {
    //let that = this;
    database
      .ref("users")
      .child(userId)
      .child("username")
      .once("value")
      .then(function(snapshot) {
        const exists = snapshot.val() != null;
        if (exists) data = snapshot.val();
        //that.setState({ username: data });
        SetUsername(data);
      })
      .catch(error => console.log(error));

    database
      .ref("users")
      .child(userId)
      .child("name")
      .once("value")
      .then(function(snapshot) {
        const exists = snapshot.val() != null;
        if (exists) data = snapshot.val();
        // that.setState({ name: data });
        SetName(data);
      })
      .catch(error => console.log(error));

    database
      .ref("users")
      .child(userId)
      .child("avatar")
      .once("value")
      .then(function(snapshot) {
        const exists = snapshot.val() != null;
        if (exists) data = snapshot.val();
        //console.log(typeof data);
        //that.setState({ avatar: data, loaded: true });
        SetLoading(true);
        SetAvatar(data);
      })
      .catch(error => console.log(error));
  };

  // componentDidMount = () => {
  //   this.checkParams();
  // };
  // Study useEffect
  useEffect(() => {
    checkParams();
  });

  return (
    <View style={{ flex: 1 }}>
      {loaded == false ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              height: 70,
              paddingTop: 30,
              backgroundColor: "white",
              borderColor: "lightgrey",
              borderBottomWidth: 0.5,
              justifyContent: "center",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{ width: 100 }}
              onPress={() => props.navigation.goBack()}
            >
              <Text
                style={{ fontSize: 12, fontWeight: "bold", paddingLeft: 10 }}
              >
                Go Back
              </Text>
            </TouchableOpacity>
            <Text>Profile</Text>
            <Text style={{ width: 100 }}></Text>
          </View>
          <View
            style={{
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
              paddingVertical: 10
            }}
          >
            <Image
              source={{
                uri: avatar
              }}
              style={{
                marginLeft: 10,
                width: 100,
                height: 100,
                borderRadius: 50
              }}
            />
            <View
              style={{
                marginRight: 10
              }}
            >
              <Text>{name}</Text>

              <Text>{username}</Text>
            </View>
          </View>
          <PhotoList
            isUser={true}
            userId={userId}
            navigation={props.navigation}
          />
        </View>
      )}
    </View>
  );
};

export default userProfile;
