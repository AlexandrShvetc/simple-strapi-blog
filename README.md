# Strapi Starter Vue Blog

Vue starter for creating a blog with Strapi.

This starter allows you to try Strapi with Vue with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. Do not hesitate to add new features etc ...

You may want to know how to develop such a starter by your own! This starter is actually the result of this [tutorial](https://strapi.io/blog/build-a-blog-with-vue-strapi-and-apollo)

![screenshot image](/screenshot.png)

### Deploy the backend

To deploy this Strapi instance you'll need:

- [An Heroku account](https://signup.heroku.com/) for free
- [A Cloudinary account for saving images](https://cloudinary.com/users/register/free) for free

Once you have created these accounts you can deploy your instance by clicking on this button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/strapi/strapi-starter-vue-blog)

### Deploy the frontend

**Netflify**

To deploy this Strapi instance you'll need:

- [A Netilfy account](https://app.netlify.com/signup) for free

Once you have created your account you can deploy your instance by clicking on this button.

[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/strapi/strapi-starter-vue-blog)

- Select a repository name and fill the API_URL with your Strapi instance on Heroku (eg: https://your-app.herokuapp.com) without the trailing slash

### Features

- 2 Content types: Article, Category
- Permissions set to `true` for article and category
- 2 Created articles
- 3 Created categories
- Apollo integration (GraphQL) for fetching data from strapi
- Responsive design using UIkit

### Pages

- "/" display every articles
- "/article/:id" display one article
- "/category/:id" display articles depending on the category

### Getting started

**Clone the repository and install dependencies**

```bash
git clone https://github.com/strapi/strapi-starter-vue-blog.git
cd strapi-starter-vue-blog

# Using yarn
yarn setup:yarn

# Using npm
npm run setup:npm
```

### Scaffold your project

This command will launch both of your backend and frontend server and do a data migration in your backend server

```bash
# Using yarn
yarn build:yarn
yarn develop:yarn

# Using npm
npm run build:npm
npm run develop:npm
```

Alternatively, you can still start your servers separately:

### Start the backend server

```bash
cd backend

# Using yarn
yarn build
yarn seed
yarn develop

# Using npm
npm run build
npm run seed
npm run develop
```

### Start the frontend server

```bash
cd frontend

# Using yarn
yarn develop

# Using npm
npm run develop
```

Vue server is running here => [http://localhost:8080](http://localhost:8080)
Strapi server is running here => [http://localhost:1337](http://localhost:1337)

Enjoy this starter
