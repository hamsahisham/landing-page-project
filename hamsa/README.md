# Landing Page Project
Please find the project checklist:-

- [X] first thing I uploaded the starter code.
- [X] I added a new section in the html file
- [X] then I added the javascript file to the html file.
- [X] started working on the js file
- [X] the first thing I did was to create two different variables the first was the `navlist` variable and i used the `getelemntbyid` and store in it the ul navbar__list. then the second variable i did was the sections and I used the `queryselectorall` and added the section and I will turn it to an array.
- [X] then i wanted to create a function called `createlistitem` and then i will create a for loop to select each section of the section then I want for each section I have a new list item to be created then I will add the inner html to the list item and then i will create a link for the html and add in it all the different id for each section. the data-nav and the menu__link . then I will put the list item in the ul using the `appendchild`.
- [X] second thing is creating the active class for each section. so when i scroll through the sections there is a border around the current active class. I will use the `windowscroll` method. first i will create a function for it. i will use the querySelectorAll to get all the sections then i will use the for each method then I will give it a function and a parameter active then I will put a condition. I will use the getBoundingClientRect method which will basically tell me if the user has his screen on the section or not. so it will add an active class around the active section.
- [X] third thing i want the screen to scroll through the appropriate section when i click on it in the nav bar. I will use the arrow method. I will use as well the addEventListener . i will select the ul give it an addEventListener so when i click on it there will be a function and i will give it a parameter for the sections which is (toSec). I will prevent the default. then I will create the condition. which is if the list item is the target with the `datanav` then it will go to the getElementById which is the sections. so when I scroll on any list item it will scroll to it. then i will use `scrollintoview` to make the transition smooth. then I added a setTImeOut. and that is it for the navbar.
- [X] I changed some colors in the css file for the nav bar and the active class.
- [X] then I made sure it works well on a phone screen using the developer tools.
- [X] that is the full project