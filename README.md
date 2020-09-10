# _NASA Photos_

#### _This program accesses different NASA api's and based on user input will show different information/photos, 9/10/2020_

#### By _**Joseph Nilles, Forrest Reiland, Ophelia Swen**_

## Description

_A user may enter a search term and images stored in the NASA Image and Video Library API that match the search term are returned to the user. A user may click through the images using a carousel. A user can click a button that returns a random image from the Astronomy Picture of the Day API. The image is returned with a short title description. Similarily, a user can click a button which returns a random image of Earth photographed from space. This feature pulls images from NASA's Earth Polychromatic Imaging Camera which has been photographing Earth daily since 2015. The site also allows a user to select any date using an interactive calender feature. The calender returns a list of the closest asteroids to Earth on the input date along with the size of the asteroid. This feature pulls data from NASA's Near Earth Object Web Service API._

_To generate your unique API key visit api.nasa.gov. Fill out the required information to generate your API key. Your API key should be stored within the main file directory in a file named ".env". The API should be stored in the variable "API_KEY". Furthermore, the .env file should not be made public or shared to Github._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|**Program takes user input and returns photos from NASA Image and Video Library API** | Input: "Mars" | Photo Generates |
|**Program takes user input and returns photos from NASA APOD API** | Click Button | Photo Generates |
|**Program takes user input and returns photos from NASA EPIC API**| Click Button | Photo Generates |
|**Program takes user input and returns photos from NASA Near Earth Object Web Service API**| Input: "09/10/2020"  | Name: (2020 PU) Size: 173.0374186925 - 386.9234308474 feet diameter |


## Setup/Installation Requirements

* _clone this repository_
* _navigate to the root dir of this project_
* _in terminal do command npm install_
* _generate an api key at api.nasa.gov_
* _create a .env file in the root dir_
* _in .env file add API_KEY=[your api key]_
* _in terminal do command npm run start_


_To generate an api key to use NASA api's go to api.nasa.gov. Generate a key following their instructions and enter the key into the .env file as listed above._

## Known Bugs

_No Known bugs_

## Support and contact details

_Contact Information: Joseph Nilles: jbnilles24@gmail.com, Ophelia Swen: ophelia.swen@gmail.com , Forrest Reiland: freiland@email.arizona.edu_

## Technologies Used

_This project uses HTML, CSS, Bootstrap, jQuery, and JavaScript, with the help of Postman._

### License

*This software is available with an MIT license*

Copyright (c) 2020 **_Joseph Nilles, Ophelia Swen, Forrest Reiland_**