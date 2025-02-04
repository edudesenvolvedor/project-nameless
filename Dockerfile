# Estágio de construção
FROM node:18-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instala as dependências
RUN npm install

COPY . .

# Expõe a porta que o Next.js usa (padrão é 3000)
EXPOSE 3000

# Define o comando para rodar o aplicativo
CMD ["npm","run","dev"]