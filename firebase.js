import { initializeApp }
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getDatabase
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig={

apiKey:
"AIzaSyBBQEvRnRw1Y8GLeEgzqDXPNBq4mCP6ZuU",

authDomain:
"survey-system-4ba3f.firebaseapp.com",

databaseURL:
"https://survey-system-4ba3f-default-rtdb.asia-southeast1.firebasedatabase.app",

projectId:
"survey-system-4ba3f",

storageBucket:
"survey-system-4ba3f.firebasestorage.app",

messagingSenderId:
"188351346155",

appId:
"1:188351346155:web:57c746980c4b945c1f15ae"

};


const app=

initializeApp(
firebaseConfig
);

export const auth=
getAuth(app);

export const db=
getDatabase(app);