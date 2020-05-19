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
        this.items.push(item);
    },
    init: function() {
        this.isInited = true;
        return isInited;
    },
    itemsToList: function () {
        let itemsList = "<ul id='shoplistItems'>";
        for (let i = 0; i < this.items.length; i++) {
            itemsList += "<li>" + this.items[i] + "</li>";
        }
        itemsList += "</ul>";

        return itemsList;
    }
}

// Initialize the shoplist
function initShoppingList(list) {
    return list.init().isInited;
}

// Creates a node with text in it
function createTextNode(elemType, text) {
    let newElem = document.createElement(elemType);
    let textNode = document.createTextNode(text);
    newElem.appendChild(textNode);
    return newElem;
}

// Initialize the display of the shoplist
function initShoplistDisplay(parentElem) {
    let newH2 = createTextNode("h2", "Shopping List Items");
    let newDiv = createTextNode("div", "");
    newDiv.setAttribute("id", "itemsList");
    parentElem.appendChild(newH2);
    parentElem.appendChild(newDiv);

    return parentElem;
}
