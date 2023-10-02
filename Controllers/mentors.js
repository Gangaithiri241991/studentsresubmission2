import { ObjectId } from "bson";
import { client } from "../db.js";


export function getAllMentors(req){
  return client 
     .db("taskmon")
    .collection("mentor")

    .find(req.query)
    .toArray();
}

export function getMentorsById(id){
    return client
    .db("taskmon")
    .collection("mentor")
    .findOne({_id: new ObjectId(id)})
}

export function addMentorsData(data){
  return client
  .db("taskmon")
  .collection("mentor")
  .insertOne(data)

}

export function updateMentorsData(id, updatedData){
    return client
    .db("taskmon")
    .collection("students")
    .findOneAndUpdate({_id: new ObjectId(id)},{$set:updatedData})
}

export function deletaMentorsData(id){
    return client
  .db("taskmon")
  .collection("mentor")
  .deleteOne({_id: new ObjectId(id)})
}
