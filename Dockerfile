FROM node:16.15.0

WORKDIR /app

RUN apt-get update && apt-get -y upgrade

COPY src /app/
COPY public /app/
COPY yarn.lock /app/
COPY package.json /app/
COPY postcss.config.js /app/
COPY tailwind.config.js /app/

RUN yarn install
RUN chown -R node:node /app/

# Act as Node user from now on.
USER node

CMD ["yarn", "start"]
