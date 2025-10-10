# Stage 1: Build the Astro project
FROM oven/bun:latest AS builder

WORKDIR /app

# Copy package.json and bun.lockb to install dependencies
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Astro project
# Use --bun flag to ensure Bun's runtime is used for the build
RUN bun run build

# Stage 2: Create the production image
FROM oven/bun:latest

WORKDIR /app

# Copy package.json and bun.lockb for production dependencies
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lockb ./bun.lockb

# Install production dependencies
RUN bun install --frozen-lockfile --production

# Copy the built static files from the builder stage
COPY --from=builder /app/dist ./dist

# Install curl for healthcheck
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Expose the port
EXPOSE 4321

# Command to run the Astro application in production mode
CMD ["bun", "run", "start"]