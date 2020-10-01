create database if not exists crud_react_mysql;

use crud_react_mysql;

create table if not exists moviesInfo (
	id int(5) not null auto_increment primary key,
    movieName varchar(100) not null,
    movieReview text(400) not null
);

describe moviesInfo;

select * from moviesInfo;