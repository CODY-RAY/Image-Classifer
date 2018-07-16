function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img').attr('src', e.target.result)
            $("#train").show()
        };

        reader.readAsDataURL(input.files[0]);
    }
}


$(document).ready(()=>{
    $("#train").hide()

$("#train").on("click",()=>{   
const img = $('#img');

  // Load the model.
  mobilenet.load().then(model => {
    // Classify the image.
    model.classify(img).then(predictions => {
        $("#prodic").show()
        $("#Prediction").text(predictions);
    });
  });
}) 


})