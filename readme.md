# ChatIA

Este projeto é uma aplicação desenvolvida em TypeScript e Node.js que utiliza a API da OpenAI para criar interações inteligentes e dinâmicas.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução para JavaScript no lado do servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **OpenAI API**: Interface para acessar modelos de linguagem avançados.

## Funcionalidades

- Integração com a API da OpenAI para processamento de linguagem natural.
- Estrutura modular e tipada utilizando TypeScript.
- Suporte para personalização de prompts e respostas.
- Comunicação descontraída: A IA utiliza um vocabulário informal, como se fosse um amigo de longa data.
- Limitação em matemática: A IA pode apresentar dificuldades em resolver problemas matemáticos complexos.

## Como Executar

1. **Clone o repositório**:
    ```bash
    git clone <url-do-repositorio>
    cd chatIA
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente**:
    Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API da OpenAI:
    ```
    OPENAI_API_KEY=your_api_key_here
    ```

4. **Execute o projeto**:
    ```bash
    npm run start
    ```

## Scripts Disponíveis

- `npm run start`: Inicia a aplicação.
- `npm run build`: Compila o código TypeScript para JavaScript.
- `npm run dev`: Inicia a aplicação em modo de desenvolvimento.

## Estrutura do Projeto

```
/src
  ├── index.ts        # Ponto de entrada da aplicação
  ├── services/       # Serviços para integração com a API da OpenAI
  ├── static/         # Frontend da aplicação
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
