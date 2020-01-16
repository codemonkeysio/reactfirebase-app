First make a new directory

`mkdir reactnative`

Go into project directory

`cd reactnative`

Then install the newest version of expo globally

`npm install -g expo`

Next initialize the app

`expo init react-native-app`

Go into project directory

`cd react-native-app`

The Permissions API was moved to a separate package, so importing them from the "expo" package is no longer supported

`expo install expo-permissions`

The ImagePicker API was moved to a separate package, so importing them from the "expo" package is no longer supported

`expo install expo-image-picker`
