let mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    department: { type: String, trim: true },
    position: { type: String, trim: true },
    phone: { type: String, trim: true },
    salary: { type: Number, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);