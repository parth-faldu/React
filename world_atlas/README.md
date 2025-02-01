# World Atlas

World Atlas is a modern, responsive web application built with React.js, React Router DOM, and Axios, powered by Vite for blazing-fast performance. This project provides detailed information about every country in the world, including population, region, currency, language, and more, all fetched from a reliable RESTful API.


## Features

Responsive Design: Works seamlessly on desktop, tablet, and mobile devices.

Dynamic Routing: Utilizes React Router DOM for smooth navigation between country details.

API Integration: Fetches real-time data using Axios for reliable and efficient API calls.

Fast Development: Built with Vite for optimized build times and a smooth developer experience.

Interactive UI: Clean and intuitive user interface for easy exploration of global data.

## Tech Stack

Frontend: React.js

Routing: React Router DOM

API Handling: Axios

Build Tool: Vite

Styling: CSS/SCSS

## API Reference

#### Get all items

```http
  GET https://restcountries.com/v3.1
```

#### Get item

```http
  GET https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | name of item to fetch |

## Demo

https://world-atlas-react-js.netlify.app/


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
