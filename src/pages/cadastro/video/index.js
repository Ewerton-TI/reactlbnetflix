import React, {useEffect, useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import { Link,  useHistory } from 'react-router-dom';
//import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo(){
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({titulo}) => titulo);
  const { handleChange, values } = useForm({
    titulo:'',
    url:'',
    categoria:'',
  });

  useEffect(() => {
    categoriasRepository
    .getAll()
    .then((categoriasFromServer) =>{
      setCategorias(categoriasFromServer);
    });
  },[]);

    return(
      <PageDefault>
        <h1>Cadastro de Video</h1>


        <form onSubmit={(event) => {
          event.preventDefault();
          //alert('Video Cadastrado com sucesso');

          const categoriaEscolhida = categorias.find((categoria) =>{
            return categoria.titulo === values.categoria;
          });
          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId:1,
          })
          .then(() => {
            console.log('Cadastro Realizado com Sucesso !!!');
            history.push('/');
          });
        }}>
        <FormField
          label="Titulo do video"
          name='titulo'
          value={values.titulo}
          onChange={handleChange}
          />

        <FormField
          label="URL"
          name='url'
          value={values.url}
          onChange={handleChange}
          />

        <FormField
          label="Categoria"
          name='categoria'
          value={values.categoria}
          onChange={handleChange}
          suggestions = {categoryTitles}
          />

          <button type="submit">
                Cadastrar
          </button>
        </form>

        <Link to="/cadastro/categoria">Cadastrar Categoria
        
        </Link>

      </PageDefault>
    );
  }

  export default CadastroVideo;