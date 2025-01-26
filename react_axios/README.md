# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React + Vite CRUD Application with Posts

This project is a simple CRUD (Create, Read, Update, Delete) application built with React, Vite, and Axios. It allows users to manage posts through an API, where they can create, view, edit, and delete posts. This project is designed for developers who want to learn how to build interactive, API-driven applications with modern JavaScript tools and libraries.


## API Reference

#### Get all items

```http
  GET https://jsonplaceholder.typicode.com
```

#### Get item

```http
  GET https://jsonplaceholder.typicode.com/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Create a new post

```http
POST https://jsonplaceholder.typicode.com/posts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Update a post

```http
PUT https://jsonplaceholder.typicode.com/posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Delete a post

```http
DELETE https://jsonplaceholder.typicode.com/posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Demo

https://posts-react-axios.netlify.app/
