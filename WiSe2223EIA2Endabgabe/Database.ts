namespace FireworkSimulation {

    //Interface für die Raketen 
    // Aufbau wie ein JSON Objekt
    export interface Rocket {
        [name: string]: {
            particleAmount: number;
            color: string;
            size: number;
            lifetime: number;
        };
    }


    // url für den Server ->
    let url: string = "https://webuser.hs-furtwangen.de/~pilshenn/Database/index.php/";

    // Funktion um die Daten aus dem Server auszulesen -> gibt Raketen zurück
    export async function handleLoad(): Promise<Rocket[]> {
        //Antwort vom Server 
        //Promise ist vom Typ Rocket[] 
        let response: Response = await fetch(url + "?command=find&collection=dataList");
       // fetch ruft Datenbank auf und gibt eine Antwort zurück

        //Antwort vom Server
        let item: string = await response.text();
        // any, da der Server mehr als nur unsere gespeicherten Daten zurückgeben wird
        //JSON Format in Javascript Objekt umwandelt
        let serverData: any = JSON.parse(item);
         //Array für die Raketen aus dem Server

        let serverRockets: Rocket[] = [];
        //Schleife um die Daten aus dem Server auszulesen
        //
        for (let key in serverData["data"]) {
            // mit den Key selektieren wir die Raketen
            console.log(key);
            // Array mit den Daten der Keys füllen
            serverRockets.push(serverData["data"][key]);
            console.log(serverRockets["data"][key]);
            
        }
        return serverRockets;
    }

    
    // async, da die Funktion asynchron arbeitet und erst nach dem Speichern der Daten weiterläuft
    // Promise<void>, da die Funktion nichts zurückgibt
    // await, da die Funktion auf das Ergebnis des fetch() wartet
    // await, da die Funktion auf das Ergebnis des text() wartet
    // await, da die Funktion auf das Ergebnis des JSON.parse() wartet
    // await, da die Funktion auf das Ergebnis des fetch() wartet
    // await, da die Funktion auf das Ergebnis des text() wartet

    //Rakete speichern
    export async function saveRocket(_rocket: Rocket): Promise<void> {
        //URLSearchParams, um die Daten an die URL anzuhängen
        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "dataList");
        query.set("data", JSON.stringify(_rocket));
        //Javascript Objekt zu einem JSON String umwandeln
        let response: Response = await fetch(url + "?" + query.toString()); // fetch holt Rückmeldung notwendig für Serverkommunikation
         //await wartet auf Repsonse gefüll mit Daten 
        //URL nehmen und Daten anhängen und abschicken
        let responseText: string = await response.text(); // Response wird in Text umgewandelt
        //Fängt den response ab und macht ein text daraus
        if (responseText.includes("success")) {
            //Falls es geklappt hat
            //includes prüft ob success im responseText enthalten ist
            alert("Item hinzugefügt!");
        }
        
        else {
            //Falls es nicht geklappt hat
            alert("Daten konnten nicht gespeichert werden!");
        }
    }
}