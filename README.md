This is a frontend interface of a movie app I designed myself.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Kindly Note

Once you clone or download this app, run `npm install` in the command line directory to download all dependencies.

Also, this app uses an environment variable. Read more about environment variables [here](https://create-react-app.dev/docs/adding-custom-environment-variables/). This environment variable is used to store the TMBD API key. You can get yours by signing up at [https://www.themoviedb.org/](https://www.themoviedb.org/).

The name of the environment variable is (REACT\_APP\_API\_KEY). Assuming your key is **t0p53cr3t4p1k3yv4lu3**, you can set it by creating a .env file in the app directory and declare the variable in it. For example: REACT\_APP\_API\_KEY = t0p53cr3t4p1k3yv4lu3.

Or you can temporarily declare it at runtime (when starting the app):
>
REACT\_APP\_API\_KEY=t0p53cr3t4p1k3yv4lu3 npm start // For Linux/macOS  
Bash($env:REACT\_APP\_API\_KEY=t0p53cr3t4p1k3yv4lu3) -and (npm start) // For Windows PowerShell  
set REACT_APP_API_KEY=t0p53cr3t4p1k3yv4lu3 && npm start // For Windows cmd.exe

The API used was from 'THE MOVIE DB (TMDB)' API at [https://www.themoviedb.org/](https://www.themoviedb.org/).

You can view live version [here](https://el-mubarak-movies-app.web.app).

Enjoy, Explore & Analyze. Have Fun!!