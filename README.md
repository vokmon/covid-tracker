Dashboard to display the information of Covid-19 situation in Thailand.
All data is provided by https://covid19.th-stat.com/th/api.

This project is aimed to try out the new features, methods, patterns and techniques to improve a better programming practice by creating a useful small application.

Key Techniques
1. useContext in conjunction with useRedux to create a global context. This approach improves communications between components better. No more passing many props around.
2. Try out new lib reactchart-js-2
3. Create custom hook to fetch data. This makes the components much cleaner. The logic to retrieve the data can be done in a separated file.
4. Use css as a module
5. Language switching
6. Responsiveness

Screenshot
![Example](https://github.com/vokmon/covid-tracker/blob/master/dashboard.png?raw=true)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Deployment
docker container run -p 8081:80 -v /apps/showcase/covid-dashboard:/usr/share/nginx/html --name showcase-web nginx
sudo scp -r * admin@202.44.53.206:/apps/showcase/covid-dashboard