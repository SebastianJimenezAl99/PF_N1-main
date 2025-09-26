# Imagen base
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar dependencias e instalarlas
COPY package*.json ./
RUN npm install --production

# Copiar todo el proyecto
COPY . .



RUN npm install -g serve
CMD ["serve", "-s", ".", "-l", "3000"]
