function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img').attr('src', e.target.result)
           
        };

        reader.readAsDataURL(input.files[0]);
    }
}

var model 
mobilenet.load().then(model1 => {
        console.log("trained");
        
    model = model1
    $("#train").show()
    })
$(document).ready(()=>{
    $("#train").hide()
    $("#train").on("click",()=>{   
        model.classify(img).then(predictions => {
            $("#prodic").show()
            console.log(predictions);
            
            $("#Prediction").text(predictions);
        });
    });
    
    
    

})