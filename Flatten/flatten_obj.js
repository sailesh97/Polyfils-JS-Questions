let user = {
    name: "Vishal",
    address: {
        primary: {
            house: "109",
            street: {
                main: "21",
                cross: "32"
            }
        }
    }
};

function flatten(newKey, obj){
    let newObj = {};
    for(key in obj){
        let newKey2 = newKey + "_" + key;
        if(typeof obj[key] == 'object'){
            const nestedObj = flatten(newKey2, obj[key]);
            newObj = {...newObj, ...nestedObj};
        } else{
            newObj[newKey2] = obj[key];
        }
    }
    return newObj;
}
const flattenedObject = flatten("user", user);

const expectedOp = {
    user_name: "Vishal",
    user_address_primary_house: "109",
    user_address_primary_street_main: "21",
    user_address_primary_street_cross: "32",
};

console.log(flattenedObject);
console.log("Expected Output::::", expectedOp);