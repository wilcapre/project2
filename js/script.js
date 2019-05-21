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

console.log(listItem);

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

  var startIndex = page * perPage - perPage;
  var endIndex = page * perPage;

  for (var i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}

showPage(1, listItem);

/***
    we will create an appendPageLinks function to  generate, append, 
    and add the pagination buttons.
   ***/

function appendPageLinks(list) {
  totalPageNum = Math.ceil(list.length / 10);
  //console.log(totalPage);

  var paginationDiv = document.createElement("div");
  pageDiv.appendChild(paginationDiv);
  paginationDiv.className = "pagination";
  var paginationUl = document.createElement("ul");
  paginationDiv.appendChild(paginationUl);

  console.log(pageDiv);

  /*** This area will create li and a element, also adding href 
 to the page and start with the fisrt page.
 ***/
  for (var i = 0; i < totalPageNum; i++) {
    const a = document.createElement("a");
    const li = document.createElement("li");
    a.href = "#";
    a.textContent = i + 1;
    li.appendChild(a);
    paginationUl.appendChild(li);

    //console.log(a);

    //var totalPage = document.querySelectorAll("paginationLinks"); //"active";
    // console.log(totalPage);

    //var totalPage = document.getElementsByTagName("a");
    //var paragraph = document.getElementsByTagName("div");

    //for (i = 0 ; i < paragraph.length; ++i){
    if (i === 0) {
      a.classList = "active";
    }
    /***
         add the event listener into the pagination links

         ***/
    a.addEventListener("click", event => {
      let totalPageNum = event.target.innerText;

      showPage(totalPageNum, listItem);

      if ((event.target.className = "A"));

      var totalPage = document.querySelectorAll("a");
      

      //The active class name should be removed from all pagination links

      for (let i = 0; i < totalPage.length; i += 1) {
        totalPage[i].classList.remove("active");
      }

      //The active class name should be added to the link that was just clicked.
      //for (let i = 0; i < totalPage; i++) {
      a.className = event.target.textContext;
      event.target.classList.add("active");
      //}

    });
  }

  //console.log("totalPageNum");

  //const activeClassName = {
  // add: eventListener => (event.activeClassName = "active"),
  //remove: page => {
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
  //}
}
//}


appendPageLinks(listItem);

//button.addEventListener("click", () => {
 //li.textContent = inputValue + ":";
//});

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

