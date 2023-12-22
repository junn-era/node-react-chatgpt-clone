import { create } from "openai";

const openai = create({
  apiKey: apiKey,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.completions.create({
  model: "gpt-3.5-turbo-instruct",
  prompt: "Aula de Node com ChatGPT: \"Explorando o Poder do Node com ChatGPT\".Aula de Node com ChatGPT: \"Explorando o Poder do Node com ChatGPT\". Nesta aula, vamos aprender como utilizar o Node.js para criar uma aplicação de chat com o uso da tecnologia de inteligência artificial ChatGPT. O ChatGPT é um sistema de diálogo baseado em modelo de linguagem neural, que permite criar conversas inteligentes de maneira simples e eficiente.\n\nPara seguir esta aula, é necessário ter um conhecimento básico de Node.js e uma conta no ChatGPT para obter uma chave de API.\n\n## Criando um projeto Node\n\nAntes de tudo, é necessário ter o Node.js instalado em sua máquina. Você pode baixá-lo através do site oficial e seguir as instruções de instalação: https://nodejs.org/.\n\nPara verificar se o Node está instalado corretamente, abra o terminal ou prompt de comando e digite o seguinte comando:\n\n```\nnode -v\n```\n\nCaso a versão do Node seja exibida, significa que a instalação foi bem sucedida.\n\nAgora, vamos criar uma pasta para nosso projeto e dentro dela, criaremos um arquivo \"index.js\" que conterá todo o código da nossa aplicação. Abra o terminal ou prompt de comando na",
  temperature: 1,
  max_tokens: 3500,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});