# Practise-App

This App is implemented in [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

##Prerequisite - : make sure node version is 10.0.0

## Development server

Run `ng serve`|`ng serve --port 5000` for a dev server. Navigate to `http://localhost:4200/`|`http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## Directory Structure
	
 - angular.json : Holds project configuration
 - child.component.ts 
 - e2e 
 - how-to-use.txt
 - node_modules
 - package.json
 - package-lock.json
 - README.md
 - README.md~
 - src - Contains Project's source code. Adding only app directory
 	- app - This contains main implementation
	 	- app.component.css
	 	- app.component.html
	 	- app.component.ts
	 	- app.module.ts
	 	- app-routing.module.ts
	 	- mock-quotes.ts
	 	- quote.model.ts
	 	- quotes
	 	- quotes-details
	 	- quotes.service.ts
 - tsconfig.json
 - tslint.json


## Application serves the data through model file which would be served via API to application.

## Troubleshoot  
If application is not running and throwing error. It may happend that node modules which are readily available in repository is not compatible

- install nodejs 10.0.0 - nvm install 10.0.0 (considering nvm is already installed)

- sudo rm -rf node_modules from where repository is cloned

- make sure node version is set to 10.0.0

- npm install

- ng serve --port 5000 
	- If this opens the editor execute "sudo apt purge ng-common ng-latin"
	- If this throws an error `bash: /usr/bin/ng: No such file or directory` then there is need to set path of ng
	open .bashrc (usually present in /home/<user>) add path where ng is present
	it could be present at `/usr/local/lib/node_modules/@angular/cli/bin/ng` if npm installed globally or in project's node_modules directory
	- Add alise in .bashrc file for example `alias ng="/var/www/html/Docplexus-assignment/node_modules/@angular/cli/bin/ng"`
	reload .bashrc using command `. /.bashrc`|`source /.bashrc`
