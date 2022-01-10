import express from "express";
import { client } from "./index.js";


async function updatemovie(id, data) {
  return await client.db("mongofirst").collection("movie").updateOne({ id: id }, { $set: data });
}
 async function filtermovie(filter) {
  return await client.db("mongofirst").collection("movie").find(filter).toArray();
}
async function fullmovie(data) {
  return await client.db("mongofirst").collection("movie").insertMany(data);
}
async function deletemovie(id) {
  return await client.db("mongofirst").collection("movie").deleteOne({ id: id });
}
async function getMoviebyid(id) {
  return await client.db("mongofirst").collection("movie").findOne({ id: id });
}
export{
    fullmovie,
    getMoviebyid,
    deletemovie,
    filtermovie,
    updatemovie
}