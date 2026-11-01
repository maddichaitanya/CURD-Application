
# creating an CURD App of Employee 

1.  first created a folder of an application 
2.  then created an sub folder front end backend

# frount end

1.  install the react  
    cmd:-  npm create vite@latest . -- --template react
            npm install axios  # for sendind and facting data from API
        
        to Run :-  npm run dev
        It run on: -    http://localhost:5173

2. 




# BackEnd

    cmd:-   init node js 

            npm init -y

    cmd:- 
            npm install express mongoose cors dotenv

            npm install --save-dev nodemon


    #explation 
        What are these packages?
            - express – Creates backend APIs.
            - mongoose – Connects Node.js with MongoDB.
            - cors – Allows React and Node.js to communicate.
            - dotenv – Stores environment variables.
            - nodemon – Automatically restarts the server when code changes.


# conecting with MongoDB compass

    1.  Open MongoDB Compass
    2. entered this String :- mongodb://127.0.0.1:27017
    3. click on connect and save 
    4. then click on create Database name = employeeDB and elements = employees
            click on create database
    

    Step 1 – Create Employee Model (models/Employee.js)
            A model defines the structure of our employee data.
    
    step 2 - Create CRUD APIs (routes/employeeRoutes.js)
    
    Step 3 – Configure backend server (server.js)