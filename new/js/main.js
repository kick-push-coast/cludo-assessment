var search_narrow = document.querySelector(".search-narrow");
var search_all = document.querySelector(".search-all");
var search_cats = document.querySelectorAll(".search-category");

search_narrow.addEventListener("click", function(e) {

      if(!e.target) {
         return;
      }
      else {
         var target = targetSet(e.target);
         catSet(target);
      }

});

// Set target to entire category node if children clicked
function targetSet(target) {
   if(target.matches(".search-category label, .search-all label")) {
      return target.parentNode;
   }
   else {
      return target;
   }
}

// Select/Deselect categories based on click target
function catSet(target) {
   if (target.matches(".search-category")) {

      search_all.classList.remove("cat-selected");
      search_all.children[1].checked = false;

      if (target.classList.contains("cat-selected")) {
         target.classList.remove("cat-selected");
         checkDeselect();
         target.children[1].checked = false;
      }
      else {
         target.classList.add("cat-selected");
         target.children[1].checked = true;
      }

   }

   else if (target.matches(".search-all")) {

      target.classList.add("cat-selected");
      target.children[1].checked = true;

      for (var i = 0; i < search_cats.length; i++) {
         search_cats[i].classList.remove("cat-selected");
         search_cats[i].children[1].checked = false;
      }
   }
}

// Select "All" if all categories deselcted
function checkDeselect() {
   for (var i = 0; i < search_cats.length; i++) {
      if(search_cats[i].classList.contains("cat-selected")) {
         return false;
      }
   }
   search_all.classList.add("cat-selected");
   search_all.children[1].checked = true;
   return true;
}
