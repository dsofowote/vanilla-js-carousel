//document.body.scrollTop
//Idea: Carousel with selection  
window.customVar = 0;
//console.log(window.customVar);


var menuButton = document.getElementsByClassName("menuItem");
//console.log(menuButton.length);

var buttonArray = document.querySelectorAll('.menuItem');

buttonArray.forEach(function (menuButton) {
    menuButton.addEventListener("click", function () {
        //console.log(this.getAttribute("src"));
        // for (var i = -1; i < itemCount; i++) {
        //     document.getElementById("presentItem").classList.add("itemNo-" + window.customVar + "");
        // }

        //Grab the number of total carousel items
        var itemCount = document.getElementsByClassName("so-item col-md-4").length;
        //console.log(itemCount);

        //Add class that marks this as present
        var currentItem = document.getElementById("presentItemC");
        //console.log(currentItem);

        //Grab the width of present item
        var itemWidth = currentItem.clientWidth;
        //console.log(itemWidth);

        var newItem = currentItem.cloneNode(true);
        var clickedSrc = this.getAttribute("src");
        var clickedAlt = this.getAttribute("alt");
        var newItemSrc = newItem.setAttribute("src", clickedSrc);
        var newItemAlt = newItem.setAttribute("alt", clickedAlt);
        var newItemOp = newItem.setAttribute("style", "opacity:0");
        var currentItemSrc = currentItem.getAttribute("src");

        //console.log(newItemSrc, currentItemSrc);
        if (clickedSrc !== currentItemSrc) {
            //Create new item when seleceted in options   
            //console.log(newItem);

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
    var itemCount = document.getElementsByClassName("menuItem").length
    var currentCItem = document.getElementById("presentItemC");
    var currentCItemAlt = document.getElementById("presentItemC").getAttribute('alt');
    var currentItemNo = parseInt(currentCItemAlt);

    console.log("switch image", itemCount, currentCItem);


        if (currentItemNo == itemCount) {
            newAlt = 1;
        } else {
            var newAlt = currentItemNo + 1;
            console.log(newAlt);
        }

    console.log(newAlt);

    //switch logix
    if (newAlt !== undefined) {
        var newItemQuery = document.querySelector("img[alt='" + newAlt + "']");
        console.log(newItemQuery);
        var newItem = newItemQuery.cloneNode(true);
        var newItemId = newItem.setAttribute("id", "presentItemC");
        var newItemClasses = newItem.classList.add("transition", "p-set");
        var newItemClasses = newItem.classList.remove("menuItem");
        var newItemOp = newItem.setAttribute("style", "opacity:0");
        var currentItemSrc = newItemQuery.getAttribute("src");
    } else {
        //set new alt to 0
        var newItemQuery = document.querySelector("img[alt='1']");
        console.log(newItemQuery);
        var newItem = newItemQuery.cloneNode(true);
        var newItemClasses = newItem.classList.remove("menuItem");
        newItemOp = newItem.setAttribute("style", "opacity:0");
        var currentItemSrc = newItemQuery.getAttribute("src");
        i = 0;
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

var tce = setInterval(timedCarousel, 5000);

//find boostrap number for cols - number of columns 12/noOfColumns
////var columns = "col-md-" + colNo + "";