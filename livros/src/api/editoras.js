import axios from 'axios';
export default class EditorasApi {
    async buscarTodosAsEditoras(){
        const response = await axios.get(`https://livraria-ariane-bruna.herokuapp.com/editoras`);
        return response.data;
    }
    async buscarEditora(id){
        const response = await axios.get(`https://livraria-ariane-bruna.herokuapp.com/editoras/${id}`);
        return response.data;
    }
    async adicionarEditora(editora){
        const response = await axios.post(`https://livraria-ariane-bruna.herokuapp.com/editoras`, editora);
        return response.data;
    }
    async excluirEditora(id){
        const response = await axios.delete(`https://livraria-ariane-bruna.herokuapp.com/editoras/${id}`);
        return response.data;
    }
    async atualizarEditora(editora){
        const response = await axios.patch(`https://livraria-ariane-bruna.herokuapp.com/editoras/${editora.id}`,editora,);
        return response.data;
    }
}