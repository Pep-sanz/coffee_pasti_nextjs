import { auth, db } from "@/lib/firebase/firebase.config";
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import bcrypt from "bcrypt";

export const getData = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const dataList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(dataList); // Debugging
    return dataList;
  } catch (error: any) {
    console.error("Error getting documents: ", error);
    throw new Error(error.message);
  }
};

// get data by id
export const getDataById = async (collectionName: string, id: string) => {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  console.log(data); // Debugging
  return data;
};

// register users
export const registerUser = async (userData: { userName: string; email: string; password: string; role?: string }) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    const uid = user.user.uid;

    userData.role = userData.role || "user";

    const docRef = doc(db, "users", uid);
    await setDoc(docRef, {
      userName: userData.userName,
      email: userData.email,
      role: userData.role,
    });

    return user;
  } catch (error: any) {
    console.log(error);
    throw error.message || "Failed to register user";
  }
};

// login users
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    return userCredential.user;
  } catch (error: any) {
    console.error("Sign in error:", error);
    throw error.message;
  }
};
