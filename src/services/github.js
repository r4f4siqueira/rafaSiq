import axios from 'axios';

const apiGithub = axios.create({
    baseURL: 'https://api.github.com/users/r4f4siqueira',
});

export default apiGithub;

//Link para listar meu perfil
//https://api.github.com/users/r4f4siqueira

//Meus repositorios
//https://api.github.com/users/r4f4siqueira/repos
