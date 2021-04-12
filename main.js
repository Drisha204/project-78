var image_array = []
Image_array=[ "20170811_074242.jpg", "20170811_074245.jpg"]

function nextslide()
{
    var image_array = [];
    for (var i=1;i<=4;i++)
 {
 var Image=Image_array.getElementById("Image"+i).Image;
 console.log(Image);
 Image_array.push(Image);
 

 }
}