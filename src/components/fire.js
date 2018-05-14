import  * as fire from 'firebase';


const devConfig = {
  apiKey: "AIzaSyAPIjWeBPrnNbAXvaVgDG-tyo3TGrVbPw4",
  authDomain: "react-basic-app-a6490.firebaseapp.com",
  databaseURL: "https://react-basic-app-a6490.firebaseio.com",
  projectId: "react-basic-app-a6490",
  storageBucket: "react-basic-app-a6490.appspot.com",
  messagingSenderId: "1035882992917"
};

const prodConfig = {
  apiKey: "AIzaSyAPIjWeBPrnNbAXvaVgDG-tyo3TGrVbPw4",
  authDomain: "react-basic-app-a6490.firebaseapp.com",
  databaseURL: "https://react-basic-app-a6490.firebaseio.com",
  projectId: "react-basic-app-a6490",
  storageBucket: "react-basic-app-a6490.appspot.com",
  messagingSenderId: "1035882992917"
};


const config = process.env.NODE_ENV === 'production'? prodConfig: devConfig;

fire.initializeApp(config);
const auth = fire.auth();
export {
  auth,
};
