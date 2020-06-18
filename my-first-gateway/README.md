
## demo gw

```
find . |grep .json | entr -r go run main.go -c chapter00.json -p 8080 -d
```


````
func main(){

	configFile := flag.String("c","chapter00.json","Path to the configuration filename")
	logLevel := flag.String("l","INFO","Logging Level")
	debug := flag.Bool("d",false,"Enable the debug")
	port := flag.Int("p",0,"Port of the Service")
	flag.Parse()

	parser := config.NewParser()
	serviceConfig,err :=parser.Parse(*configFile)
	if err!=nil{


		log.Fatal("ERROR:",err.Error())
	}
	if *port!=0{
		serviceConfig.Port = *port
	}
	serviceConfig.Debug = serviceConfig.Debug ||*debug
	logger ,_ := logging.NewLogger(*logLevel,os.Stdout,"[MY-GW]")
	routerFactory := gin.DefaultFactory(proxy.DefaultFactory(logger),logger)

	routerFactory.New().Run(serviceConfig)
}
````