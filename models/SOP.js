const mongoose = require('mongoose');

const sopSchema = new mongoose.Schema({
    sopId: { type: String, required: true, unique: true }, // NEW: From UI
    title: { type: String, required: true }, // Maps to "SOP Name" in UI
    type: { type: String, enum: ['Quality', 'Production', 'Safety'], required: true }, // NEW: From UI
    version: { type: String, default: 'v1.0' }, // NEW: From UI
    description: { type: String }, // NEW: From UI
    content: { type: Object }, // Made optional if you still plan to pass JSON data programmatically
    status: { type: String, enum: ['Draft', 'Active', 'Archived'], default: 'Draft' }, 
    requiredRoles: [{ type: String }], 
    ownerSystem: { type: String, default: 'SOP_Intelligence' },
    pdfPath: { type: String } 
}, { timestamps: true });

module.exports = mongoose.model('SOP', sopSchema);