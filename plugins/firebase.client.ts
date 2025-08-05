// plugins/firebase.client.ts

import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: "AIzaSyCURv67UyKYqZKcHr9RpWZ4MJvgSEdtp-4",
        authDomain: "amai-fcd2d.firebaseapp.com",
        projectId: "amai-fcd2d",
        storageBucket: "amai-fcd2d.firebasestorage.app",
        messagingSenderId: "499508850758",
        appId: "1:499508850758:web:fb01bf00e95cd5b9921a47"
    };

    // Inicializa o Firebase
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    // Expor as instâncias do Firebase para o Nuxt App
    nuxtApp.provide('firestore', firestore);
});