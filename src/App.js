import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import '@fontsource/roboto';


import { Container, Typography } from '@material-ui/core';

class App extends Component {

  render() {
    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant='h4' component='h1' align='center'><h1>Formulário de cadastro</h1></Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
