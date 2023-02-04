window.addEventListener("load", (event)=>{
   var empForm = window.document.getElementById("empForm");
    empForm.addEventListener("submit",(e)=>{
        e.preventDefault();      
        var formInputElements = empForm.elements;
        for (var i = 0; i < formInputElements.length-1; i++) {
        var input = formInputElements[i];
        console.log(input.id + ": " + input.value);
        }
    });
});
