import { initializeApp } from "firebase/app";

import
 {getAuth,
 signInWithEmailAndPassword,

 

 } from "firebase/auth"


import { 
    getFirestore,
    doc,
    getDoc,
    query,
    setDoc,
    collection,
   
    getDocs,
    deleteDoc,
    updateDoc,


    

 } from "firebase/firestore";

import { ADMIN_UID } from "../adminUid";


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
 export const auth=getAuth()


export const signInEmail=async(email,password)=>{


   try{
     if(!email||!password)return;
    const data= await signInWithEmailAndPassword(auth,email,password)
    if(!data)return;
    const {user}=data;
    if(user.uid!==ADMIN_UID)return alert("Admin is not found in the datebase");
   
    return user;
   }
   
   catch(err){
   
    
    if(err.code==='auth/user-not-found'){
     alert("User are not found in the datebase")
    }
    else if(err.code==='auth/wrong-password'){
     alert("Password its wrong")
    }
    else {
     alert(err.message)
    }
   
    
   }
}



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



 export const addProductToDb=async(collectionName,docName,newItems)=>{
   try{
      const docRef=doc(db,collectionName,docName)
      const docSnapShot=await getDoc(docRef)
      if(!docSnapShot.exists())return;
      await updateDoc(docRef,{
         items:newItems
      })
   }
   catch(err){
      alert(err.message)
   }
 }

 export const updateProductDetails=async(collectionName,docName,docId,newObj)=>{
   try{
      const docRef=doc(db,collectionName,docName)
      const docSnapShot=await getDoc(docRef)
      if(!docSnapShot.exists())return;
      const docData=docSnapShot.data()
      const newItems=docData.items.filter(item=>item.id!==docId)

      const newDataItems=[newObj,...newItems]

      await updateDoc(docRef,{
         items:newDataItems
      })



   }
   catch(err){
      alert(err.message)
   }
 }

export const deleteProduct=async(collectionName,docName,docId)=>{
   try{
      const oldDocRef=doc(db,collectionName,docName)
      const oldDocSnapShot=await getDoc(oldDocRef)
      if(!oldDocSnapShot.exists())return;
      const docData=oldDocSnapShot.data()
     
      const filterItems=docData.items.filter((item,index)=>item.id!==docId)
      
      
      
      
      await updateDoc(oldDocRef,{
         items:filterItems
      })
      

   }
   catch(err){
    alert(err.message)
   }
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

export const deleteDocUsingDocName=async(collectionName,docName)=>{
   const docRef=doc(db,collectionName,docName)
   await deleteDoc(docRef)
}
export const addDocToDB=async(collectionName,object)=>{
  
   await setDoc(doc(db, collectionName, object.title), {
      ...object
    });
}

