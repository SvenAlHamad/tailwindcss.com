var walk    = require('walk');
const fs = require('fs');

// get the redirects
const rawdata = fs.readFileSync('redirects.json');
const redirects = JSON.parse(rawdata);



// Get the MDX files
var files   = [];
var walker  = walk.walk('./src/pages/docs', { followLinks: false });

walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    if(stat.name.endsWith('mdx')){
        files.push(root + '/' + stat.name);
    }
    next();
});

walker.on('end', function() {
    
    // loop over the mdx files and update the location based on the matching redirect
    files.forEach(file=>{
        
        // open the mdx file
        

    });

});