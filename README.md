# Expense App

How to get this running?

ExpenseAPI - For the API management

a) After successfuly clone and `cd ExpenseAPI` proceed to run the following commands:
```
dotnet restore
```

b) Install `dotnet-ef` or verify the installation
```
dotnet tool install --global dotnet-ef
```

c) Update database by applying the Migration
```
dotnet ef database update
```

d) Run the server
```
dotnet run
```
Seed expense_data_seed.sql into your SQL Server 

ExpenseApp - Angular application with ASP.Net MVC Backend

a) Install Node.js:

Angular requires Node.js and npm (Node Package Manager) to be installed on your system. You can download and install Node.js from the official website: Node.js Downloads (https://nodejs.org/en).

Verify the installation by opening your command prompt or terminal and running the following commands:
```
node -v
npm -v
```

b) Install the Angular CLI:
```
npm install -g @angular/cli
```
c) After installation, verify that the CLI is correctly installed by running:
```
ng --version
```

d) Add proxy and https-proxy if needed by your network
```
npm config set proxy http://proxy.example.com:8080
npm config set https-proxy http://proxy.example.com:8080
```

e) Run `npm install` in ExpenseApp directory to install all the dependencies package.

e) Navigate to Your Project: ExpenseApp
To run your Angular application, use the following command:
```
ng serve
```
