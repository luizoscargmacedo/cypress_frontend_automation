## README 
Automation structure

#### Frameworks básicos: 
- Node.js, Cucumber and Cypress.

#### Frameworks: 
- Node.js

### Environment Configuration ###
### Installation ###
```sh
 npm install
```
- To install Cypress: 
```sh
 npx cypress install
```
#### Project Structure:
- Gherkin features (Cucumber) "cypress/integration"
- Steps definitions and Page Objects "cypress/support" 
- Alternative to execute without BDD structure "healthproject.spec.js" "cypress/integration"
- Test Videos will be save on "cypress/videos" 
- cucumber-html-report will be in "report" directory
- RETRIES method on index.js, to run again the step that failed 2 times.
- The second test screenshot will be in "mochawesome-report/snapshots/healthproject.feature/print"
- .gitignore rule to not upload the videos, screenshots and "node_modules"in repository 
- Logs and methods are configured to appear on console during the execution.

#### Reports:
Mochawesome-report and Cucumber-html-report

**Mochawesome-report**
- Directory "mochawesome-report"
- Failed steps (screenshot evidences) in dorectory "snapshots"

**Cucumber-html-report**
- Directory "report"
- It is necessary execute "npm run report" to see details.

#### To run the automation tests:
```sh
./node_modules/.bin/cypress run
```
or
```sh
npx cypress run
```
or by script 
```sh
npm run cy:run
```
**To execute all features on Chrome Browser:**
```sh 
./node_modules/.bin/cypress run --browser chrome
```
or
```sh
npx cypress run --browser chrome
```

**To run a spec without BDD:**
```sh 
./node_modules/.bin/cypress run --spec "cypress/integration/ebay.spec.js"
```
or
```sh
npx cypress run --spec "cypress/integration/ebay.spec.js"
```

**To run by TAG follow the example below.**
```sh
npm run tags TAGS='@ebay_user_register'
```

- To run by TAG and generate a report.
```sh
npm run tags TAGS='@ebay'; npm run report
```


_____________________________________________
  
**Version:** 1.0 <br>
**Created:** 2021-05-16

E-mail: luiz.gmacedo@gmail.com
Luiz Oscar Guabiraba de Macedo
