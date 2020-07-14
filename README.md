# CommandLineHelper
The backend is based of this tutorial by Les Jackson: https://www.youtube.com/watch?v=fmvcAzHpsk8

## Run the ASP.NET Core Web API application
Run `dotnet run` to start the web API.
The API will run on `https://localhost:5001/api`.

### GET all commands
`https://localhost:5001/api/commands`

### GET a command by id
`https://localhost:5001/api/commands/{id}`

### POST a command
`https://localhost:5001/api/commands/`

### PUT a command by id
`https://localhost:5001/api/commands/{id}`

### PATCH a command by id
`https://localhost:5001/api/commands/{id}`

### DELETE a command by id
`https://localhost:5001/api/commands/{id}`

## Run the Angular application
Open the Angular app folder `cd CommandLineHelper`.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
