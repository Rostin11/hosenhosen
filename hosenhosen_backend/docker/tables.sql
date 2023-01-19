drop database if exists hosenhosen_db;
create database hosenhosen_db;
use hosenhosen_db;

create table products
(
    id          int          not null primary key auto_increment,
    name        varchar(256) not null,
    image       varchar(512) not null,
    category    varchar(128) not null,
    description varchar(255) not null,
    price       FLOAT        not null
);

create table sku
(
    sku       int not null,
    size      int not null,
    productID int not null,
    FOREIGN KEY (productID) REFERENCES products (id)
);

ALTER TABLE products AUTO_INCREMENT = 1;

insert into products(name, image, category, description, price)
values ('Hiker', 'shoe1.jpg', 'shoes', 'This rugged boot will get you up the mountain safely.', 94.95);
insert into products(name, image, category, description, price)
values ('Climber', 'shoe2.jpg', 'shoes', 'Sure-footed traction in slippery conditions.', 78.99);
insert into products(name, image, category, description, price)
values ('Explorer', 'shoe3.jpg', 'shoes', 'Look stylish while stomping in the mud.', 154.95);

insert into sku(productID, sku, size)
values (1, 17, 7);
insert into sku(productID, sku, size)
values (1, 18, 8);
insert into sku(productID, sku, size)
values (2, 28, 8);
insert into sku(productID, sku, size)
values (2, 29, 9);
insert into sku(productID, sku, size)
values (3, 37, 7);
insert into sku(productID, sku, size)
values (3, 38, 8);
insert into sku(productID, sku, size)
values (3, 39, 9);

select id,name,image, category, description, price from products GO