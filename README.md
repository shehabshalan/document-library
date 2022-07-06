# What is this?
The application is a document library intended to give its users a web based solution to store and share their documents with others.

Demo: https://next-blog-eta-dun.vercel.app/

### Requirements
- Node v16
- React v18

## How to run?
Clone the repo. 

  ```
  git clone https://github.com/shehabshalan/document-library
  ```

Backend:
- Navigate to backend folder
  ```
  cd backend
  ```
- Install packages using yarn or npm 
  ```
  yarn install
  ```
  or 
    ```
  npm install
  ```
- Create .env file in the root folder (below command uses windows cmd)
  ```
  type . > .env
  ```
<details>
  <summary>  use the following keys inside the .env file</summary>
  
  
  ```javascript
  DATABASE_URI=mongodb+srv://shehab:shehab@cluster0.qurbc.mongodb.net/LibraryDB?retryWrites=true&w=majority
CLOUDINARY_API_KEY=293221968397994
CLOUDINARY_API_SECRET=PeWchLlvoYnFyU4Q6O_WfOaegOI
CLOUDINARY_URL=cloudinary://293221968397994:PeWchLlvoYnFyU4Q6O_WfOaegOI@dmb4vowh7
CLOUDINARY_API_CLOUDNAME=dmb4vowh7
  ```
  
</details>

- Run the backend
  ```
  npm start
  ```
Frontend
- Navigate to frontend folder
  ```
  cd frontend
  ```
- Install packages using yarn or npm 
  ```
  yarn install
  ```
  or 
    ```
  npm install
  ```
- Run the frontend
  ```
  npm start
  ```
## Assumptions:
- There is no authentication hence the system is built for a single user, but files can shared with others.
- Not all files will be previewed.

## How to test?
- if both backend and frontend are running correctly, then you can navigate to localhost:3000.
- upload a file or files using the upload area. 
- each file such PDF / Excel / Word/ txt/ pictures documents will be assigned a corresponding icon based on the file type.
- you will instantlly get the uploaded file/files in the document area. 
- click on download to download or click on share to share the file for a specified duration. 
- set the specified duration as you wish but make it one minute from your current time so you can see the link expiring after that 1 minute.
- you will get a generated link, copy the link and paste it in a new tab. 
- come back after one minute and try the copied link again. it should show that the link has expired.

## Features:
- Upload document/documents such as PDF / Excel / Word/ txt/ pictures documents.
- Retrieve a list of documents with meta data.
- Generate sharable link and specify expiration time.
- Download a document.

## Improvements
- Adding authentication to allow more users and have each user only get their own uploads.
- File validation such as type, size etc.
- Document preview for all document types allowed. 
- UI tweaks.

## Inside look:
![Animation](https://user-images.githubusercontent.com/30008865/177461870-b0dcca6a-c112-4907-b1ff-ff7d878e2dec.gif)

## Tech Stack:
| Tech stack  | Version |
| ------------- | ------------- |
| React.js  | 18.2.0  |
| Node.js  | 16.13.2  |
| Express.js  | 4.18.1  |
| MongoDB using mongoose  | 6.4.2  |
| Cloudinary  | 1.30.0  |
| MUI  | 5.8.6  |
