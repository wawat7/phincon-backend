import {
  responseBadRequest,
  responseError,
  responseNotFound,
  responseSuccess,
} from "../utils/response.util.js";
import {
  createPokemonRepository,
  deletePokemonRepository,
  getPokemonRepository,
  getPokemonsRepository,
} from "../repository/pokemon.repository.js";
import { fibonacciSequence, isPrimeNumber, randomInteger } from "../utils/helper.util.js";

export const getPokemons = async (req, res) => {
  try {
    const pokemons = await getPokemonsRepository();
    return responseSuccess({
      res,
      message: "get all pokemons",
      data: pokemons,
    });
  } catch (err) {
    return responseError({
      res,
      message: err.message,
    });
  }
};

export const catchPokemon = async (req, res) => {
  try {
    const randomInt = randomInteger(1, 100);

    const pokemonCatch = randomInt > 50;
    return responseSuccess({
      res,
      data: {
        catch: pokemonCatch,
      },
      message: "success",
    });
  } catch (err) {
    return responseError({
      res,
      message: err.message,
    });
  }
};

export const createPokemon = async (req, res) => {
  try {
    const fibonacci = fibonacciSequence(0);
    const pokemon = await createPokemonRepository({
      data: {
        nickname: `${req.body.nickname}-${fibonacci}`,
        pokemon_data: req.body.pokemon_data
      },
    });

    return responseSuccess({
      res,
      message: "create data successfully",
      data: pokemon,
    });
  } catch (err) {
    return responseError({
      res,
      message: err.message,
    });
  }
};

export const releasePokemon = async (req, res) => {
  try {
    const pokemon = await getPokemonRepository({
      selection: {
        id: req.params.id
      },
    });

    if (!pokemon) {
      return responseNotFound({
        res,
        message: 'data not found',
      });
    }

    if (isPrimeNumber(pokemon.id)) {
      await deletePokemonRepository({
        selection: { id: pokemon.id },
      });

      return responseSuccess({
        res,
        message: "release successfully",
        data: {},
      });
    }

    return responseBadRequest({
      res,
      message: "release failed",
      data: {},
    });
  } catch (err) {
    return responseError({
      res,
      message: err.message,
    });
  }
};
