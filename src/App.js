import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import '@fontsource/roboto';


import { Container, Typography } from '@material-ui/core';

class App extends Component {

  render() {
    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant='h4' component='h1' align='center'><h1>Formulário de Cadastro</h1></Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return {valido: false, texto:"O CPF deve ter 11 dígitos."}
  } else {
    return {valido: true, texto:""}
  }
}

export default App;
