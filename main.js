var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
           
//add family member names
var names = ["Fmaily Book","grandpa", "Mohan Singh", "Rohan", "Priya", "Sonal"];
          
var i = 0;
function update()
{
    
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage =images[i]; //assign image
     var updatedName  =names[i]; //assign name
     document.getElementById("family_member_image").src =updatedImage; //assign variable
     document.getElementById("family_member_name").innerHTML =updatedName ; 
i++;
}
