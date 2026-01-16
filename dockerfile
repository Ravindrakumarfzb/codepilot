# =========================
# 1. Build Angular SSR
# =========================
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# This creates dist/<project>/browser and dist/<project>/server
RUN npm run build --omit=dev

# =========================
# 2. Run SSR server
# =========================
FROM node:20 AS runner

WORKDIR /app

# IMPORTANT: copy only the dist output
# Replace "barcodepro-angular" with your Angular project name if different
COPY --from=build /app/dist/barcodepro-angular ./dist

EXPOSE 4000

CMD ["node", "dist/server/server.mjs"]
