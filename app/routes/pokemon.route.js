import express from "express";
import { catchPokemon, createPokemon, getPokemons, releasePokemon } from "../controller/pokemon.controller.js";
 
const router = express.Router();
 
router.get('/pokemons', getPokemons);
router.get('/pokemons/catch', catchPokemon);
router.post('/pokemons', createPokemon)
router.post('/pokemons/:id/release', releasePokemon);

export default router;