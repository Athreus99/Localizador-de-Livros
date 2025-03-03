📚 Book Finder App

Uma aplicação web para encontrar livros através de pesquisa por título, autor, assunto ou ISBN utilizando a API do Google Books.
Show Image
📋 Sobre o Projeto
Book Finder App é uma aplicação que permite aos usuários pesquisar livros utilizando a API do Google Books. Com uma interface intuitiva, os usuários podem encontrar informações detalhadas sobre livros, incluindo capas, descrições, autores, editoras, datas de publicação e links para compra ou visualização prévia.

🚀 Tecnologias Utilizadas

React 19
Axios - Cliente HTTP para requisições à API
Google Books API
Create React App - Bootstrap de aplicação React

🎯 Funcionalidades

Pesquisa de livros por título, autor, assunto ou ISBN
Exibição de resultados em formato de cards com imagens de capa
Visualização detalhada de informações sobre cada livro
Redirecionamento para lojas online ou pré-visualização dos livros
Interface responsiva para uso em dispositivos móveis e desktop
Filtragem por categorias e ordenação de resultados

🛠️ Pré-requisitos

Node.js (versão 16.x ou superior)
npm ou yarn

⚙️ Instalação

Clone o repositório:
bashCopygit clone https://github.com/seu-usuario/book-finder-app.git
cd book-finder-app

Instale as dependências:
bashCopynpm install
# ou
yarn install

Inicie o servidor de desenvolvimento:
bashCopynpm start
# ou
yarn start

Abra o navegador e acesse http://localhost:3000

📝 Scripts Disponíveis

npm start - Inicia o servidor de desenvolvimento
npm run build - Gera o build de produção na pasta build
npm test - Executa os testes unitários
npm run eject - Ejeta a configuração do Create React App (⚠️ operação irreversível)

🔑 Configuração da API
Para utilizar a API do Google Books, você pode precisar de uma chave de API:

Acesse o Google Cloud Console
Crie um novo projeto
Habilite a API do Google Books
Gere uma chave de API
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
CopyREACT_APP_GOOGLE_BOOKS_API_KEY=sua_chave_api_aqui



🔄 Fluxo de Trabalho

O usuário insere termos de pesquisa na barra de busca
A aplicação faz uma requisição à API do Google Books
Os resultados são exibidos em formato de grid com cards
O usuário pode clicar em um card para ver detalhes do livro
Nos detalhes, o usuário pode acessar links para compra ou visualização

🔍 Exemplos de Uso da API
javascriptCopyimport axios from 'axios';

// Exemplo de busca de livros por título
const searchBooksByTitle = async (title) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
    );
    return response.data.items;
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    return [];
  }
};


📄 Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para mais detalhes.

👨‍💻 Autor
Matheus Gouvea
