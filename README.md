# Payslip App using Ionic React + Capacitor

This app is an Ionic app using React + Capacitor that will display a list of mock generated payslips.
The app can be run in Web, Android and iOS.

## Setup

1. Download or clone the repository into your local directory.

2. Inside the directory of the project, run the following command to install the node packages and build the app

```

$ npm install
$ npm run build

```

## Run in Web

1. Run the following command to open the application in browser

```

$ ionic serve

```

Note: Before running in iOS and Android, please make sure you have already setup the [environment for both system ](https://capacitorjs.com/docs/getting-started/environment-setup)

## Run in iOS

1. Run the following command to open the application in iOS (Make sure you are running it in a MacOS)

```
$ npx cap sync
$ npx cap run ios (this will directly open the app in iOS Simulator)
```

or

```
$ npx cap sync
$ npx cap open ios (this will open the project in Xcode, then run the app from there)

```

## Run in Android

1. Run the following command to open the application in Android (Make sure you are running it in a MacOS)

```
$ npx cap sync
$ npx cap run android (this will directly open the app in Android Emulator - please make sure you have already setup your Android Devices)
```

or

```
$ npx cap sync
$ npx cap open android (this will open the project in Android Studio, then run the app from there)

```
