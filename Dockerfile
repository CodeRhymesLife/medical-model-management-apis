FROM node:10.9.0-stretch

# Install yarn
RUN npm install yarn@1.9.4 -g

# Install related Blender  packages
RUN apt-get -y update && \
        apt-get -y install libglu1
RUN apt-get -y update && \
        apt-get -y install libxext6

# Setup a source tree
RUN mkdir -p /usr/src/medmod/apis
WORKDIR /usr/src/medmod/apis

# Install blender
ADD ./.bin /opt/medmod/.bin
RUN tar xvjf /opt/medmod/.bin/blender/blender-2.79-linux-glibc219-x86_64.tar.bz2 -C /opt/medmod/.bin/blender
ENV PATH="/opt/medmod/.bin/blender/blender-2.79-linux-glibc219-x86_64:${PATH}"

# Copy over build files and install packages
COPY package.json /usr/src/medmod/apis
RUN yarn --pure-lockfile
COPY . /usr/src/medmod/apis

# Expose the API port
EXPOSE 3000
