# sarthikg.com

> My portfolio website ❤️

## Tech Stack

- Frontend - Astro Components
- Backend - Astro Endpoints
- Deployment - Vercel

## Running locally (with vs-code & docker-compose)

1. Clone this repo:

   ```sh
     git clone https://github.com/sarthikg/portfolio.git
   ```

2. Navigate to the project folder:

   ```sh
     cd portfolio
   ```

3. Open the project in vs-code

   ```sh
     code .
   ```

4. Install dev-containers extension in vs-cde if not already installed (ms-vscode-remote.remote-containers).
5. You'll see a popup appear on bottom-right corner of vs-code saying `Folder contains a Dev Container configuration file. Reopen folder to develop in a container`. Click on `Reopen in Container`.
6. Start the server:

   ```sh
     npm run dev
   ```

## Running locally (docker-compose)

1. Clone this repo:

   ```sh
     git clone https://github.com/sarthikg/portfolio.git
   ```

2. Navigate to the project folder:

   ```sh
     cd portfolio
   ```

3. Run docker-compose

   ```sh
     docker compose --file ./deployment/dev/docker-compose.yaml up
   ```

4. Start the server:

   ```sh
     npm run dev
   ```

## Running locally (without docker-compose)

1. Clone this repo:

   ```sh
     git clone https://github.com/sarthikg/portfolio.git
   ```

2. Navigate to the project folder:

   ```sh
     cd portfolio
   ```

3. Install dependencies:

   ```sh
     npm i
   ```

4. Start the server:

   ```sh
     npm run dev
   ```

## 🚀 Project Structure

```text
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── facades/
│   ├── layouts/
│   ├── pages/
│   ├── schemas/
│   ├── styles/
│   └── utils/
└── package.json
```

| Directory    | Description                                                                  |
| :----------- | :--------------------------------------------------------------------------- |
| `public`     | Contains assets which don't require processing                               |
| `assets`     | Contains assets which requires processing like images which require scaling  |
| `components` | Contains the Reusable UI Components                                          |
| `content`    | Contains the content like data, articles, etc.                               |
| `facades`    | Contains functions to get `content` in `components`                          |
| `layouts`    | Contains layouts for the `pages`                                             |
| `pages`      | Contains the pages/routes available in the site, including backend endpoints |
| `schemas`    | Contains schemas for `content`                                               |
| `styles`     | Contains global styles like typography, colors, variables, etc.              |
| `utils`      | Contains utility functions used across the app                               |

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                       |
| :--------------------- | :------------------------------------------- |
| `npm install`          | Installs dependencies                        |
| `npm run dev`          | Starts local dev server at `localhost:4321`  |
| `npm run build`        | Build your production site to `./dist/`      |
| `npm run preview`      | Preview your build locally, before deploying |
| `npm run format:fix`   | Fixes the formatting issues across all files |
| `npm run format:check` | Checks formatting issues across all files    |
| `npm run lint:fix`     | Fixes the linting issues across all files    |
| `npm run lint:check`   | Checks linting issues across all files       |
