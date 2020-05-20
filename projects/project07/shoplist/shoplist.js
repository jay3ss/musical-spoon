/* file: shoplist.js
Joshua Saunders
CS 150
Project 7 - Dynamic Shop List

Create a folder called shoplist. In the html file create a form that takes
shopping list items.  Use JavaScript to add the items in an unordered list on
the HTML file
*/

// Shoplist object to hold the list of items in the shopping list
//
// Parameters
// isInited: determines if the shoplist has been initiated or not
// items: the array to hold the shoplist items
// numItems: the number of items in the shoplist
//
// Methods
// addItem: adds an item to the shoplist
// init: initiates the shoplist
// back: returns the item at the back of the shoplist
// front: returns the item at the beginning of the shoplist
// getItem: returns an item from a specified index (0 <= item < items.length)
// removeItem: removes an item from the shoplist at a specified index
//  (0 <= item < items.length)
let shoplist = {
    isInited: false,
    items: [],
    numItems: 0,
    addItem: function (item) {
        this.items.push(item);
        this.numItems++;
    },
    init: function () {
        this.isInited = true;
        return this.isInited;
    },
    back: function () {
        return this.items[this.items.length - 1];
    },
    front: function () {
        return this.items[0];
    },
    getItem: function(itemNum) {
        // enforce the precondition that (0 <= item < itemNum.length)
        if (itemNum < this.items.length && itemNum >= 0) {
            return this.items[itemNum];
        } else {
            return undefined;
        }
    },
    removeItem: function(itemNum) {
        // enforce the precondition that (0 <= item < itemNum.length)
        if (itemNum < this.items.length && itemNum >= 0) {
            this.numItems--;
            return this.items.splice(itemNum, 1)[0];
        } else {
            return undefined;
        }
    }
}

// The HTML interface to the shoplist object
//
// Parameters
// list: the shoplist object
// parent: the parent HTML element
// ul: the unordered list in which the shoplist is displayed
//
// Methods
// addItem: adds an item to the shoplist and displays it
// createHTML: creates the HTML necessary to display the shoplist and appends
//  it to the parent HTML element
// createShoplistElem: creates the li element to display the shoplist item
// createDeleteDiv: creates the div element to remove and delete shoplist item
// initDisplay: initializes the display and shoplist
// isInited: determines if the shoplist has been initiated
// removeItem: removes and deletes a shoplist item
let shoplistHTML = {
    list: shoplist,
    parent: undefined,
    ul: undefined,
    addItem: function(item) {
        // if the ul element exists, remove it so that it can be recreated
        if (this.ul !== undefined) {
            this.ul.remove();
        }
        this.list.addItem(item);
        this.createHTML();
        this.parent.appendChild(this.ul);
    },
    createHTML: function () {
        // create the ul element which holds the shoplist items
        this.ul = document.createElement("ul");
        this.ul.setAttribute("id", "shoplistItems");

        // populate the ul element with shoplist items and the means to remove
        // them
        for (let i = 0; i < this.list.numItems; i++) {
            let liElem = this.createShoplistElem(this.list.items[i]);
            let delDiv = this.createDeleteDiv(i);

            liElem.appendChild(delDiv);
            this.ul.appendChild(liElem);
        }
    },
    createShoplistElem: function(text) {
        let liElem = createTextNode("li", text);
        liElem.setAttribute("class", "shoplistItem");

        return liElem;
    },
    createDeleteDiv: function (itemNum) {
        let delDiv = createTextNode("div", "X");
        delDiv.setAttribute("class", "deleteItem");
        // set the data attribute item-number to the shoplist item's number
        // so that it will be possible to delete it, if necessary
        delDiv.setAttribute("data-item-number", itemNum);
        delDiv.setAttribute("title", "Delete this item?");
        // bind "this" so that we have access to the this object of the
        // shoplistHTML object. ref:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
        delDiv.addEventListener("click", this.removeItem.bind(this));

        return delDiv;
    },
    initDisplay: function (parentElem) {
        if (!this.list.isInited) {
            this.list.init();
            this.parent = parentElem;
            let newH2 = createTextNode("h2", "Shopping List Items");
            parentElem.appendChild(newH2);
        }

        return parentElem;
    },
    isInited: function () {
        return this.list.isInited;
    },
    removeItem: function(event) {
        // remove the ul element so that it can be rebuilt
        this.ul.remove();
        let targetElem = event.target;
        let index = Number(targetElem.dataset.itemNumber);
        let removedItem = this.list.removeItem(index);
        this.createHTML();
        // don't forget to append the ul element to the parent element
        this.parent.appendChild(this.ul);

        return true;
    }
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
    parentElem.appendChild(newH2);

    return parentElem;
}

// Add item callback
function addItemCallback() {
    initShoplistDisplay();
    let inputElem = document.querySelector("#item");
    let item = inputElem.value;
    shoplistHTML.addItem(item);
}

// Init shoplistHTML display
function initShoplistDisplay() {
    if (!shoplistHTML.isInited()) {
        let shoplistElem = document.querySelector("#shoplist");
        shoplistHTML.initDisplay(shoplistElem);
    }
}

// Main function that attaches an event listener to the "Add Item" button
function main() {
    let addButton = document.querySelector("#addItemButton");
    addButton.addEventListener("click", addItemCallback);
}

main();
