# one-to-many-relation-nested-parentschild-nodejs-mongodb
1.Book & Auther
----------------
created one to many association to work according to route like first post parent, then post child to use parent id add on publisher key, then work on get method

2.Category (Parent & child)
----------------------------
created nested category in same model for Parent/s child/same

Inatallation Requirements
---------------------------
Nodejs:16.17.1
Monogobd: 6.0.2

Install & Run
----------------
npm i or npm install for installation
node app.js to run the app

api
http://localhost:3005/addBook -post
http://localhost:3005/publishers -get
http://localhost:3005/addcategory-post
http://localhost:3005/getcategory-get

update and delete you can follow above api



