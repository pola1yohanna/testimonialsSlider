var id;
var profilesArray;
function intialize()
{
  id=0;
  profilesArray = [{description:"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
  name:"Tanya Sinclair",
  title:"UX Engineer",
   image:"D:/FirstProject/testimonialsSlider/images/image-tanya.jpg"},
   {description:"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
   name:"John Tarkpor",
   title:"Junior Front-end Developer",
   image:"D:/FirstProject/testimonialsSlider/images/image-john.jpg"}]
}
function changeProfile(clickedId)
{
  if(clickedId=="preButton")
    if (id==0)
    {;}
    else {
      id--;
    }

  else if (clickedId=="nextButton")
  if (id==1)
    ;
  else {
    id++;
  }
    
console.log(id);
document.getElementById("prief").innerHTML=profilesArray[id].description;
document.getElementById("name").innerHTML=profilesArray[id].name;
document.getElementById("title").innerHTML=profilesArray[id].title;
document.getElementById("image").src=profilesArray[id].image;
}
