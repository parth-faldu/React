
# TanStack Query Demo: Traditional Fetching vs. useQuery & Infinite Scroll

This project demonstrates the difference between traditional data fetching using useState and useEffect versus modern fetching with useQuery from TanStack Query. It also includes an infinite scroll feature using the useInView hook from react-intersection-observer

## Features

✅ Comparison of Fetching Methods : 
 
   - Old Way: Uses useState and useEffect to fetch data from a REST API.

   - useQuery Hook: Implements efficient data fetching, caching, and background refetching.


✅ Navigation Between Sections

 - A navbar allows switching between:
    
    1. Traditional Fetching (useState & useEffect)
    2. useQuery Fetching
    3. Infinite Scroll

✅ Infinite Scrolling

 - Uses the useInView hook from react-intersection-observer to trigger data fetching as the user scrolls down.

- Efficiently loads more data when the user reaches the bottom of the page.

## Tech Stack

 - React
 - TanStack Query (React Query)
 - React Router (for page navigation)
 - react-intersection-observer (for infinite scrolling)
 - REST API for data fetching


## Demo

https://tanstack-query-react.netlify.app/


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
