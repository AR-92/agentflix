function extractInitials(name) {
        var words=''
    if(name){
         words = name.split(' ');
    }

        const initials = [];

        for (let i = 0; i < words.length; i++) {
        if (words[i]) {
                        initials.push(words[i][0].toUpperCase());         }
    }

        return initials.join('');
}

export const extarct=extractInitials