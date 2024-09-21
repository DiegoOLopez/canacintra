const bcrypt = require('bcrypt')

async function verifyPassword() {
    const myPassword = 'minevera12';
    const hash = '$2b$10$oxKIsZVngyBoyPORPkHb5ec7FF.d0lWu6qZ.0jo831Gvr80NPZB/y';
    const isMatch = await bcrypt.compare(myPassword, hash);    
    console.log(isMatch)
}

verifyPassword();