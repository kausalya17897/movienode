import { filtermovie, fullmovie, getMoviebyid, deletemovie, updatemovie } from "./updatemovie.js";
import { app as PORT } from "./index.js";
import express from "express";
//import {PORT} from "./index.js"

const router=express.Router();
router
.route("/")
.get( async (request, response) => {
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
  const filter = request.query;
  console.log(filter);
  if (filter.rating) {
    filter.rating = parseInt(filter.rating);
  }
  const filmovie = await filtermovie(filter); //cursor to array
  response.send(filmovie);
})
.post(async (request, response) => {

  const data = request.body;
  const createmovie = await fullmovie(data);
  console.log(data);
  response.send(createmovie);
  //response.send(data);
});


router
.route("/:id").get(async (request, response) => {
  const { id } = request.params;
  const movie = await getMoviebyid(id);
  //db.movies.findOne({id:"102"})
  //const movie=movies.find((a)=>a.id===id);
  movie
    ? response.send(movie)
    : response.status(404).send({ message: "no matching" });
})
.delete(async (request, response) => {
  const { id } = request.params;
  const movie = await deletemovie(id);
  //db.movies.findOne({id:"102"})
  //const movie=movies.find((a)=>a.id===id);
  movie.deletedCount > 0
    ? response.send(movie)
    : response.status(404).send({ message: "no matching" });
})
.put(async (request, response) => {
  const { id } = request.params;
  const data = request.body;
  const result = await updatemovie(id, data);
  const movieid = await getMoviebyid(id);
  //db.movies.findOne({id:"102"})
  //const movie=movies.find((a)=>a.id===id);
  //movie
  // ? 
  response.send(movieid);
  // : response.status(404).send({message:"no matching"});
});




//app.listen(PORT, () => console.log("App is start in port", PORT));
export const moviesRouter=router;