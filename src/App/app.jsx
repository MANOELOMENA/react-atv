const produtos = [
    {
      id: 1,
      nome: "Tablet",
      preco: 1000,
      cores: ["#3ab892", "#b223a4", "#158959"]
    },
    {
      id: 2,
      nome: "Smartphone",
      preco: 1500,
      cores: ["#74a6a8", "#b32a16", "#455269"]
    },
    {
      id: 3,
      nome: "Notebook",
      preco: 2000,
      cores: ["#283758", "#c4231a", "#505079"]
    }
] 
  
function Produto(props) {
    return (
      <div>
        <h2>{props.nome}</h2>
        <p>ID: {props.id}</p>
        <p>Preço: R${props.preco}</p>
        <p>Cores disponíveis:</p>
        <ul>
          {props.cores.map((cor, index) => (
            <li key={index} style={{ backgroundColor: cor, padding: '5px', margin: '5px', borderRadius: '5px' }}>
              {cor}
            </li>
          ))}
        </ul>
      </div>
    ) 
}
  
function App() {
    return (
      <div>
        <h1>Bem-vindo ao nosso site!</h1>
        {produtos.map(produto => (
          <Produto
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            cores={produto.cores}
          />
        ))}
      </div>
    ) 
}
  
export default App