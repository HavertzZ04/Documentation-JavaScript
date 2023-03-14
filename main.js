let fB = function(){
    alert("This is the function B");
}

let fA= function(callback){
    callback();
} 

fA(fB);