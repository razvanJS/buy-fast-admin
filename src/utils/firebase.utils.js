import { initializeApp } from "firebase/app";
import { ref,onValue } from "firebase/database";
import { 
    getFirestore,
    doc,
    getDoc,
    query,
    setDoc,
    collection,
    writeBatch,
    getDocs,
    deleteDoc,
    updateDoc,
    deleteField,

 } from "firebase/firestore";

 const firebaseConfig={
    apiKey: "AIzaSyCyRfRj44mCA5CICrX3t56lqmiY339r8A4",
    authDomain: "buyfast-db.firebaseapp.com",
    projectId: "buyfast-db",
    storageBucket: "buyfast-db.appspot.com",
    messagingSenderId: "980145639110",
    appId: "1:980145639110:web:8a66524ac522caf63691c7",
    measurementId: "G-K2VWZK6JGZ"
 }



 const firebaseApp=initializeApp(firebaseConfig)

 export const db=getFirestore()

 export const getOrdersFromDb=async (collectionKey)=>{

  try{
     
   //1.create a collection ref for db->Orders object collection
   const collectionRef=collection(db,collectionKey)
   //2.create a query
   const q=query(collectionRef)

   //3.creeate a querySnapshoot
   const querySnapshoot=await getDocs(q)
      
 //4.querySnapshoot.docs-> all the docs in Orders Colection [..docs]
  //5 querySnapshoot[0].docs={id:razvanLres ->{}}
  const ordersData= querySnapshoot.docs.map(doc=>doc.data())
//   window.location.reload();
   

   return ordersData
             


  }


catch(err){
 console.error(err.message)
}

 }



export const deleteDocFromDb=async(colectionName,uid)=>{
   await deleteDoc(doc(db,colectionName,uid))

 }

export const updateDocumentDb=async(collectionName,documentName,title)=>{
   try{
  
   const newTitle=title.toLowerCase()

   const oldDocRef=doc(db,collectionName,documentName)
   //old document ref in DataBase

   const newDocRef=doc(db,collectionName,newTitle)
    //new document ref in DataBase

   const oldDocSnapShot=await getDoc(oldDocRef)
    // a way to access the old document data

   if(!oldDocSnapShot.exists())return;
     
    const docData=oldDocSnapShot.data()
    //the data form the document CN->Hats->{data obj}

    await setDoc(newDocRef,docData)

    //set the doc whit the new doc name with the same doc data
    
    await deleteDoc(oldDocRef)
    
    //delete the old document with the old name hats->Hat
    if(documentName!==title){
    await updateDoc(newDocRef,{
      title:newTitle
    })
   }

    //update the title filed


 

} 
catch(err){
   alert(err.message)
}

}

export const updateFieldOnDb=async(collectionName,docName,fildName,newFieldData)=>{
   const docRef=doc(db,collectionName,docName)
  await updateDoc(docRef,{
   [`${fildName}`]:newFieldData
  })
}