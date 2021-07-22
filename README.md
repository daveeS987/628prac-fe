# Next JS Mock Virtual Store

## Overview

This app is a mock virtual store used to explore the capabilities of NextJs. I will be using features of NextJs that allows us to perform static site generation, server side rendering, and CRUD operations to a Mongo Database without the use of a dedicated backend server. Before initial page load, an api call is made to initialize a redux store and page props so that the user gets the generated page rather than wait for it to load on the client side.

currently work in progess....

## Links and Resources

- [Deployed Site](https://nextjs-practice-virtual-store.vercel.app/)
- [Next JS Docs](https://nextjs.org/docs/getting-started)
- [Next-Redux-Wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
- [Originally Coded with Create React App](https://github.com/davee-401-advanced-javascript/react-redux-virtual-store)

## Tools & Dependencies

- NextJS
- Next-Redux-Wrapper
- React Redux
- Redux Toolkit
- NextAuth
- Auth0
- MongoDB
- Axios
- Material UI
- Vercel

## Getting Started

Feel free to clone down this repo and play around with the code. In order to get this repo to work, the following will need to be done.

### 1. Clone Repository and install dependencies

```
git clone https://github.com/daveeS987/nextjs-mock-virtual-store.git
cd nextjs-mock-virtual-store
npm install
```

### 2. Configure Local Environment variables

```
cp .env.local.example .env.local
```

env file should have the following

```
DB_ADDRESS= << GET FROM MONGODB WEBSITE >>
NEXTAUTH_URL=http://localhost:3000  << Used for local development. Change to actual site address when you deploy. >>
AUTH0_ID= <<GET FROM AUTH0 WEBSITE>>
AUTH0_SECRET= <<GET FROM AUTH0 WEBSITE>>
AUTH0_DOMAIN=  <<GET FROM AUTH0 WEBSITE>>
```

### 3. Configure MongoDB and Auth0 on their website

- Go to [MongoDB](https://account.mongodb.com/account/login)
  - Create a Cluster
  - Create Database
  - Grab the connection string and put into DB_ADDRESS
- Go to [Auth0](https://auth0.com/)
  - Create new Application,
  - Grab the Domain, Client ID, and Client Secret and add to env file
  - Fill out Allowed Callback URL:
    - `http://localhost:3000/api/auth/callback/auth0`
  - Fill out Allowed Logout URL:
    - `http://localhost:3000`

### 4. Fill Mongo Database with a product and category collection

Each Categories document will have the following schema:

```javascript
{
  name: { type: String, required: true },
  description: { type: String, required:true },
}
```

Each Products document will have the following schema:

```javascript
{
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: { type: Number, required: true },
  imageUrl: {type: String, required: true},
}
```

The app will filter products based on category name. So "name" property in categories will need to match with "category" property in products. You can have multiple categories and matching products.

### 5. Start the application

To run site locally, use:

```
npm run dev
```

To run it in production mode, use:

```
npm build
npm start
```
