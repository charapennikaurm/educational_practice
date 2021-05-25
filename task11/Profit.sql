CREATE DATABASE IF NOT EXISTS Profit;
USE Profit;

DROP TABLE USERS;
DROP TABLE VENDORS;
DROP TABLE PRODUCTS;
DROP TABLE REVIEWS;

CREATE TABLE USERS(
USER_ID BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
USER_NAME VARCHAR(50) NOT NULL,
USER_ROLE VARCHAR(10) NOT NULL
);

CREATE TABLE VENDORS(
VENDOR_ID BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
VENDOR_NAME VARCHAR(50) NOT NULL
);

CREATE TABLE PRODUCTS(
PRODUCT_ID BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
DESCR VARCHAR(250) NOT NULL,
CREATED_AT DATE NOT NULL,
LINK VARCHAR(250) NOT NULL,
PHOTO_LINK VARCHAR(250) NULL,
VENDOR_ID BIGINT NOT NULL,
HASHTAGS VARCHAR(150) NOT NULL,
DISCOUNT INT NOT NULL,
VALID_UNTIL DATE NOT NULL
);


CREATE TABLE REVIEWS(
USER_ID BIGINT NOT NULL,
PRODUCT_ID BIGINT NOT NULL,
REVIEW_TEXT VARCHAR(1000) NULL,
RATING INT NULL
);

INSERT USERS(USER_ID, USER_NAME,USER_ROLE)
VALUES
(1, 'user1','customer'),
(2, 'user2','customer'),
(3, 'user3','customer'),
(4, 'user4','admin'),
(5, 'user5','admin'),
(6, 'user6','customer'),
(7, 'user7','customer'),
(8, 'user8','customer'),
(9, 'user9','customer'),
(10, 'user10','admin');

INSERT VENDORS(VENDOR_ID, VENDOR_NAME)
VALUES
(1,'vendor1'),
(2,'vendor2'),
(3,'vendor3'),
(4,'vendor4'),
(5,'vendor5'),
(6,'vendor6');

INSERT PRODUCTS(PRODUCT_ID,DESCR,CREATED_AT,LINK,PHOTO_LINK,VENDOR_ID,HASHTAGS,DISCOUNT,VALID_UNTIL)
VALUES
(1001,'pr1','2021-03-20','www.link.com','www.photo-link.com', 1, 'music, films', 30,'2022-03-20'),
(1002,'pr2','2020-07-20','www.link.com','www.photo-link.com', 1, 'music, films', 30,'2021-12-20'),
(1003,'pr3','2021-03-05','www.link.com','www.photo-link.com', 1, 'music, films', 30,'2022-05-13'),
(1004,'pr4','2021-03-20','www.link.com','www.photo-link.com', 1, 'music, films', 30,'2022-05-09'),
(1005,'pr5','2021-03-20','www.link.com','www.photo-link.com', 1, 'music, films', 30,'2022-05-09'),
(1006,'pr6','2021-08-21','www.link.com','www.photo-link.com', 1, 'music, films', 30,'2022-08-20'),
(1007,'pr7','2021-10-09','www.link.com','www.photo-link.com', 1, 'music, films', 30,'2022-09-09');

INSERT REVIEWS(USER_ID,PRODUCT_ID,REVIEW_TEXT,RATING)
VALUES
(1,1001,'review 1',4),
(2,1001,'review 2',3),
(2,1002,'review 3',5),
(3,1004,'review 4',4),
(9,1001,'review 5',2);