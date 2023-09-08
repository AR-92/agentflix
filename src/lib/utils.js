function extractInitials(name) {
    // Split the name into words
    var words=''
    if(name){
         words = name.split(' ');
    }

    // Initialize an array to store initials
    const initials = [];

    // Iterate through the words and extract the first letter of each
    for (let i = 0; i < words.length; i++) {
        if (words[i]) {
            // Check if the word is not empty
            initials.push(words[i][0].toUpperCase()); // Convert to uppercase for consistency
        }
    }

    // Join the initials and return as a string
    return initials.join('');
}

export const extarct=extractInitials