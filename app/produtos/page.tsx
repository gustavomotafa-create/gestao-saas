"use client";

import { useState } from "react";

export default function Produtos() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [produtos, setProdutos] = useState<any[]>([]);

 function cadastrarProduto() {
  const novoProduto = {
    nome,
    preco
  };

  setProdutos([...produtos, novoProduto]);

  setNome("");
  setPreco("");
}

function deletarProduto(index: number) {
  const lista = produtos.filter((_, i) => i !== index);
  setProdutos(lista);
}
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>PÁGINA DE PRODUTOS 📦</h1>

      <div style={{ marginTop: "20px" }}>
        <input
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ padding: "10px", margin: "5px" }}
        />

        <input
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          style={{ padding: "10px", margin: "5px" }}
        />

        <br />

        <button
          onClick={cadastrarProduto}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            cursor: "pointer"
          }}
        >
          Cadastrar Produto
        </button>
      </div>

          <div style={{ marginTop: "40px" }}>
        <h2>Lista de Produtos</h2>

        {produtos.map((produto, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            {produto.nome} - R${produto.preco}

            <button
              onClick={() => deletarProduto(index)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}