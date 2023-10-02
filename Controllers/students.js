import { ObjectId } from "bson";
import { client } from "../db.js";


export function getAllStudents(req){
    return client 
     .db("taskmon")
    .collection("students")
    .find(req.query)
    .toArray();
}

export function getStudentsById(id){
    return client
    .db("taskmon")
    .collection("students")
    .findOne({_id: new ObjectId(id)})
}

export function addStudentsData(data){
  return client
  .db("taskmon")
  .collection("students")
  .insertOne(data)

}

export function updateStudentData(id, updatedData){
    return client
    .db("taskmon")
    .collection("students")
    .findOneAndUpdate({_id: new ObjectId(id)},{$set:updatedData})
}

export function deletaStudentsData(id){
    return client
  .db("taskmon")
  .collection("students")
  .deleteOne({_id: new ObjectId(id)})
}
export function SpecificMentor(id){
  return client
.db("taskmon")
.collection("students")
.find({ mentor: { $ne: null } })

    
}
export function noMentors(id){
  return client
.db("taskmon")
.collection("students")
.find({ mentor: { $ne: null } })

    
}
export function mentorsa(id){

  return client
.db("taskmon")
.collection("students")
.find({ mentor: mentorId }).toArray();
    
}


















 