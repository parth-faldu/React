# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# ExcelFlix - OTT Platform

ExcelFlix is a front-end OTT platform built with React and Vite, allowing users to browse and view movie details fetched from an external API. The platform presents movie titles, release dates, summaries, and more, offering a fast and responsive interface for seamless exploration of film information.

## API Reference

#### Get all items

```http
  http://www.omdbapi.com/?i=tt3896198&apikey=YOUR_API_KEY
```

#### Get item

```http
 https://www.omdbapi.com/?i=tt3896198&apikey=YOUR_API_KEY&s=${movie}&page=${number}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `YOUR_API_KEY`      | `string` | **Required**. Id of item to fetch |
| `movie`       | `string` | movie name of item to fetch |
| `number`    | `string` | **Required**. Id of item to fetch |


## Demo

https://excel-flix.netlify.app/
