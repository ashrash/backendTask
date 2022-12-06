
-- *****************Products ********************* --

CREATE TABLE Products
(
 id          bigint GENERATED ALWAYS AS IDENTITY,
 description varchar(200) NOT NULL ,
 pictureUrl  varchar(45) NOT NULL ,
 price       decimal(12,2) NOT NULL ,
 quantity    integer NOT NULL ,
 createdDate timestamp NOT NULL ,
 updatedDate timestamp NOT NULL ,
 title       varchar(80) NOT NULL,
 PRIMARY KEY(id)
);



-- **************Checkout ********************* --

CREATE TABLE Checkout
(
 id          bigint GENERATED ALWAYS AS IDENTITY,
 productId   bigint NOT NULL ,
 quantity    integer NOT NULL ,
 createdDate timestamp NOT NULL ,
 updatedDate timestamp NOT NULL ,

PRIMARY KEY (id),
CONSTRAINT FK_1
      FOREIGN KEY(productId) 
	  REFERENCES Products(id)
);




