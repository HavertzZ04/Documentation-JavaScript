father = {
    a: function () {
      console.log(this);
    },
    b: () => {
      console.log(this);
    },
  };
  
  father.a(); // father
  father.b(); // Window