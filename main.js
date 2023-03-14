let a = function () {
    return "Tradicional one";
};
  
let b = () => {
    return "Arrow one.";
};

const c = () => "Arrow one"; // 0 parameter: return "Arrow one"
const d = (e) => e + 1; // 1 parameter: Return the value of  e + 1
const e = (a, b) => a + b; // 2 parameter: Return the value of a + b