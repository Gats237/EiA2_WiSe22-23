"use strict";
/*
Aufgabe: Aufgabe 6Einkaufsliste
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen:
// insperiert von Yannik König!!,
zusammen gearbeitet Jonas Atzenhofer.Robert Schindler
*/
var ShoppingList_06;
(function (ShoppingList_06) {
    let itemNumber = 0;
    let elementCounter = 0;
    let date = new Date();
    let dateNoTime = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    let url = "https://webuser.hs-furtwangen.de/~pilshenn/Database/";
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        let addButton = document.querySelector("button#add");
        addButton.addEventListener("click", itemAdd);
        let response = await fetch(url + "?command=find&collection=dataList");
        let item = await response.text();
        let data = JSON.parse(item);
        generateExistingItem(data);
    }
    function generateExistingItem(_data) {
        let keys = Object.keys(_data.data);
        for (let index = 0; index < keys.length; index++) {
            let item = _data.data[keys[index]];
            let text = Object.values(item);
            let newItem = text[0];
            let amount = parseInt(text[1]);
            let comment = text[2];
            let list = document.getElementById("list");
            let newDiv = document.createElement("div");
            let newInput = document.createElement("input");
            let divItemData = document.createElement("div");
            createInput(newInput, newDiv);
            createDiv(newDiv);
            createItemDiv(divItemData, newDiv);
            addElement(divItemData, newItem.toString());
            addElement(divItemData, amount.toString());
            addElement(divItemData, comment.toString());
            addElement(divItemData, dateNoTime);
            addButton(newDiv, "edit");
            addButton(newDiv, "delete");
            list.appendChild(newDiv);
            itemNumber++;
        }
    }
    async function itemAdd() {
        let formData = new FormData(document.querySelector("form"));
        let newItem = formData.get("newItem");
        let amount = formData.get("amount");
        let comment = formData.get("comment");
        let list = document.getElementById("list");
        let newDiv = document.createElement("div");
        let newInput = document.createElement("input");
        let divItemData = document.createElement("div");
        itemNumber++;
        createInput(newInput, newDiv);
        createDiv(newDiv);
        createItemDiv(divItemData, newDiv);
        addElement(divItemData, newItem.toString());
        addElement(divItemData, amount.toString());
        addElement(divItemData, comment.toString());
        addElement(divItemData, dateNoTime);
        addButton(newDiv, "edit");
        addButton(newDiv, "delete");
        list.appendChild(newDiv);
        sendData(formData);
    }
    async function sendData(_formData) {
        let json = {};
        for (let key of _formData.keys())
            if (!json[key]) {
                let values = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "dataList");
        query.set("data", JSON.stringify(json));
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        console.log();
        if (responseText.includes("success")) {
            alert("Item added!");
        }
        else {
            alert("Error! Try again!");
        }
    }
    function addElement(_parent, _content) {
        let newItemField = document.createElement("p");
        _parent.appendChild(newItemField);
        newItemField.setAttribute("class", "ItemDataFont");
        if (_content) {
            newItemField.innerHTML = _content;
        }
    }
    function addButton(_parent, _identify) {
        let newButton = document.createElement("button");
        _parent.appendChild(newButton);
        newButton.setAttribute("class", _identify);
        newButton.setAttribute("id", _identify + itemNumber);
        newButton.setAttribute("type", "button");
        newButton.innerHTML = _identify;
        switch (_identify) {
            case "edit":
                newButton.addEventListener("click", editItem);
                break;
            case "delete":
                newButton.addEventListener("click", deleteItem);
            default:
                break;
        }
    }
    function createDiv(_element) {
        _element.setAttribute("class", "lister");
        _element.setAttribute("id", "lister" + itemNumber);
    }
    function createInput(_element, _parent) {
        _parent.appendChild(_element);
        _element.setAttribute("class", "bought");
        _element.setAttribute("id", "bought" + itemNumber);
        _element.setAttribute("type", "checkbox");
        _element.addEventListener("change", itemBought);
    }
    function createItemDiv(_element, _parent) {
        _parent.appendChild(_element);
        _element.setAttribute("class", "ItemData");
        _element.setAttribute("id", "ItemData" + itemNumber);
    }
    ;
    function itemBought(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifier = parseInt(triggerNum);
        //to be continued
    }
    function editItem(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifier = parseInt(triggerNum);
        let values = [];
        let buttonEdit = document.getElementById("edit" + identifier);
        let listEdit = document.getElementById("ItemData" + identifier);
        buttonEdit.removeEventListener("click", editItem);
        buttonEdit.addEventListener("click", saveChanges);
        buttonEdit.innerHTML = "save";
        for (let index = 0; index < 4; index++) {
            let item = listEdit.querySelector("p");
            let value = item.innerHTML;
            values.push(value);
            listEdit.removeChild(item);
        }
        createEditInputs(listEdit, values);
    }
    function createEditInputs(_listEdit, _values) {
        _listEdit.setAttribute("class", "editfield");
        _listEdit.removeAttribute("border-style");
        let form = document.createElement("form");
        _listEdit.appendChild(form);
        let formData = new FormData;
        let inputField0 = document.createElement("input");
        inputField0.setAttribute("type", "text");
        inputField0.setAttribute("name", "item");
        inputField0.setAttribute("value", _values[0]);
        form.appendChild(inputField0);
        let inputField1 = document.createElement("input");
        inputField1.setAttribute("type", "number");
        inputField1.setAttribute("name", "amount");
        inputField1.setAttribute("value", _values[1]);
        form.appendChild(inputField1);
        let inputField2 = document.createElement("input");
        inputField2.setAttribute("name", "comment");
        inputField2.setAttribute("value", _values[2]);
        form.appendChild(inputField2);
        let inputField3 = document.createElement("input");
        inputField3.setAttribute("type", "text");
        inputField3.setAttribute("name", "date");
        inputField3.setAttribute("value", _values[3]);
        form.appendChild(inputField3);
    }
    async function saveChanges(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifier = parseInt(triggerNum);
        let buttonEdit = document.getElementById("edit" + identifier);
        let listEdit = document.getElementById("ItemData" + identifier);
        let formData = new FormData(listEdit.querySelector("form"));
        let form = listEdit.querySelector("form");
        let item = formData.get("item");
        let amount = formData.get("amount");
        let comment = formData.get("comment");
        let date = formData.get("date");
        listEdit.removeChild(form);
        listEdit.removeAttribute("class");
        listEdit.setAttribute("class", "ItemData");
        buttonEdit.removeEventListener("click", saveChanges);
        buttonEdit.addEventListener("click", editItem);
        buttonEdit.innerHTML = "edit";
        addElement(listEdit, item.toString());
        addElement(listEdit, amount.toString());
        addElement(listEdit, comment.toString());
        addElement(listEdit, date.toString());
        let json = {};
        for (let key of formData.keys())
            if (!json[key]) {
                let values = formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let response0 = await fetch(url + "?command=find&collection=dataList");
        let itemResponse = await response0.text();
        let data = JSON.parse(itemResponse);
        let keys = Object.keys(data.data);
        let id = keys[identifier];
        let query = new URLSearchParams();
        query.set("command", "update");
        query.set("collection", "dataList");
        query.set("id", id);
        query.set("data", JSON.stringify(json));
        let response1 = await fetch(url + "?" + query.toString());
        let responseText = await response1.text();
        console.log(responseText);
        if (responseText.includes("success")) {
            alert("Item edited!");
        }
        else {
            alert("Error! Try again!");
        }
    }
    async function deleteItem(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifier = parseInt(triggerNum);
        let list = document.getElementById("list");
        let remIt = document.getElementById("lister" + identifier);
        list.removeChild(remIt);
        let response0 = await fetch(url + "?command=find&collection=dataList");
        let item = await response0.text();
        let data = JSON.parse(item);
        let keys = Object.keys(data.data);
        console.log(keys);
        console.log(identifier);
        let id = keys[identifier];
        let query = new URLSearchParams();
        query.set("command", "delete");
        query.set("collection", "dataList");
        query.set("id", id);
        let response1 = await fetch(url + "?" + query.toString());
        let responseText = await response1.text();
        if (responseText.includes("success")) {
            alert("Item deleted!");
        }
        else {
            alert("Error! Try again!");
        }
    }
})(ShoppingList_06 || (ShoppingList_06 = {}));
//# sourceMappingURL=A06_Datastructur.js.map