

# Ocr-node

> A NodeJs application using OCR


> tags: #nodejs #javascript #ocr #ES6 #babel
>
get all images         |  Delete an Image by name
:-------------------------:|:-------------------------:
![](/ScreenShots/1.png)  | ![](/ScreenShots/2.png)







> Features

- Get Text from Image
- Store image's Text at a database 
- different language  
- Scan Images only one time
- Possible extention
> Remark
- We put Images file so if we want to test it with a Fronted, we can store the images at that
folder for traitement and delete them after if demanded  

> Technologies

- NodeJs version used for the project ( last stable version : 12.13.0), you can use any version.
- The IDE is Webstorm
-   MongoDb database to test the solution
-   The Ocr used is : https://www.npmjs.com/package/node-tesseract-ocr
-   ES6 javascript

> Structure 

- /src
    - Models : for our Schemas
    - Controllers : to put the functions
    - Routes : our routes
    - Images : where we can store the images that need to be processes
   


## Installation

- touch .env
- add $PORT variable and MongoDB url
-put an Image at : /src/images folder
- go to : src/controllers/TesseractController.js ,change the variable imageName at
  getTextFromImage function with the name of your image
- npm run start_dev
- $get  http://localhost:5000/api/tessarect
- the link with all the image's text : http://localhost:5000/api/tessarect/all
- you can manipulate some functions such as deleting or you send the file name using Postman
  for example and using imageName in your body  


## Support

Reach out to me at one of the following places!

-  fm_chohra@esi.dz

---


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © 
