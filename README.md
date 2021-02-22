# tay-shop
An E-Commerce App built using a microservice architecture using node js and mongo db

There are three services in this project

authentication-app: handles the authentication on the app
product-app: handles the retrieving, creating and deleting of products on the app
order-app: handles the orders on the app

link to documentation: https://documenter.getpostman.com/view/8015237/TWDXpxVd

Authentication-app endpoints:
- login
- register
- identify user
- get all users

Product-app endpoints:
- Create product
- my products (gets list of products owned by logged in user)
- all products (gets all products on the app)
- delete product
- get product

order-app endpoints
- Create Order
- Mark order as paid (when an order is created and paid for, a transaction reference is to be sent to this endpoint to mark this
  order as paid
  )

The authentication-app needs a .env file to be able to function, a sample is kept in the app as sample.env

