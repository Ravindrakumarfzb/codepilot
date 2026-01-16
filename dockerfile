# ======================================
# 1️⃣ Build Stage — Angular SSR Build
# ======================================
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy full source code
COPY . .

# Build Angular SSR (creates dist/barcodepro-angular)
RUN npm run build


# ======================================
# 2️⃣ Runtime Stage — Serve Angular SSR
# ======================================
FROM node:20-alpine AS runner

WORKDIR /app

# Copy ONLY the built SSR output
COPY --from=build /app/dist/barcodepro-angular ./dist

# Railway will automatically assign PORT
EXPOSE 4000

# Start SSR server
CMD ["node", "dist/server/server.mjs"]
