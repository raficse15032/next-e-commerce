FROM ubuntu:22.04

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl

# Install Node.js 22
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get update && apt-get install -y nodejs && npm install -g npm@11.6.0

WORKDIR /var/www/html

COPY ./codes .

COPY ./docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]
