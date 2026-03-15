const mongoose = require('mongoose');

const sopSchema = new mongoose.Schema({
    sopId: { type: String, required: true, unique: true }, 
    title: { type: String, required: true }, 
    type: { type: String, enum: ['Quality', 'Production', 'Safety'], required: true },
    version: { type: String, default: 'v1.0' },
    description: { type: String }, 
    content: { type: Object }, 
    status: { type: String, enum: ['Draft', 'Active', 'Archived'], default: 'Draft' }, 
    requiredRoles: [{ type: String }],
    references: [{ type: String }],
    ownerSystem: { type: String, default: 'SOP_Intelligence' },
    pdfPath: { type: String }, 
    pdfPathBase64: { type: String },
    data: { type: Object },
    
    // NEW FIELDS FOR RAG
    embeddingId: { type: String }, 
    embeddingStatus: { 
        type: String, 
        enum: ['Not Embedded', 'Pending', 'completed', 'Failed'], 
        default: 'Not Embedded' 
    },
    lastExtractedTime: { type: Date }, // <-- ADDED THIS
    lastRagBuildTime: { type: Date }   // <-- ADDED THIS (Highly recommended for the comparison logic)
}, { timestamps: true });

module.exports = mongoose.model('SOP', sopSchema);