- Step use inventory API : 
  Clone it from GitHub and install dependencies

- Create DB sql  from Folder db 
   PostgreSQL restore a database with pgAdmin 4 or Navicat

- Rename .env.example to .env

- npm install
- npm  start 

* Test CRUD  API Postman :
    http://localhost:5000/api/user/

*  Login to get token
     http://localhost:5000/api/user/login

* GET product by params userid,currency 
    http://localhost:5000/api/product?userid=782942460982&currency=LAK

* CRUD Must have a token
   http://localhost:5000/api/product