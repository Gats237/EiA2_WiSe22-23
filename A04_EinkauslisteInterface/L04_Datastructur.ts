/*
Aufgabe: Aufgabe 3 Einkaufsliste
Name: Henning Pils
Matrikel: 269355
Datum: 27.10.2022
Quellen: 
//Robert Schindler, Yannik König, Jonas Atzenhofer
*/
namespace L04_Datastructur{
    
    let itemNumber: number = 0; 

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        
        let addButton: HTMLButtonElement =<HTMLButtonElement> document.querySelector("button#add");
        addButton.addEventListener("click", itemAdd); 
        

    }
    function itemAdd(): void {
        let formData: FormData = new FormData(document.querySelector("form")!);
        let newItem: FormDataEntryValue = formData.get("newItem")!; 
        let amount: FormDataEntryValue = formData.get("amount")!; 
        let comment: FormDataEntryValue = formData.get("comment")!; 
        let bought: boolean = false; 
        let date: string = "30.02.2222"; 
        itemNumber++;

        let list: HTMLElement = document.getElementById("list")!;

        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.setAttribute("class", "lister"); 
        newDiv.setAttribute("id", "lister" + itemNumber); 

        let newInput: HTMLInputElement = document.createElement("input"); 
        newDiv.appendChild(newInput); 
        newInput.setAttribute("class", "bought"); 
        newInput.setAttribute("id", "bought" + itemNumber); 
        newInput.setAttribute("type", "checkbox");
        newInput.addEventListener("change", itemBought); 

        let divItemData: HTMLDivElement = document.createElement("div");
        newDiv.appendChild(divItemData); 
        divItemData.setAttribute("class", "ItemData");
        divItemData.setAttribute("id", "ItemData" + itemNumber); 

        let newItemField: HTMLElement = document.createElement("p");
        divItemData.appendChild(newItemField);
        newItemField.setAttribute("class", "ItemDataFont");
        newItemField.innerHTML = (newItem as string); 

        let amountField: HTMLElement = document.createElement("p");
        divItemData.appendChild(amountField);
        amountField.setAttribute("class", "ItemDataFont");
        amountField.innerHTML = (amount as string); 

        let commentField: HTMLElement = document.createElement("p");
        divItemData.appendChild(commentField);
        commentField.setAttribute("class", "ItemDataFont");
        commentField.innerHTML = (comment as string); 

        let dateField: HTMLElement = document.createElement("p");
        divItemData.appendChild(dateField);
        dateField.setAttribute("class", "ItemDataFont");
        dateField.innerHTML = (date as string); 

        let editButton: HTMLButtonElement = document.createElement("button");  
        newDiv.appendChild(editButton); 
        editButton.setAttribute("class", "edit");
        editButton.setAttribute("id", "edit" + itemNumber);
        editButton.setAttribute("type", "button");
        editButton.innerHTML = "edit"; 
        editButton.addEventListener("click", editItem);

        let deleteButton: HTMLButtonElement = document.createElement("button");
        newDiv.appendChild(deleteButton); 
        deleteButton.setAttribute("class", "delete");
        deleteButton.setAttribute("id", "delete" + itemNumber);
        deleteButton.setAttribute("type", "button"); 
        deleteButton.innerHTML = "delete"; 
        deleteButton.addEventListener("click", deleteItem); 

        list.appendChild(newDiv);

    }

    function itemBought(_event: Event): void {
        let trigger: string = (_event.target as HTMLInputElement).id;
        let triggerNum: string =  trigger.replace(/\D/g, "");
        let identifyer: number = parseInt(triggerNum);
        
    }

    function editItem(_event: Event): void {
        let trigger: string = (_event.target as HTMLButtonElement).id;
        let triggerNumber: string =  trigger.replace(/\D/g, "");
    }

    function deleteItem(_event: Event): void {
        let trigger: string = (_event.target as HTMLButtonElement).id
        let triggerNum: string = trigger.replace(/\D/g, "");
        let identifier: number = parseInt(triggerNum); 

        let list: HTMLElement = document.getElementById("list")!;
        let remIt: HTMLElement = document.getElementById("lister" + identifier)!;
        list.removeChild(remIt); 
    }

}