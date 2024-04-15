# SocialHub

This is a full-stack application in the context of a comminity site. Here users will be able to create, edit and delete accounts.

## How to use

The application is built in [NodeJS](https://nodejs.org/en) environment, so it must first be installed on your computer.

You should run `npm install` in the backend and frontend folders, which will download all the packages that needs for the application

Finally you can start the application, which must be done on both client and backend side:
- Client (frontend folder): `npm run dev`
- Backend (backend folder): `nodemon main`

## Who is a user?
```js
{
  _id: ObjectId('randomString'),
  username: 'UniqueName',
  displayName: 'Edward Example',
  password: 'I am hashed', 
  tokens: [/* list of tokens */],
  details: {/* Custom data about user (birthday, ect..) */}
}

```

## What i used
- **Backend:**
    - Express 4.19.2 ([official documentation](https://expressjs.com/))
    - Nodemon 3.1.0 ([official documentation](https://nodemon.io/))
    - MongoDB 6.5.0 ([official documentation](https://www.mongodb.com/docs/drivers/node/current/))
    - Bcrypt 5.1.1 ([official documentation](https://www.npmjs.com/package/bcrypt))
    - CORS 2.8.5 ([official documentation](https://www.npmjs.com/package/cors))
- **Frontend:**
    - Vite 5.2.0 ([documentation](https://vitejs.dev/))
    - React 18.2.0 ([documentation](https://legacy.reactjs.org/))
    - React Rooter Dom 6.22.3 ([documentation](https://reactrouter.com/en/main))
    - Axios 1.6.8 ([documentation](https://axios-http.com/))