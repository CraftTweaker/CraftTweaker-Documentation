# Arrays

Ein Array ist eine Liste, die mehrere Elemente der gleichen Art enthalten.

## Ein Array erstellen

Ein Array wird mithilfe von eckigen Klammern erstellt, also mit ```[``` und ```]```.

    //Ein Array mit "Hello" und "World"
    val stringArray = ["Hello", "World"] as string[];
    
    //Array mit den Zahlen 1-3
    val intArray = [1,2,3] as int[];
    

Falls du dich jetzt wunderst, ob du diese Klammern schon einmal gesehen hast, das hast du. Erinnerst du dich an ```recipes.add(out,[[],[],[]]);```? Dies nutzt drei Arrays mit jeweils bis zu drei Einträgen, um ein Crafting Rezept zu definieren.

## Arrays casten

Vielleicht hast du gemerkt, dass hinter den Arrays oben immer ein `as` stand.  
Warum? Das wird benötigt, da ZenScript manchmal nicht vorhersagen kann, von welchem Typ die Items im Array sind. Das kann manchmal komische Fehler verursachen!  
Geh lieber den sicheren Weg und weise deinen Arrays die richtigen Typen zu!  
Darüber hinaus, wenn du zu nicht-primitiven Typen (also, alles außer strings, ints usw.) casten willst, denk dran, dass du die jeweiligen dazu passenden Pakete am Beginn des Skriptes importieren musst:

    import crafttweaker.item.IItemStack;
    val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
    

## Verschachtelte Arrays

Man kann auch Arrays innerhalb Arrays platzieren.

    val stringArray1 = ["Hallo","Welt"] as string[];
    val stringArray2 = ["ich","bin"] as string[];
    val stringArray3 = ["ein","schöner"] as string[];
    val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Schmetterling","!"]] as string[][];
    

## Auf Elemente innerhalb eines Arrays zugreifen

Man greift auf die Elemente eines Arrays zu, in dem man den jeweiligen Platz des Elements in der Liste nimmt. Das erste Element eines Arrays ist die Nummer 0, das zweite die Nummer 1 und so weiter.

Wenn du auf ein Element in einem verschachtelten Array zugeifen willst, musst du dementsprechend immer zwei oder mehr der Listenplätze angeben.

    /*
    stringArray[0] ist "Hallo"
    stringArray[1] ist "Welt"
    stringArray[2] ist "ich"
    stringArray[3] ist "bin"
    */
    val stringArray = ["Hallo","Welt","ich","bin"] as string[];
    
    //gibt "Hallo" aus
    print(stringArray[0]);
    
    
    //Verschachtelte Arrays
    val stringArray1 = ["Hallo","Welt"] as string[];
    val stringArray2 = ["ich","bin"] as string[];
    val stringArray3 = ["ein","schöner"] as string[];
    val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Schmetterling","!"]] as string[][];
    
    /*
    stringArrayAll[0] ist ["Hallo","Welt"]
    stringArrayAll[1] ist ["ich","bin"]
    stringArrayAll[2] ist ["ein","schöner"]
    stringArrayAll[3] ist ["Schmetterling","!"]
    
    stringArrayAll[0][0] ist "Hallo"
    stringArrayAll[0][1] ist "Welt"
    usw.
    */
    
    //gibt "Welt" aus
    print(stringArrayAll[0][1]);
    

# Schleifen

Eine Schleife ist eine Funktion, die sich wiederholt. Du kannst Schleifen verwenden, um eine Aktion auf alle Elemente in einem Array anzuwenden.

## For-Schleifen

Die For-Schleife wird meistens dazu verwendet, um durch alle Elemente eines Arrays zu "iterieren". Iterieren bedeutet, eine Aktion für alle Elemente eines Arrays durchzuführen.  
Mit dem `break`-Schlüsselwort kannst du das komplette durchlaufen des Arrays vorzeitig beenden.

    import crafttweaker.item.IItemStack;
    
    val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
    val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
    val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];
    
    
    //for [IntegerName, ] elementName in IArray {code}
    
    for item in IArray {
        //definiert die Variable "item" nacheinander mit jedem Element aus IArray (z.B. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
        //Man kann diese Variable nun problemlos verwenden!
        recipes.remove(item);
    }
    
    for i, item in IArray {
        //definiert "i" mit jeder Elementenummer von IArray (z.B. 0,1,2,...)
        //definiert "item" mit jedem Element von IArray (z.B. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
        //Man kann diese Variablen nun problemlos verwenden!
    
        //Erstellt Craftingrezepte für IArray aus den Items aus JArray und KArray (z.B. Dirt aus Gras und einer Holzaxt, Holzplanken aus Holz und einer Goldschaufel, Diamanten aus Eisenbarren und Smaragden)
        recipes.addShapeless(item,[JArray[i],KArray[i]]);
    }
    
    for i in 0 to 10 {
        //definiert "i" mit jeder Nummer von 0 bis 9 (z.B. 0,1,2,...,8,9)
        print(i);
    }
    
    for i in 10 .. 20 {
        //definiert "i" mit jeder Nummer von 10 bis 19 (z.B. 10,11,12,...,18,19)
        print(i);
    }
    
    for item in loadedMods["minecraft"].items {
        //definiert "item" mit jedem Item, welches von der Mod mit der Mod-ID "minecraft" stammt und löscht das Craftingrezept
        recipes.remove(item);
    }
    

## While-Schleife

Die While-Schleife wird so lange ausgeführt, bis die gegebene Bedingung nicht mehr `true` (wahr) ist.  
Alternativ kannst du die While-Schleife auch mit dem `break`-Schlüsselwort vorzeitig stoppen.

    var i = 0; 
    
    //Wird die Ziffern 0 - 9 ausgeben, denn in der folgenden Iteration ist i < 10 falsch, da i den Wert 10 besitzt.
    while i < 10 {
        print(i); 
        i += 1;
    } 
    
    print("Nach der Schleife: " + i);
    
    
    //Wird die Zahlen 10 - 6 ausgeben, da in der folgenden Iteration i == 5 ist und abgebrochen wird.
    while (i > 0) {
        if i == 5
            break;
        print(i);
        i -= 1;
    }
    
    print("Nach der zweiten Schleife: " + i);
    
    
    for k in 1 .. 10 {
        if (k == 5)
            break;
        print(k);
    }
    

# Adding items to an Array

While it is not recommended to do so, it is possible to add some Objects to Arrays.  
You can only add single Objects to an array, you cannot add two arrays.  
You use the `+` operator for array Addition:

```java
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```