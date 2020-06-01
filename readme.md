## Log service

This is a centralized service to aggregate logs across several services

## Installation

First install [Node.js](http://nodejs.org/)

clone the repository then cd into the project folder run

`npm install`

## API DOCUMENTATION

| Http Method | Endpoint               | Description                                                                                       |
| ----------- | ---------------------- | ------------------------------------------------------------------------------------------------- |
| POST        | baseurl/api/log/upload | This is to upload a log file to the server, using contentType of formData required key/field(log) |  |
| PUT         | baseurl/api/log/search | To find log object, using contentType of application/json {"fileName": "savedlogfile"}            |  |
| PUT         | baseurl/ap/log/remove  | To delete a log, using contentType of application/json {"fileName": "savedlogfile"}               |

## Authors

**Adeyemi Kayode** - _Initial work_ - [paginate-mongoose-data](https://github.com/karosi12/paginate-mongoose-data)
