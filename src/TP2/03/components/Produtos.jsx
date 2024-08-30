import "./ProdutosC.css"

import coca from "../imgs/coca-cola.jpeg"


const Produtos = () => {
    return (
      <div className="produtos">
        <div className="produto-imagens">
          <img src={coca} alt="Produto 1" />
          <img src={coca} alt="Produto 2" />
          <img src={coca} alt="Produto 3" />
          
        </div>
        <div className="produto-descricao">
          <div>
          <h2>Product Name</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, libero quis ultrices eleifend, 
        diam nisi condimentum augue, quis sagittis nunc lectus ac lacus. Aenean ornare auctor volutpat. Sed ut 
        ante est. Pellentesque quis leo vel ante ornare mollis mollis quis lorem. Etiam pharetra congue augue, 
        ut sodales est. Donec massa lectus, ultricies ut pharetra vel, efficitur eget ipsum. Vestibulum dolor 
        arcu, feugiat id nunc sit amet, efficitur tincidunt nisi. Suspendisse potenti. Etiam a massa eget leo 
        placerat sollicitudin at id erat. Nunc tempus, massa quis auctor viverra, urna turpis malesuada ex, 
        vitae mollis erat enim nec massa. Phasellus vel venenatis velit. Vestibulum condimentum lacus ut quam 
        facilisis aliquam. Donec eu sem nec sem porttitor laoreet in eget arcu.</p>
            </div>
            <div className="imgDesc"><img src={coca} alt="Produto 4" /></div>
          
        </div>
      </div>
    );
  };
  
  export default Produtos;