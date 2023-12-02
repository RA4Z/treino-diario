import { db } from '../config/firebase';
import { collection, doc, getDoc, onSnapshot, query } from 'firebase/firestore';


export async function infoUser(userID: any, setUser: any) {
    try {
        const ref = (await getDoc(doc(db, 'usuarios', userID))).data()
        setUser(ref)
        return 'ok'
    }
    catch (error) {
        console.log(error)
        return 'error'
    }
}

export async function visualizarUser(setUsers: any, setBackup?: any) {
    const ref = query(collection(db, "usuarios"))
    onSnapshot(ref, (querySnapshot) => {
        const user: any[] = []
        querySnapshot.forEach((doc) => {
            user.push({ id: doc.id, ...doc.data() })
        })
        setUsers(user)
        if (setBackup) setBackup(user)
    })
}

