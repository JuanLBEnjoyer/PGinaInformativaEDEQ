# Etapa 1: Compilacion de la aplicacion estatica (Node 22 requerido por Vite 8)
FROM node:22-alpine AS build

RUN npm install -g pnpm@10
WORKDIR /app

# Copiar manifiestos e instalar dependencias (incluyendo devDependencies para Vite y TypeScript)
COPY package.json pnpm-lock.yaml ./
RUN NODE_ENV=development pnpm install --frozen-lockfile --prod=false || \
    NODE_ENV=development pnpm install --prod=false

# Copiar el codigo fuente del proyecto
COPY . .

# Respaldo preventivo en caso de que el entorno de despliegue omita carpetas ocultas (.figma)
RUN mkdir -p .figma/make && \
    [ -f .figma/make/site.json ] || \
    printf '{"title":"EDEQ — Empresa de Energía del Quindío S.A. E.S.P.","language":"es"}\n' > .figma/make/site.json

# Compilar la aplicacion para produccion en /app/dist
RUN pnpm run build

# Etapa 2: Servidor web ligero Nginx para servir el sitio estatico
FROM nginx:1.27-alpine AS runtime

ENV PORT=80
ENV NGINX_ENVSUBST_FILTER=^PORT$

COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
