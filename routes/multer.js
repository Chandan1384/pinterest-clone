const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Specify upload directory
        cb(null, './public/images/uploads');
    },
    filename: function (req, file, cb) {
        // Generate a unique filename with the original file extension
            const uniquename = uuidv4(); // Generate a unique identifier
        cb(null, uniquename + path.extname(file.originalname)); // Corrected typo
    }
})

// Create multer instance
const upload = multer({ storage: storage });

module.exports = upload;
