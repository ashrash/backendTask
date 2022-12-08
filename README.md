# Backend task

Tech: Node + Typescript + Express + Postgres/sequelize  + Swagger + Docker
## Data model
![Screenshot 2022-12-08 at 2 06 03 PM](https://user-images.githubusercontent.com/7907139/206398494-293a3002-ee18-48f4-962c-48585cbbb898.png)

Assumptions done:
1. User has a virtual wallet. 
2. Adding to cart. Intermediate stage before checkout.
3. List of cart items are sent to add items to cart. [{ productId: 1, quantity: 2}]
4. Checking out cart proceeds to payment deducts balance from user wallet.
5. User can save instances of carts as wishlists for instant checkout.


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
Install postgres database in your local machine before the following steps.

Update migrations/config.json and ./dev.env with postgres password and continue the below steps

``` 
#Install dependencies
npm i 

#Run database migrations/seed
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
