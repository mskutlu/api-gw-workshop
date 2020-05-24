FROM golang:1.14

RUN mkdir /app
WORKDIR /app
COPY . .

RUN GOPROXY=https://goproxy.io go get -d -v ./...
RUN go install .

EXPOSE 9000

CMD ["jwt-revoker"]