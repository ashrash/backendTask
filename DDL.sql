DROP TABLE "OrderItem";
DROP TABLE "Order";
DROP TABLE "Products";
DROP TABLE "User";

-- **************user ********************* --

CREATE TABLE "user"
(
 "id"          bigint GENERATED ALWAYS AS IDENTITY,
 "username"   varchar(50) NOT NULL ,
 "name"       varchar(100) NOT NULL ,
 "address"    varchar(200) NOT NULL ,
 "createdDate" timestamp NOT NULL ,
 "updatedDate" timestamp NOT NULL ,

PRIMARY KEY (id)
);


-- *****************Products ********************* --

CREATE TABLE "Products"
(
 "id"          bigint GENERATED ALWAYS AS IDENTITY,
 "title"       varchar(100) NOT NULL,
 "description" varchar(200) NOT NULL ,
 "pictureUrl"  varchar(100) NOT NULL ,
 "price"       decimal(12,2) NOT NULL ,
 "quantity"    integer NOT NULL ,
 "createdDate" timestamp NOT NULL ,
 "updatedDate" timestamp NOT NULL ,
 PRIMARY KEY(id)
);



-- **************Order ********************* --

CREATE TABLE "Order"
(
 "id"          bigint GENERATED ALWAYS AS IDENTITY,
 "userId"      bigint NOT NULL ,
 "totalPrice"  integer NOT NULL ,
 "createdDate" timestamp NOT NULL ,
 "updatedDate" timestamp NOT NULL ,

PRIMARY KEY (id),
CONSTRAINT FK_ODR_1
      FOREIGN KEY("userId") 
	  REFERENCES "user"(id)
);


-- **************OrderItems ********************* --

CREATE TABLE "OrderItem"
(
 "productId"   bigint NOT NULL ,
 "orderId"     bigint NOT NULL ,
 "quantity"    integer NOT NULL ,
 "createdDate" timestamp NOT NULL ,
 "updatedDate" timestamp NOT NULL ,

CONSTRAINT FK_OI_1
      FOREIGN KEY("productId") 
	  REFERENCES "Products"(id),
CONSTRAINT FK_OI_2
      FOREIGN KEY("orderId") 
	  REFERENCES "Order"(id)        
);
