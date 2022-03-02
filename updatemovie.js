
import { client } from "./index.js";
import bcrypt from 'bcrypt'

async function updatemovie(id,data) {
  return await client.db("mongofirst")
  .collection("movie")
  .updateOne({ _sid: ObjectId(id) }, { $set: data });
}
 async function filtermovie(filter) {
  return await client.db("mongofirst")
  .collection("movie")
  .find(filter).toArray();
}
async function fullmovie(data) {
  return await client.db("mongofirst")
  .collection("movie")
  .insertMany(data);
}
async function deletemovie(id) {
  return await client.db("mongofirst")
  .collection("movie").deleteOne({ _id: ObjectId(id) });
}
async function getMoviebyid(_id) {
  return await client.db("mongofirst")
  .collection("movie").findOne({ _id:ObjectId(id) });
}
async function genpassword(password){
  const NO_OF_ROUNDS=10;
  const salt=await bcrypt.genSalt(NO_OF_ROUNDS);
  console.log("salt",salt);
  const hashedPassword=await bcrypt.hash(password,salt);
  console.log(hashedPassword);
  return hashedPassword;
}
export{
    fullmovie,
    getMoviebyid,
    deletemovie,
    filtermovie,
    updatemovie,
    genpassword
}