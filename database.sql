CREATE TABLE Genre (
    Genre_id SERIAL PRIMARY KEY,
    Name VARCHAR(255)
);

CREATE TABLE User_ (
    User_id INT PRIMARY,
    Name VARCHAR(255),
    Username VARCHAR(50) UNIQUE,
    Birth_year INT
);

CREATE TABLE Movie (
    Movie_id INT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Year INT,
    Genre_name VARCHAR(255),
    FOREIGN KEY (Genre_name) REFERENCES Genre(name)
);

CREATE TABLE Favorite (
    Favorite_id INT PRIMARY KEY,
    Movie_id INT,
    User_id INT,
    FOREIGN KEY (Movie_id) REFERENCES Movie(Movie_id),
    FOREIGN KEY (User_id) REFERENCES User_(User_id)
);

CREATE TABLE Review (
    Review_id INT PRIMARY KEY ,
    Movie_id INT,
    User_id INT,
    Stars INT CHECK (Stars BETWEEN 1 AND 5),
    Review_text TEXT,
    FOREIGN KEY (Movie_id) REFERENCES Movie(Movie_id),
    FOREIGN KEY (User_id) REFERENCES User_(User_id)
);