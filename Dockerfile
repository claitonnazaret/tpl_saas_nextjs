FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./ 
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app/public public

ENV NODE_ENV=production
ENV NEXTAUTH_URL=http://localhost:3000
ENV AUTH_TRUST_HOST=true
ENV APP_TITLE="TPL SAAS NEXTJS"
ENV APP_DESCRIPTION="Template Saas Nextjs"
ENV AUTH_SECRET="st78KoypuuYTgsqkwycMEBv6bBwvms25SfiMFelQ6PU="
ENV DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

EXPOSE 3000

CMD ["yarn", "start"]
