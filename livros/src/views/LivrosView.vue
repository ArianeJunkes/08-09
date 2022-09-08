<script>
import LivrosApi from "@/api/livro.js";
import axios from "axios";
const livroApi = new LivrosApi();
export default {
  data() {
    return {
      livros: [],
      editoras: [],
      categorias: [],
      autores: [],
      livro: {},
    };
  },
  async created() {
    await this.buscarTodosOsAutores();
    await this.buscarTodosAsCategorias();
    await this.buscarTodosAsEditoras();
    const livros = await axios.get("https://livraria-ariane-bruna.herokuapp.com/livros?expand=autor&expand=categoria&expand=editora");
    this.livros = livros.data
  },
  methods: {
    async buscarTodosAsEditoras() {
      const editoras = await axios.get(`https://livraria-ariane-bruna.herokuapp.com/editoras`);
      this.editoras = editoras.data;
    },
    async buscarTodosAsCategorias() {
      const categorias = await axios.get(`https://livraria-ariane-bruna.herokuapp.com/categorias`);
      this.categorias = categorias.data;
    },
    async buscarTodosOsAutores() {
      const autores = await axios.get(`https://livraria-ariane-bruna.herokuapp.com/autores`);
      this.autores = autores.data;
    },
    async salvar() {
      await axios.post(`https://livraria-ariane-bruna.herokuapp.com/livros`, this.livro);
      await this.buscarTodosOsLivros();
    },
    async excluir(livro) {
      await axios.delete(`https://livraria-ariane-bruna.herokuapp.com/livros/${livro.id}`);
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de livros</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        placeholder="Nome"
        v-model="livro.name"
        @keypress.enter="salvar"
      />
      <!-- <input type="text" placeholder="Código Editora" v-model="novo_editora" @keypress.enter="salvar" /> -->
      <select v-model="livro.editoraId">
        <option
          v-for="editora in editoras"
          :key="editora.id"
          :value="editora.id"
        >
          {{ editora.name }}
        </option>
      </select>
      <!-- <input type="text" placeholder="Gênero" v-model="novo_categoria" @keypress.enter="salvar" /> -->
      <select v-model="livro.categoriaId">
        <option
          v-for="categoria in categorias"
          :key="categoria.key"
          :value="categoria.id"
        >
          {{ categoria.name }}
        </option>
      </select>
      <!-- <input type="text" placeholder="Nome Autor" v-model="novo_autor" @keypress.enter="salvar" /> -->
      <select v-model="livro.autorId">
        <option v-for="autor in autores" :key="autor.id" :value="autor.id">
          {{ autor.name }}
        </option>
      </select>
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Código Editora</th>
            <th>Categoria do Livro</th>
            <th>Autor</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.name }}</td>
            <td>{{ livro.editoraId }}</td>
            <td>{{ livro.categoriaId }}</td>
            <td>{{ livro.autorId }}</td>
            <td>
              <button @click="editar(editora)">Editar</button>
              <button @click="excluir(livro)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style></style>
