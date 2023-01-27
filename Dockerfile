FROM node:18

COPY ./ /application
RUN cd /application && yarn

EXPOSE 7778
CMD [ "npm", "run", "dev" ]
