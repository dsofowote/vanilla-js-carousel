//Idea: Carousel with selection  
var menuButton = document.getElementsByTagName("menuItem");
var buttonArray = document.querySelectorAll('.menuItem');

buttonArray.forEach(function (menuButton) {
    menuButton.addEventListener("click", function () {
        //Grab the number of total carousel items
        var itemCount = document.getElementsByClassName("so-item col-md-4").length;

        //Add class that marks this as present
        var currentItem = document.getElementById("presentItemC");

        //Grab the width of present item
        var itemWidth = currentItem.clientWidth;

        //Initialise new carousel item
        var newItem = currentItem.cloneNode(true);
        var clickedSrc = this.getAttribute("src");
        var clickedAlt = this.getAttribute("alt");
        var newItemSrc = newItem.setAttribute("src", clickedSrc);
        var newItemAlt = newItem.setAttribute("alt", clickedAlt);
        var newItemOp = newItem.setAttribute("style", "opacity:0");
        var currentItemSrc = currentItem.getAttribute("src");

        if (clickedSrc !== currentItemSrc) {
            //Create new item when seleceted in options   
            document.getElementById("presentItemWrapper").appendChild(newItem);
            setTimeout(function () {
                var sel = document.getElementById("presentItemC");
                newItem.setAttribute("style", "opacity:1");

                sel.remove(0);
            }, 200);

            setTimeout(function () {
                newItem.setAttribute("style", "opacity:1");
            }, 1200);
        }
        clearInterval(tce);
        tce = setInterval(timedCarousel, 5000);
    });
});

function timedCarousel() {
    //Grab the number of total carousel items
    var itemCount = document.getElementsByClassName("menuItem").length

    //Get current shown item id and number, then parse this
    var currentCItem = document.getElementById("presentItemC");
    var currentCItemAlt = document.getElementById("presentItemC").getAttribute('alt');
    var currentItemNo = parseInt(currentCItemAlt);

    //Check if carousel has iterated through all items, if not get next item's number
        if (currentItemNo == itemCount) {
            newAlt = 1;
        } else {
            var newAlt = currentItemNo + 1;
        }

    //switch logix
    if (newAlt !== undefined) {
        //new item logic
        var newItemQuery = document.querySelector("img[alt='" + newAlt + "']");
        var newItem = newItemQuery.cloneNode(true);
        var newItemId = newItem.setAttribute("id", "presentItemC");
        var newItemClasses = newItem.classList.add("transition", "p-set");
        var newItemClasses = newItem.classList.remove("menuItem");
        var newItemOp = newItem.setAttribute("style", "opacity:0");
        var currentItemSrc = newItemQuery.getAttribute("src");
    }

    document.getElementById("presentItemWrapper").appendChild(newItem);
    setTimeout(function () {
        newItem.setAttribute("style", "opacity:1");
        currentCItem.remove(0);
    }, 200);

    setTimeout(function () {
        newItem.setAttribute("style", "opacity:1");
    }, 1200);
};

//Fire timed carousel function
var tce = setInterval(timedCarousel, 5500);

var overlayArea = document.getElementsByClassName("so-menu-item");
var overlayArray = document.querySelectorAll('.so-menu-item');

overlayArray.forEach(function (overlayArea) {

    overlayArea.addEventListener("mouseenter", function () {
       this.classList.add("displayed");
    });

    overlayArea.addEventListener("mouseleave", function () {
        this.classList.remove("displayed");
    });
});
