import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDoc, query } from 'firebase/firestore';
import { collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: Firestore) { }

  docRef(path){
    return doc(this.firestore, path);
  }

  collectionRef(path){
    return collection(this.firestore, path);
  }

  getDocById(path){
    const dataRef = this.docRef(path);
    return getDoc(dataRef);
  }

  collectionDataQuery(path, queryFn?){
    let dataRef: any = this.collectionRef(path);
    if(queryFn) {
      const q = query(dataRef, queryFn);
      dataRef = q;
    }

    const collection_data = collectionData<any>(dataRef);
    return collection_data;
  }

  whereQuery(fieldPath, condition, value){
    return this.whereQuery(fieldPath, condition, value);
  }
}
