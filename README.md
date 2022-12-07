# Backend task

Tech: Node + Typescript + Express + Postgres/sequelize  + Swagger + Docker

CI/CD setup using github action: 
## Folder structure 
```
├── .github/workflows
├── migrations
├── src
│   ├── config
│   ├── controllers
│   ├── interfaces
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── tests
│   ├── utils
│   ├── app.ts
│   └── index.ts
```


## Running App in DEV mode
Prerequisites for running app 
Install postgres database in your local machine before the following steps
``` 
#Install dependencies
npm i 

#Publish database 
npm run publish:db

#Start app in dev mode. Default port: 3000
npm run dev 
```

## Running Tests
Make sure the app is running using the above command.
```
npm run test
```

## Swagger endpoint

``` http://localhost:3000/api-docs ```
