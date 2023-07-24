const multer = require('multer')

//first set up the path and filename the image will use
const storage = multer.diskStorage({
    destination: 'public/images/', // store images in public folder of backend, in defined images directory
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname) // timestamp the filename to keep it unique
    },
})
    
//create the image upload functions
//single file will be stored in req.file, multiple files are stored in req.files
const uploadFile = multer({ storage: storage }).single("file") // 'file' is the name of the file sent from the front-end in a FormData object
//const uploadFiles = multer({ storage: storage }).array("files") // change single to array for multiple, front-end needs to send array in FormData

module.exports = uploadFile;