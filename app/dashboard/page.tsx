import Link from "next/link";

export default function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>PAINEL DO SISTEMA 📊</h1>
      <p>Controle do sistema</p>

      <div style={{ marginTop: "20px" }}>
        <Link href="/produtos">
          <div style={{
            margin: "10px",
            padding: "10px 20px",
            backgroundColor: "white",
            color: "black",
            display: "inline-block",
            cursor: "pointer",
            borderRadius: "5px"
          }}>
            Ver Produtos 📦
          </div>
        </Link>
      </div>
    </div>
  );
}