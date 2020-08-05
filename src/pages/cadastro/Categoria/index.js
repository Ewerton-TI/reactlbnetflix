import React, {useState, useEffect} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){

  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave,valor){
    setValues({
      ...values,
      [chave]:valor,
    })
  }


  function handleChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value
      );
  }

  useEffect(()=>{
    const URL_TOP = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    :'https://lbreactnetflix.herokuapp.com/categorias';
    fetch(URL_TOP)
    .then(async(respostaDoServidor) => {
    const resposta = await respostaDoServidor.json();
    setCategorias([
      ...resposta,
      ]);
    });
  }, []);
    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handlerSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
        }}>

          <FormField
          label="Nome da categoria"
          type="text"
          name='nome'
          value={values.nome}
          onChange={handleChange}
          />

        <FormField
          label="Descrição"
          type="textarea"
          name='descricao'
          value={values.descricao}
          onChange={handleChange}
          />

          {/*<div>
            <label>
                Descrição:
                <textarea type="text"
                value={values.descricao}
                name='descricao'
                onChange={handleChange}
                />
            </label>
          </div>*/}

          <FormField 
          label="Cor"
          type="color"
          name='cor'
          value={values.cor}
          onChange={handleChange}
          />

         {/*<div>
            <label>
                Cor:
                <input type="color"
                value={values.cor}
                name='cor'
                onChange={handleChange}
                />
            </label>
         </div>*/}

            <button>
                Cadastrar
            </button>
        </form>
        {categorias.length === 0 &&(

        <div>
          Loading...
        </div>

        )}

        <ul>
           {categorias.map((categoria) =>{
             return(
               <li key={`${categoria.nome}`}>
                 {categoria.nome}
               </li>
             )
           })}
        </ul>

        <Link to="/">Ir para home
        
        </Link>

      </PageDefault>
    )
  }

  export default CadastroCategoria;