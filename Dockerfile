# -------- Builder stage --------
FROM node:18-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files first for better caching
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including dev deps for build)
RUN pnpm install --frozen-lockfile

# Copy source code and build
COPY . .
RUN pnpm build

# -------- Production stage --------
FROM node:18-alpine AS production

WORKDIR /app

# Install wget for healthcheck
RUN apk add --no-cache wget

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 astro

# Set environment variables
ENV NODE_ENV=production
ENV PORT=4321
ENV HOST=0.0.0.0

# Copy built static files and node_modules from builder stage
COPY --from=builder --chown=astro:nodejs /app/dist ./dist
COPY --from=builder --chown=astro:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=astro:nodejs /app/package.json ./package.json

# Switch to non-root user
USER astro

EXPOSE 4321

# Use astro preview to serve the built static site
CMD ["node", "node_modules/astro/astro.js", "preview", "--host", "0.0.0.0", "--port", "4321"]
