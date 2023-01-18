import Pokemon from '../model/pokemon.model.js';

export const getPokemonsRepository = async (params = { selection: {}, options: {}}) => {
    const pokemons = await Pokemon.findAll({
        where: params.selection,
        ...params.options
    });
    return pokemons;
}

export const getPokemonRepository = async (params = { selection, options }) => {
    return await Pokemon.findOne({
        where: params.selection,
        ...params.options
    });
}

export const createPokemonRepository = async (params = { data, options}) => {
    return await Pokemon.create(params.data);
}

export const deletePokemonRepository = async (params = { selection, options }) => {
    return await Pokemon.destroy({
        where: params.selection,
        ...params.options
    })
}