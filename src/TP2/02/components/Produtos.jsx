

import coca from "../imgs/coca-cola.jpeg"

const Produtos = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: 'white'
    }}>
      <div style={{
        display: 'flex',
        gap: '15px',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}>
        <img src={coca} alt="Produto 1" style={{
            width: '200px',
            height: '200px',
            border: '1px solid #ddd',
            borderRadius: '5px'
          }}
        />
        <img src={coca} alt="Produto 2" style={{
            width: '200px',
            height: '200px',
            border: '1px solid #ddd',
            borderRadius: '5px'
          }}
        />
        <img
          src={coca}
          alt="Produto 3"
          style={{
            width: '200px',
            height: '200px',
            border: '1px solid #ddd',
            borderRadius: '5px'
          }}
        />
      </div>
      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        width: '1200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h2 style={{
            fontSize: '24px',
            marginBottom: '10px',
            textAlign: 'left'
          }}>Product Name</h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            textAlign: 'left'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, libero quis ultrices eleifend,
            diam nisi condimentum augue, quis sagittis nunc lectus ac lacus. Aenean ornare auctor volutpat. Sed ut
            ante est. Pellentesque quis leo vel ante ornare mollis mollis quis lorem. Etiam pharetra congue augue,
            ut sodales est. Donec massa lectus, ultricies ut pharetra vel, efficitur eget ipsum. Vestibulum dolor
            arcu, feugiat id nunc sit amet, efficitur tincidunt nisi. Suspendisse potenti. Etiam a massa eget leo
            placerat sollicitudin at id erat. Nunc tempus, massa quis auctor viverra, urna turpis malesuada ex,
            vitae mollis erat enim nec massa. Phasellus vel venenatis velit. Vestibulum condimentum lacus ut quam
            facilisis aliquam. Donec eu sem nec sem porttitor laoreet in eget arcu.
          </p>
        </div>

        <div style={{ width: '800px' }}>
          <img src={coca} alt="Produto 4" style={{
              width: '800px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Produtos;
