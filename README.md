# Hello-Movies application

## Hello-Movies front side

The Front side of the application is written on React.TS

### Components
 - Header - header of the website
 - Footer - footer of the website
 - List - displays the list of movies page of the website
 - ListItems - the wrapper component for the list of movies inside List component of the website
 - ListItem - the single movie / tv show item in the application
 - MovieDetails - the wrapper component to show the details of the movie/tv show in the website


# Libraries
 - Redux/toolkit - this library was used to generate a general store of the application, where each component can easily modify and access the state


# To run the application
 - npm install
 - npm start

## Hello-Movies back side

The backend of the application is written on Python Django framework

### Applications
 - movie_details

### Model
 - Movie()

### APIS
 - MovieListAPIView - /list | GET request
 - MovieDetailAPIView - /detail/:id | GET request


# To run the application
 - python -m venv env
 - env/Scripts/activate
 - python -m pip install -r requirements.txt
 - pgAdmin4 tool PostgreSQL server -> create a database called hello_movies
 - python manage.py migrate
 - python manage.py loaddata modified_db.json
 - python manage.py runserver

## DB

Database for the backend was used PostgreSQL local database

Movie table has following properties: id, title, image, director, genres, duration, score, rating, overview, year, actors 

# To create the db
 - pgAdmin4 tool PostgreSQL server -> create a database called hello_movies