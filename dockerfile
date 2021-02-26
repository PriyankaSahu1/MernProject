FROM node:7-onbuild

# set maintainer
LABEL maintainer "crudsinfotechng@gmail.com"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://192.168.56.107:3000 || exit 1

# tell docker what port to expose
EXPOSE 3000
