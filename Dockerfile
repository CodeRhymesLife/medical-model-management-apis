FROM node:10.9.0-stretch

# Download blender
RUN wget -P /opt/blender/ http://download.blender.org/release/Blender2.79/blender-2.79-linux-glibc219-x86_64.tar.bz2

# Unpack Blender
RUN tar xvjf /opt/blender/blender-2.79-linux-glibc219-x86_64.tar.bz2 -C /opt/blender/

# Add Blender to PATH
ENV PATH="/opt/blender/blender-2.79-linux-glibc219-x86_64:${PATH}"

# Install related Blender  packages
RUN apt-get -y update && \
        apt-get -y install libglu1
RUN apt-get -y update && \
        apt-get -y install libxext6

# Setup our source code
RUN mkdir -p /usr/src/medmod/apis
WORKDIR /usr/src/medmod/apis
COPY package.json /usr/src/medmod/apis
RUN npm install yarn@1.9.4 -g
RUN yarn --pure-lockfile
COPY . /usr/src/medmod/apis

# Expose the API port
EXPOSE 3000
