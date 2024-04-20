FROM node:20

WORKDIR /web/app

COPY . . 

RUN npm install
RUN npm run build


WORKDIR /packages/database

RUN npx prisma generate

ENV PORT=3000
EXPOSE 3000

CMD ["node", "dist/index.js"]