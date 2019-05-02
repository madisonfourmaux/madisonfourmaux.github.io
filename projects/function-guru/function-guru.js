//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {

    /*
    
    DECLARE an array
    
    ITERATE through the object?
    
    PUSH object values into declared array
    
    RETURN declared array?
    
    */

    var arr = [];

    for (var key in object) {
        arr.push(object[key]);
    }

    return arr;

}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

    /*
    
    DECLARE an array
    
    ITERATE through an object's keys
    
    PUSH object keys into the array
    
    RETURN object keys in a string, separated by " "
    
    */

    var arr = [];

    for (var key in object) {
        arr.push(key);
    }

    arr = arr.join(" ");
    return arr;

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {

    /*
    
    DECLARE an array
    
    ITERATE through an object's values
    
    IF the object key is a string....
    PUSH object keys into the array
    
    RETURN object keys in a string, separated by " "
    
    */

    var arr = [];

    for (var key in object) {
        if (typeof object[key] === "string") {
            arr.push(object[key]);
        }
    }

    arr = arr.join(" ");
    return arr;

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {

    /*
    
    ITERATE through a collection?
    
    IF collection is an array, RETURN "array"
    
    IF collection is an object, RETURN "object"
    
    */

    if (Array.isArray(collection)) {
        return "array";
    }
    if (typeof collection === "object" || Array.isArray(collection) || collection instanceof Date || collection === null) {
        return "object";
    }

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {

    let arr = string.split(" ");
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    
    arr = arr.join(" ");
    return arr;

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    return "Welcome " + capitalizeWord(object.name) + "!";
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
    if (Array.isArray(object.noises) && object.noises.length > 0) {
        return object.noises.join(" ");
    } else {
        return "there are no noises";
    }
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    let str = string.split(' ');
    for (var i = 0; i < str.length; i++) {
        if (str[i] === word) {
            return true;
        }
    }
    
    return false;
    
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    
    object.friends.push(name);
    return object;
    
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    if (object.friends) {
        for (var i = 0; i < object.friends.length; i++) {
            if (name === object.friends[i]) {
                return true;
            } 
        }
    }
    return false; 
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
    object[key] = value;
    return object;
    
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
    for (var i = 0; i < array.length; i++) {
        for (var key in object) {
            if (array[i] === key) {
                delete object[key];
            }
        }
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    let arr = [];
    
    for (var i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) === -1) {
            arr.push(array[i]);
        }
    }
    
    return arr;
    
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}