import axios from "axios";
export default class CategoriasApi {
  async buscarTodosAsCategorias() {
    const response = await axios.get(
      `https://livraria-ariane-bruna.herokuapp.com/categorias`
    );
    return response.data;
  }
  async buscarEditora(id) {
    const response = await axios.get(
      `https://livraria-ariane-bruna.herokuapp.com/categorias/${id}`
    );
    return response.data;
  }
  async adicionarCategoria(categoria) {
    const response = await axios.post(
      `https://livraria-ariane-bruna.herokuapp.com/categorias`,
      categoria
    );
    return response.data;
  }
  async excluirCategoria(id) {
    const response = await axios.delete(
      `https://livraria-ariane-bruna.herokuapp.com/categorias/${id}`
    );
    return response.data;
  }
  async atualizarCategoria(categoria) {
    const response = await axios.patch(
      `https://livraria-ariane-bruna.herokuapp.com/categorias/${categoria.id}`,
      categoria
    );
    return response.data;
  }
}
