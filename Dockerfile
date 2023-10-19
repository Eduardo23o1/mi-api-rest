# Usar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación
COPY package*.json ./
COPY . .

# Instalar las dependencias
RUN npm install

# Exponer el puerto de la aplicación
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
