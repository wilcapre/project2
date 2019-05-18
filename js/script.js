// Remember to delete the comments that came with this file, and replace them with your own code comments.
/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   This are the variables that are stored and will be needed to 
   reference and/or manipulate for this program. 
   
***/

const listItem = document.querySelectorAll(".student-item");
const perPage = 10;
var pageDiv = document.querySelector(".page");


console.log (listItem);

/***
Class.addEventListener ('click')() = > {
p.textContext = Input.value + ';';
}
***/



/*** 
   Create a showPage function to hide all items  in the
   list except for the ten that needs to be shown.
***/

function showPage(page, list) {
   console.log("function is running");

  var startIndex = (page * perPage) - perPage;
  var endIndex = page * perPage;

  for(var i=0; i < list.length; i++) {

      if (i >= startIndex && i < endIndex) {

       list[i].style.display = '';

      } else{
       list[i].style.display = 'none'; 

      }
     }
   };

  //showPage(1, listItem);

   /***
    we will create an appendPageLinks function to  generate, append, 
    and add the pagination buttons.
   ***/
  

   function appendPageLinks (list) {
      totalPageNum = Math.ceil(list.length / 10);
      //console.log(totalPage);

      var paginationDiv = document.createElement("div");
      pageDiv.appendChild(paginationDiv);
      var paginationUl = document.createElement("ul");
      paginationDiv.appendChild(paginationUl);

      paginationDiv.className = "pagination";
     
      console.log(pageDiv);


/*** This area will create li and a element, also adding href 
 to the page and start with the fisrt page.
 ***/
      for (var i = 0; i < totalPageNum ; i++) {
        const a = document.createElement("a"); 
        const li = document.createElement("li"); 
        a.href = "#"; 
        a.textContent = i + 1;  
        li.appendChild = document.createElement ("a");
        paginationUl.appendChild(li); 

         //console.log(a);

        //var totalPage = document.querySelectorAll("paginationLinks"); //"active";
       // console.log(totalPage);
         var totalPage = document.getElementsByTagName("a");

       if ( i === 0 ){
        pagination.classList = ("active");
       }
        /***
         add the event listener into the pagination links
         ***/
        totalPage[i].addEventListener("click", (event) => {
         let totalPageNum = event.target.innerText;

         showPage(i,listItem);

         if (event.target.className= "A");

        var totalPage = document.querySelectorAll("paginationLinks");

         for (let i=0; i < totalPage; i++) { 
         totalPageNum.className = event.target.textContext;
         event.target.classList.add("active");

         for (let i = 0; i < totalPage.length; i += 1) {ß
         appendPageLinks[i].classList.remove("active");
         //event.target.classList.add("active");
        }
         }
      });
      }
     
         console.log("totalPageNum");
      
      const activeClassName = {
         add: (eventListener) => event.activeClassName = "active",
         remove: (page) => {
         
      //for (var i = 0; i < a.length; i++) {
        // let active = document.querySelectorAll("paginationLinks");
         //active[i].activeClassName='';

      
         //if (pageDiv.style.display == "none") {
         
         
         //} else {
           // pageDiv.style.display = "block"; 
           // addItemPage.addEventListener ("click");
             //  listLi = document.createElement ("li");
               //liTextContext = addItemInput.value;

              // for (var i = 0; i < a.length; i++) {
               
            
            //}

            
          //  function totalPageNum() {
             //  return Math.ceil(list.length / totalPageNumber);
            //for (var i = 0; i < PerPage; i++) {
              //const li = document.getElement("li");
               //const a = document.getElement("a");
              // a.textContext = i;
               //li.appendChild= document.createElement ("a");
              // ul.appendChild(li); 

               //console.log(totalPageNum);
           } 
         }       
      };

         
         appendPageLinks(listItem);
         
      

/**

Add the active class name to the first pagination link initially.
Add a “click” event listener to each A element. A loop can be helpful here.
When a pagination link is clicked:
The active class name should be removed from all pagination links. A loop can be helpful for this step.
The active class name should be added to the link that was just clicked. The target property of the event object should be useful here.
The function to show a page should be called, passing in as arguments, the global variable for the list items, and the page number that should be shown. The text content of the A element that was just clicked can be helpful here.

      ***/
     /** 
     for (var i = 0; i < a.length; i++) {
      
      if (listDiv.style.display == 'none') {
      
      
      } else {
         listDiv.style.display = 'block'; 
         addItemClass.addEventListener ('click');
            listLi = document.createElement ('li');
            liTextContext = addItemInput.value;
         
         }
         
         for (var i = 0; i < PerPage; i++) {
            const li = document.getElement("li");
            const a = document.getElement("a");
            li.appendChild(a);
            ul.appendChild(li);
         
          }
         }

      };
      function getNumberOfPages() {
         return Math.ceil(list.length / numberPerPage);
     }

   */

/*** 
   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

/***
function showPage ( list, page = 1 ) {
   const showPage = 10;
   const list = hide ();
   const startINdex = (page) => page ===1 ? 0 : ( page - 1 ) * showPage;
   const first = startINdex (page);
   const last = page * showPage;
   list.next (first,end).each(function(i,li) {
      li = showIn (54);
   }
}; 
   for (let i=0; i < list.length; 1++){
      Inside the loop, display any list item with an index that is greater than or equal to the start index variable and less than the end index variable.

   if ( i >= page * 10 && i <= ((page * 10) + (9))) {
      list[i].style.display = ' ';

} else {
   list[i].style.display = 'none'; 

***/

/***
function appendPageLinks () {
totalPageNum = Math.ceil(list.length / 10);

const div = document.getElement("div");
      div.className = "pagination";

const ul = document.querrySelector('ul');

if (listDiv.style.display == 'none') {

} else {
   listDiv.style.display = 'block'; 
  }

addItemClass.addEventListener ('click') () {
   list li = document.createElement (li);
   li textContext = addItemInput.value
}

for (let i = 0; i < PerPage; i++) {
   const li = document.getElement("li");
   const a = document.getElement("a");
   li.appendChild(a);
   ul.appendChild(li)

 }
}
***/

/***
const addActiveClass = document.querrySelector('class.addActiveClass');

const removeActiveClass = document.querrySelector('class.removeActiveClass');


appendPageList (list);
***/
