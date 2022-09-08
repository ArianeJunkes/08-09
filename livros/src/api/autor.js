import axios from 'axios';
export default class AutoresApi {
    async buscarTodosAsAutores(){
        const response = await axios.get(`https://livraria-ariane-bruna.herokuapp.com/autores`);
        return response.data;
    }
    async buscarAutor(id){
        const response = await axios.get(`https://livraria-ariane-bruna.herokuapp.com/autores/${id}`);
        return response.data;
    }
    async adicionarAutor(autor){
        const response = await axios.post(`https://livraria-ariane-bruna.herokuapp.com/autores`, autor);
        return response.data;
    }
    async excluirAutor(id){
        const response = await axios.delete(`https://livraria-ariane-bruna.herokuapp.com/autores/${id}`);
        return response.data;
    }
    async atualizarAutor(autor){
        const response = await axios.patch(`https://livraria-ariane-bruna.herokuapp.com/autores/${autor.id}`,autor,);
        return response.data;
    }
}