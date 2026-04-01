import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>MEU PRIMEIRO SAAS 🚀</h1>
      <p>Projeto de gestão de vendas</p>

      <Link href="/dashboard" style={{ textDecoration: "none" }}>
        <div
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          Entrar no sistema
        </div>
      </Link>
    </div>
  );
}