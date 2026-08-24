
const  name="code Bless you";
const luckyNumber=7;

function add (a,b){

    return a + b;
}

function subtract(a,b)
{
    return a-b;
}

// module.exports.addNumbers=add;
// module.exports.subtract=subtract;
// module.exports.name=name;

// This also works the same 
module.exports={
    addNumbers:add,
    subtract:subtract,
    name:name
}

console.log(module);

