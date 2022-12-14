import { db } from '../firebaseConfig';
import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  orderBy,
} from 'firebase/firestore';

export const getInfo = async () => {
  try {
    const docRef = doc(db, 'info', 'qbhtCiabwexkLKazPIPd');
    const docSnap = await getDoc(docRef);

    const info = docSnap.data();

    return info;
  } catch (error) {
    return error;
  }
};

export const getExperience = async () => {
  try {
    const exp = [];
    const q = query(collection(db, 'experience'), orderBy('from', 'desc'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      exp.push({ ...doc.data(), id: doc.id });
    });

    return exp;
  } catch (error) {
    return error;
  }
};

export const getProjects = async () => {
  try {
    const projects = [];
    const querySnapshot = await getDocs(collection(db, 'projects'));

    querySnapshot.forEach((doc) => {
      projects.push({ ...doc.data(), id: doc.id });
    });

    return projects;
  } catch (error) {
    return error;
  }
};
