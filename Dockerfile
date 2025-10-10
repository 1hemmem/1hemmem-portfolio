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

# Copy only the necessary files from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lockb ./bun.lockb

# Install production dependencies (if any are needed separately for runtime)
# For Astro's static site generation, this might not be strictly necessary
# but can be useful for SSR or specific runtime dependencies.
RUN bun install --frozen-lockfile --production

# Expose the port Astro listens on (default is 4321)
EXPOSE 4321

# Command to run the Astro application
# For static sites, you might use a static file server like `serve`
# For SSR, you would use `bun run start` or a custom start script
CMD ["bun", "run", "start"]