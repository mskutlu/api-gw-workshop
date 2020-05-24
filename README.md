
API Gateway Workshop
====
Wellcome, workshop is a demonstration environment that puts together the necessary pieces to get you started with our API Gateway, using an example web application.

API gateway, we have added to the environment both the API (backend) that feeds the gateway and a website consuming the api gateway. 
Additionally, a dashboard with the metrics is also available so you can see your activity.



## Services
The docker-compose starts the following services:

### Web client
The consumer of the API gateway is a simple Express JS application that interacts with KrakenD to fetch the data. All code is under `web/`.

The client is a Single Page Application using [Auth0](https://auth0.com) to generate JWT tokens.

**You don't need to install any npm locally**, the docker image will download and install the dependencies in the container for you.

Runs on [http://localhost:3000](http://localhost:3000)

### Backend
A simple API that provides raw data to the gateway.

You can add or remove data any time by adding XML, JSON or RSS files in the `data` folder.

Runs on [http://localhost:8000](http://localhost:8000)

### The designer
An instance of Krakendesigner (the GUI for manipulating the `api-gw/krakend.json` file.

You can drag the file `api-gw/krakend.json` anytime in the dashboard and resume the edition from there.

Runs on [http://localhost:8787](http://localhost:8787)

### The gateway!
An instance of KrakenD with several endpoints. Its configuration is in the folder `api-gw/`.


Runs on [http://localhost:5001](http://localhost:5001)

### Metrics
A Jaeger dashboard shows the traces of the activity you generate. Runs on [http://localhost:16686](http://localhost:16686)

### Prometheus
A Prometheus gathers the metrics from api gateway and stores them. Runs on [http://localhost:9090](http://localhost:9090)

### Grafana
Grafana is dashboarding UI, shows the metrics Runs on [http://localhost:3333](http://localhost:3333)


### The JWT revoker
A simple implementation of a JWT rovoker using the KrakenD remote bloomfilter client.


Runs on [http://localhost:9000](http://localhost:9000)

### Start the service
Just:

    docker-compose up

## Play!
Fire up your browser, curl, postman, httpie or anything else you like to interact with any of the published services.

## Editing the API Gateway endpoints
To add or remove endpoints, edit the file `api-gw/krakend.json`. The easiest way to do it is by **dragging this file to the [KrakenD designer](http://localhost:8787)** and download the edited file. 
To reflect the changes restart docker-compose.


The following endpoints are worth noticing:

- `/private/auth0`: Protects and endpoint validating JWT tokens issued by Auth0
- `/private/custom`: Protects and endpoint validating custom JWT tokens signed with `/token`.
- `/token`: Signs a token
- `/public`: Simple aggregation of two public API calls from Bitbucket and Github with some field selection.
- `/splash`: Public endpoint aggregating data from the internal backend