import firebase from 'firebase';
const config={
    apiKey:'AAAARNsqtpY:APA91bFDuK-uI-BKDr7JozW-z0QY0I_2rhM3_WlH1laHIKxjiKnnbNA7gKg-gdxscYDwH11XZ6mRLokEytvRPoIiA9_RrhEKAqoI4rFdsZs9HxcYnpzZt07vpEwSZnKGv9NxfkYRCyDJ',
    authDomain:'travelsoul-8adb3.firebaseapp.com',
    databaseURL:'https://travelsoul-8adb3.firebaseio.com',
    projectId:'travelsoul-8adb3',
    storageBucket:'travelsoul-8adb3.appspot.com',
    messagingSenderId:'295734785686'
};
const fire=firebase.initializeApp(config);
export default fire;