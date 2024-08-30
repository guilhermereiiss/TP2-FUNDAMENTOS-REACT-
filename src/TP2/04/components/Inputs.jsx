import "./InputsC.css"

function Inputs() {
    return (
        <div className="container">
            
            <h1>Cadastro de Produtos</h1>
            <form className="formulario-produto">

                <div className="grupo-formulario">
                    <label>Nome do Produto</label>
                    <input type="text" id="nome" placeholder="Informe o nome do produto" />
                </div>


                <div className="grupo-formulario linha-dupla">
                    <div className="item-linha">
                        <label>Preço de venda</label>
                        <input type="text" id="preco-venda" placeholder="Informe o preço de venda" />
                    </div>
                    <div className="item-linha">
                        <label>Preço de custo</label>
                        <input type="text" id="preco-custo" placeholder="Informe o preço de custo" />
                    </div>
                </div>

                <div className="grupo-formulario linha-dupla">
                    <div className="item-linha">
                        <label>Fornecedor</label>
                        <select id="fornecedor">
                            <option>Selecione um fornecedor</option>
                        </select>
                    </div>
                    <div className="item-linha">
                        <label>Categoria</label>
                        <select id="categoria">
                            <option>Selecione uma categoria</option>
                        </select>
                    </div>
                </div>

                <div className="grupo-formulario">
                    <label htmlFor="descricao">Descrição do Produto</label>
                    <textarea id="descricao" placeholder="Informe a descrição do produto"></textarea>
                </div>

                <div className="grupo-formulario">
                    <button type="submit">Salvar</button>
                </div>

            </form>
        </div>
    )
}

export default Inputs