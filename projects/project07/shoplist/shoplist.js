/* file: shoplist.js
Joshua Saunders
CS 150
Project 7 - Dynamic Shop List

Create a folder called shoplist. In the html file create a form that takes
shopping list items.  Use JavaScript to add the items in an unordered list on
the HTML file
*/

// Shoplist object to hold the list of items in the shopping list
let shoplist = {
    isInited: false,
    items: [],
    addItem: function (item) {
        items.append(item);
    },
    init: function() {
        isInited = true;
        return isInited;
    },
    itemsToList: function () {
        let itemsList = "<ul id='items'>";
        for (let i = 0; i < items.length; i++) {
            itemsList += "<li>" + items[0] + "</li>";
        }
        itemsList += "</ul>";

        return itemsList;
    }
}
