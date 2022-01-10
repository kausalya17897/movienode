//const { request, response } = require('express');
//const express = require('express');//type:"common.js";

import express, { response } from "express";
import { ConnectionCheckedInEvent, MongoClient } from "mongodb";
import { EventEmitter } from 'events';
import { request } from "http";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env);
const eventEmitter = new EventEmitter();
//const { param } = require('express/lib/request');
//const timerEventEmitter = new EventEmitter();
//timerEventEmitter.emit("update");
const app = express();
// listen to the event
eventEmitter.on('myEvent', () => {
  console.log('Data Received');
});

// publish an event
eventEmitter.emit('myEvent');
app.use(express.json());//middleware
const PORT=process.env.PORT;
/*const movies=[
    {id:"100",
    name:"Finding Nemo",
    poster:"https://lumiere-a.akamaihd.net/v1/images/pp_findingnemo_herobannermobile_19752_7810e507.jpeg?region=0,0,640,480",
    rating:"10",
    summary:"Finding Nemo is a 2003 American computer-animated adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures.",
    language:"english",
    trailer:"https://www.youtube.com/embed/2zLkasScy7A?list=TLPQMjAxMTIwMjF0W5QeqdyCyA"},
        {id:"101",
        name:"Alice in Wonderland",
         poster: "https://i.pinimg.com/originals/c5/af/d0/c5afd03996fc8a4c20ea5ab110c93a65.jpg",
         rating:"8",
         language:"english",
         summary:"Alice in Wonderland is a 2010 American dark fantasy film directed by Tim Burton from a screenplay written by Linda Woolverton. The film stars Johnny Depp, ..",
        trailer:"https://www.youtube.com/embed/9POCgSRVvf0"},
        {id:"102",
        name:"Frozen",
        poster:"https://i.ytimg.com/vi/MdIDq6o4i-Y/movieposter_en.jpg",
        rating:"9",
        language:"english",
        summary:"Frozen is a 2013 American computer-animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.",
    trailer:"www.youtube.com/embed/Zi4LMpSDccc"},
      
        {id:"103",
        name:"The lion king",
        poster:"https://lumiere-a.akamaihd.net/v1/images/image_359725f2.jpeg?region=0,0,640,480",
        rating:"8",
        summary:" The Lion King ... Disney's film journeys to the African savanna where a future king is born. Simba idolizes his father, King Mufasa, and takes to ..",
        trailer:"https://www.youtube.com/embed/7TavVZMewpY"},
      {id:"104",
      name:"Dumbo",
        poster:"https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/4575/674575-v",
        rating:"9",
        language:"english",
        summary:"Dumbo is a 2019 American fantasy period adventure film directed by Tim Burton, with a screenplay by Ehren Kruger. The film is a live-action adaptation and ...",
    trailer:"https://www.youtube.com/embed/7NiYVoqBt-8"},
        {id:"105",
        name:"master",
      poster:"https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_FMjpg_UX1000_.jpg",
      rating:"9",
      language:"tamil",
      summary:"Troubled alcoholic teacher JD is sent to teach at a juvenile reform school. But when he realises a dangerous criminal is using his students to cover up his crimes, JD sets out to stop him. Strong violence, drug misuse.",
    trailer:"https://www.youtube.com/embed/UTiXQcrLlv4"},
      {id:"106",
      name:"aranmanai-3",
      poster:"https://m.media-amazon.com/images/M/MV5BYWIyNTA3MjgtM2QxMS00MDBkLTg2MDMtNmMzNTlmYzU1ZjI1XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      rating:"9",
      language:"tamil",
      summary:"At a remote and mysterious palace, a man falls in love with a woman who's guarded by angry spirits.",
      trailer:"https://www.youtube.com/embed/MRiK4WHaJb8"},
      {id:"107",
      name:"udanpirappe",
      poster:"https://i.ytimg.com/vi/rmgjG_pqMuQ/maxresdefault.jpg",
      rating:"8",
      language:"tamil",
      summary:"A woman tries to establish peace in her family when her husband and her brother have an intense difference of opinion over the efficacy of the justice system.",
      trailer:"https://www.youtube.com/embed/Luhzp1435sI"},
      
      {id:"108",
      name:"lift",
      poster:"https://tamil.samayam.com/photo/msid-86448369,imgsize-127780/pic.jpg",
      rating:"7",
      language:"tamil",
      summary:"A routine working day turns unusual for Guru and Harini when they get trapped in their haunted office. A patterned game unlocks a mystery, and a lift is their only way out.",
     trailer:"https://www.youtube.com/embed/Kj50JODc5Cc"},
      {id:"109",
      name:"Jai Bhim",
      poster:"https://gumlet.assettype.com/swarajya%2F2021-11%2F9dfb808a-4d4d-4e86-adaa-aa7abf1fdd0e%2FMV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5__V1_FMjpg_UX1000_.jpg?q=75&auto=format%2Ccompress&w=1200",
      rating:"8",
      language:"tamil",
      summary:" As for Jai Bhim, it is perhaps one of the boldest films to come out of Tamil cinema. Most of you might confuse its boldness with the film's ...",
    trailer:"https://www.youtube.com/embed/UY34eAUxuRk"}
     
    ]*/
   
   //one &only line change to make it online
    //const MONGO_URL="mongodb://localhost";
    const MONGO_URL=process.env.MONGO_URL;
    
    async function createConnection(){
const client=new MongoClient(MONGO_URL)
await client.connect();//promise
console.log("mongodb connected");
return client;
    }
    const client=await createConnection();
app.get('/',async(request, response) =>{
  response.send("Hello World😊")
});
app.get("/movies",async(request,response)=>{
  //const {language,rating}=request.query;
  //if(language){
  //const movieslan=movies.filter((a)=>a.language===language);
  //response.send(movieslan)
  //}if(rating){
   // const movieslan=movies.filter((a)=>a.rating===rating);
    //response.send(movieslan)
    //}else{
    //response.send(movies)
 // }
 //let filmovie=movies
 const filter=request.query;
 console.log(filter);
 if(filter.rating){
   filter.rating=parseInt(filter.rating);
 }
  await filtermovie(filter, response);
});


app.post("/movies",async(request,response)=>{

  const data=request.body;
  const result = await fullmovie(data);
  response.send(result);
  //response.send(data);
});
app.get("/movies/:id",async(request,response)=>{
  const {id}=request.params;
  const movie=await getMoviebyid(id)
  //db.movies.findOne({id:"102"})
  //const movie=movies.find((a)=>a.id===id);
  movie
  ? response.send(movie)
  : response.status(404).send({message:"no matching"});
});
app.delete("/movies/:id",async(request,response)=>{
  const {id}=request.params;
  const movie=await deletemovie(id)
  //db.movies.findOne({id:"102"})
  //const movie=movies.find((a)=>a.id===id);
  movie.deletedCount>0
  ? response.send(movie)
  : response.status(404).send({message:"no matching"});
});
app.put("/movies/:id",async(request,response)=>{
  const {id}=request.params;
  const data=request.body;
  const movieid = await uupdatemovie(id, data);
  //db.movies.findOne({id:"102"})
  //const movie=movies.find((a)=>a.id===id);
  //movie
 // ? 
  response.send(movieid)
 // : response.status(404).send({message:"no matching"});
});
eventEmitter.on('myEvent', () => {
  console.log('Data Received2');
});
app.listen(process.env.PORT,()=>console.log("App is start in port",PORT));

eventEmitter.on('myEvent', () => {
  console.log('Data Received');
});

async function filtermovie(filter, response) {
  const filmovie = await client.db("mongofirst").collection("movie").find(filter).toArray(); //cursor to array
  response.send(filmovie);
}

async function fullmovie(data) {
  const result = await client.db("mongofirst").collection("movie").insertMany(data);
  console.log(data);
  return result;
}

async function uupdatemovie(id, data) {
  const result = await client.db("mongofirst").collection("movie").updateOne({ id: id }, { $set: data });
  const movieid = await getMoviebyid(id);
  return movieid;
}

async function deletemovie(id) {
  return await client.db("mongofirst").collection("movie").deleteOne({ id: id });
}

async function getMoviebyid(id) {
  return await client.db("mongofirst").collection("movie").findOne({ id: id });
}

