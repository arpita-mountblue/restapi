# Movies API

---

- ## Add Movies:

  #### Request Type: POST

  #### Body Data:

  ```JSON
  {
    "Title": "Twilight 3",
    "Director": "Catherine Hardwicke",
    "Actors": "Kristen Stewart, Stephenie Meyer ",
    "Language": "English, Hindi",
    "Rating": 9.8,
    "Year": 2018
  }
  ```

  #### URL:

  ```http
  https://movies-restapi-mongodb.herokuapp.com/movies
  ```

  #### Response:-

  ```JSON
  {
    "_id": "626baca2641e5387dcec4d6e",
    "Title": "Twilight 3",
    "Director": "Catherine Hardwicke",
    "Actors": "Kristen Stewart, Stephenie Meyer ",
    "Language": "English, Hindi",
    "Rating": 9.8,
    "Year": 2018,
    "__v": 0
  }
  ```

- ## Get all movies:

  #### Request Type: GET

  #### URL:

  ```http
  https://movies-restapi-mongodb.herokuapp.com/movies
  ```

  #### Response:-

  ```JSON
  [
      {
        "_id": "626baa5f641e5387dcec4d67",
        "Title": "Guardians of the Galaxy Vol. 1",
        "Director": "James Gunn",
        "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
        "Language": "English",
        "Rating": 8.6,
        "Year": 2012,
        "__v": 0
      },
      {
        "_id": "626baaff641e5387dcec4d69",
        "Title": "Student of the year 2",
        "Director": "Punit Malhotra",
        "Actors": "Tiger Shroff, Ananya Pandey, Tara Sutaria ",
        "Language": "Hindi",
        "Rating": 2.1,
        "Year": 2019,
        "__v": 0
      },

  ]
  ```

- ## Get movie by ID:

  #### Request Type: GET

  #### Param:

  ```JSON
  {
    "ID":"626baca2641e5387dcec4d6e"
  }
  ```

  #### URL:

  ```http
  https://movies-restapi-mongodb.herokuapp.com/movies/:ID
  ```

  #### Response:-

  ```JSON
  {
    "_id": "626baca2641e5387dcec4d6e",
    "Title": "Twilight",
    "Director": "Catherine Hardwicke",
    "Actors": "Kristen Stewart, Stephenie Meyer ",
    "Language": "English",
    "Rating": 5.3,
    "Year": 2008,
    "__v": 0
  }
  ```

- ## Update movie by ID:

  #### Request Type: PUT

  #### Param:

  ```JSON
  {
    "ID":"626ccf44bb69051593a3291c"
  }
  ```

  #### Body Data:

  ```JSON
  {
    "Rating": 8.8
  }
  ```

  #### URL:

  ```http
  https://movies-restapi-mongodb.herokuapp.com/movies/:ID
  ```

  #### Response:-

  ```JSON
  {
    "_id": "626ccf44bb69051593a3291c",
    "Title": "Twilight 3",
    "Director": "Catherine Hardwicke",
    "Actors": "Kristen Stewart, Stephenie Meyer ",
    "Language": "English, Hindi",
    "Rating": 8.8,
    "Year": 2018,
    "__v": 0
  }
  ```

- ## Delete movie by ID:

  #### Request Type: DELETE

  #### Param:

  ```JSON
  {
    "ID":"626ccf44bb69051593a3291c"
  }
  ```

  #### URL:

  ```http
  https://movies-restapi-mongodb.herokuapp.com/movies/:ID
  ```

  #### Response:-

  ```JSON
  {
    "_id": "626ccf44bb69051593a3291c",
    "Title": "Twilight 3",
    "Director": "Catherine Hardwicke",
    "Actors": "Kristen Stewart, Stephenie Meyer ",
    "Language": "English, Hindi",
    "Rating": 8.8,
    "Year": 2018,
    "__v": 0
  }
  ```
