import { SET_EXAMPLE_SELECTED_ID, SET_EXAMPLE_LOADING } from '../types/example';

/**
 * Busca uma lista de entidades na API
 * @param {*} page Página a ser buscada
 */
export const getExample = (page) => async (dispatch) => {
    dispatch({
        type: SET_EXAMPLE_LOADING,
        isLoading: false,
    });
};

/**
 * Busca as entidades que correspondem com o input informado
 * @param {*} input Input que será enviado para a busca

 */
export const searchExample = (input) => async (dispatch) => {
    dispatch({
        type: SET_EXAMPLE_LOADING,
        isLoading: false,
    });
};

/**
 * Busca os detalhes da entidade informada, para mostrar nos modais
 * @param {String} exampleSelectedId UUID da entidade
 */
export const getExampleById = (exampleSelectedId) => async (dispatch) => {
    dispatch({
        type: SET_EXAMPLE_LOADING,
        isLoading: false,
    });
};

/**
 * Seta o UUID da entidade como o selecionado, para ser editado ou visualizado
 * @param {String} exampleSelectedId UUID a ser selecionado
 */
export const setExampleSelectedId = (exampleSelectedId) => ({
    type: SET_EXAMPLE_SELECTED_ID,
    exampleSelectedId,
});

/**
 * Seta o estado de loading da entidade
 * @param {boolean} loading booleano a setar o estado de loading
 */
export const setExampleLoading = (loading) => ({
    type: SET_EXAMPLE_LOADING,
    isLoading: loading,
});