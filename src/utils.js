const fs = require('fs');

module.exports = {
    // Iterative version of Fibonacci sequence function that starts at 1.
    fibonacci: function(n) {
        var a = 0, b = 1, f = 1;
        var fileName = 'fibonacci-' + n + '-' + Date.now();
        var writeStream = fs.createWriteStream('files/' + fileName, {flags:'a'});
    
        for(var i = 1; i <= n; i++) {
            f = a + b;
            a = b;
            b = f;
            writeStream.write(a.toString() + '\n');
        }
        writeStream.end();
    }
}