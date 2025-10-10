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

# Stage 2: Create the production image with a static file server
FROM oven/bun:latest

WORKDIR /app

# Install serve package globally for serving static files
RUN bun add -g serve

# Copy only the built static files from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port
EXPOSE 4321

# Serve the static files on 0.0.0.0:4321
# -s flag enables single-page application mode (redirects 404s to index.html)
# -l flag sets the port and binds to all interfaces
CMD ["serve", "dist", "-s", "-l", "4321"]