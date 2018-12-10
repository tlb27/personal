SET NAMES UTF8;

DROP DATABASE IF EXISTS star;

CREATE DATABASE star CHARSET=UTF8;

USE star;

CREATE TABLE star_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(10),          
    upwd int,
    email VARCHAR(32),
    gender VARCHAR(10) 
);
INSERT into star_user values(null,"dingding","123456","1004333142@qq.com","男");
INSERT into star_user values(null,"dangdnag","123456","2391956659@qq.com","男");
INSERT into star_user values(null,"lilei","123456","673395179@qq.com","女");