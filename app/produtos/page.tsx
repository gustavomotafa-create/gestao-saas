"use client"

import { useState } from "react"

export default function Produtos() {
  const [produtos, setProdutos] = useState([
  { nome: "Produto 1", preco: "10" },
  { nome: "Produto 2", preco: "20" }
])

  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [editandoIndex, setEditandoIndex] = useState<number | null>(null)

  function adicionarProduto() {
  if (editandoIndex !== null) {
    const novaLista = [...produtos]
    novaLista[editandoIndex] = { nome, preco }
    setProdutos(novaLista)
    setEditandoIndex(null)
  } else {
    const novo = { nome, preco }
    setProdutos([...produtos, novo])
  }

  setNome("")
  setPreco("")
}

  function deletarProduto(index: number) {
    const novaLista = produtos.filter((_, i) => i !== index)
    setProdutos(novaLista)
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Lista de Produtos</h2>

      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />

      <button onClick={adicionarProduto}>
        Adicionar
      </button>

      <hr />

      {produtos.map((produto, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          {produto.nome} - R${produto.preco}

          <button
            onClick={() => deletarProduto(index)}
            style={{ marginLeft: "10px" }}
          >
            ❌
          </button>

          <button
  onClick={() => {
    setNome(produto.nome)
    setPreco(produto.preco)
    setEditandoIndex(index)
  }}
  style={{ marginLeft: "10px" }}
>
  ✏️
</button>
        </div>
      ))}
    </div>
  )
}