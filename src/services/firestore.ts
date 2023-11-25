import { db } from '../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';


export async function infoUsuario(nomeUser: string, setUser: any) {
    try {
        let usuario: any[] = []
        const userRef = collection(db, 'usuarios');
        const q = query(userRef, where("nome", "==", nomeUser));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let info = { id: doc.id, ...doc.data() }
            usuario.push(info)
        });
        setUser(usuario[0])
    } catch (error) {
        console.log(error)
    }
}
