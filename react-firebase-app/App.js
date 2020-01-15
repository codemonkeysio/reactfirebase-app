import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from "react-native";
import { f, auth, database, storage } from "./config/config.js";
import Dashboard from "./components/Dashboard.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false
    };
    let that = this;
    f.auth().onAuthStateChanged(function(user) {
      if (user) {
        that.setState({
          loggedin: true
        });
        console.log("Logged in", user);
      } else {
        that.setState({
          loggedin: false
        });
        console.log("Logged out");
      }
    });
  }

  loginUser = async (email, pass) => {
    //console.log("hi");
    if (email != "" && pass != "") {
      try {
        let user = await auth.signInWithEmailAndPassword(email, pass);
        console.log(user);
      } catch (error) {
        console.log(`user not found ${error}`);
      }

      //
    } else {
      alert("missing email or password");
    }
  };

  registerUser = (email, password) => {
    console.log(email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userObj => console.log(email, password, userObj))
      .catch(error => console.log("error logging in", error));
  };

  signUserOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("logged out");
      })
      .catch(error => {
        console.log("logged in", error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Dashboard></Dashboard>
        <Text style={newStyles.container}>
          <Text>----</Text>
          Open up App.js to start working on your app! wank
        </Text>
        {this.state.loggedin == true ? (
          <View>
            <TouchableHighlight
              onPress={() => this.signUserOut()}
              style={{ backgroundColor: "blue" }}
            >
              <Text>Sign Out</Text>
            </TouchableHighlight>
            <Text>Logged in ...</Text>
          </View>
        ) : (
          <View>
            {this.state.emailView == true ? (
              <View>
                <Text>Email:</Text>
                <TextInput
                  onChangeText={text => this.setState({ email: text })}
                  value={this.state.email}
                ></TextInput>

                <Text>Password:</Text>
                <TextInput
                  onChangeText={text => this.setState({ pass: text })}
                  secureTextEntry={true}
                  value={this.state.pass}
                ></TextInput>

                <TouchableHighlight
                  onPress={() =>
                    this.loginUser(this.state.email, this.state.pass)
                  }
                  style={{ backgroundColor: "green" }}
                >
                  <Text style={{ color: "#fff" }}>Login</Text>
                </TouchableHighlight>
              </View>
            ) : (
              <View></View>
            )}

            <TouchableHighlight
              onPress={() => this.setState({ emailView: true })}
              style={{ backgroundColor: "green" }}
            >
              <Text style={{ color: "#fff" }}>Login with email</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() =>
                this.loginUser("testemailaddress@gmail.com", "fakepassword")
              }
              style={{ backgroundColor: "green" }}
            >
              <Text style={{ color: "#fff" }}>Login with facebook</Text>
            </TouchableHighlight>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const newStyles = StyleSheet.create({
  container: {
    color: "blue"
  }
});
