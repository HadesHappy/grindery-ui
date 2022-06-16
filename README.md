# Grindery UI

## Step to publish in NPM

1) npx create-react-app grindery-library
2) Copy folder "components" from https://github.com/grindery-io/grindery-ui/tree/master/src to root --> src
3) Create index.js in root ----> src/index.js
4) Copy on index.js this

        export  { default as Button}  from './components/ButtonElement/ButtonElement';
        export { default as AutoCompleteInput } from './components/AutoCompleteInput/AutoCompleteInput';
        export { default as InputBox } from './components/InputBox/InputBox';
        export {default as SelectInput} from  './components/SelectInput/SelectInput';
        export {default as PaperBox} from './components/PaperBox/PaperBox';
        export {default as Text} from './components/Text/Text'; 
        export {default as InputSuffix} from './components/InputSuffix/InputSuffix';
        export { default as AlertField } from './components/AlertField/AlertField';
        export { default as SwitchInput} from './components/SwitchInput/SwitchInput';
        export { default as DialogBox} from './components/DialogBox/DialogBox';
        export { default as SelectSimple} from './components/SelectSimple/SelectSimple';
        export { default as Drawer} from './components/DrawerComponent/DrawerComponent';
        export { default as IconButton}  from './components/IconButtonComponent/IconButtonComponent';
        export { default as TabComponent} from './components/TabComponent/TabComponent';
        export { default as CircularProgress} from './components/CircularProgressComponent/CircularProgressComponent';

5) npm i -D @babel/cli @babel/core @babel/preset-env @babel/preset-react rollup @rollup/plugin-babel rollup-plugin-delete rollup-plugin-peer-deps-external npm-run-all

6) Change package.json like this.

        {
          "name": "grindery-ui",
          "files": [
            "./dist"
          ],
          "version": "0.2.1",
          "main": "dist/index.cjs.js",
          "module": "dist/index.esm.js",
          "source": "src/index.js",
          "dependencies": {
            "@emotion/react": "^11.9.0",
            "@emotion/styled": "^11.8.1",
            "@mui/icons-material": "^5.8.2",
            "@mui/material": "^5.8.2",
            "@testing-library/jest-dom": "^5.16.4",
            "@testing-library/react": "^13.3.0",
            "@testing-library/user-event": "^13.5.0",
            "react-scripts": "5.0.1",
            "web-vitals": "^2.1.4"
          },
          "scripts": {
            "build": "rollup -c",
            "build-watch": "rollup -c -w",
            "start-playground": "cd playground && npm run start",
            "i-all": "npm i && cd playground && npm i",
            "dev": "npm-run-all --parallel build-watch start-playground"
          },
          "eslintConfig": {
            "extends": [
              "react-app",
              "react-app/jest"
            ]
          },
          "browserslist": {
            "production": [
              ">0.2%",
              "not dead",
              "not op_mini all"
            ],
            "development": [
              "last 1 chrome version",
              "last 1 firefox version",
              "last 1 safari version"
            ]
          },
          "devDependencies": {
            "@babel/cli": "^7.17.10",
            "@babel/core": "^7.18.2",
            "@babel/preset-env": "^7.18.2",
            "@babel/preset-react": "^7.17.12",
            "@rollup/plugin-babel": "^5.3.1",
            "npm-run-all": "^4.1.5",
            "rollup": "^2.75.5",
            "rollup-plugin-delete": "^2.0.0",
            "rollup-plugin-peer-deps-external": "^2.2.4"
          },
          "peerDependencies": {
            "react": "^18.1.0",
            "react-dom": "^18.1.0"
          }
        }

7) npm update && npm run build

8) npm login --> add username --> password --> email and code from email

9) npm publish

