# Assoziatives Array

Ein assoziatives Array (manchmal auch Map oder Dictionary genannt) ist wie ein normales [Array](/AdvancedFunctions/Arrays_and_Loops/) in der Hinsicht, dass es mehrere Einträge speichern kann. Im Gegensatz zu [Arrays](/AdvancedFunctions/Arrays_and_Loops/) können Sie jedoch wählen, welchen Typ der Index oder (wie wir es bei Maps nennen) der Schlüssel haben soll!

## Ein Assoziatives Array deklarieren

Ein assoziatives Array deklariert man mit Hilfe von geschweiften Klammern `{}` und Doppelpunkten `:`
```zenscript
val myAssocArray = {
    dirt : <minecraft:dirt>,
    gold : <minecraft:gold_ingot>
} as IItemStack[string];
```

Hier nun die Erklärung:

- `val myAssocArray =` eine ganz normale Deklaration
- `{` Anzeichen für ein assoziatives Array!
- `dirt : <minecraft:dirt>` wir weisen `<minecraft:dirt>` die Zeichenkette `dirt` zu
- `,` Wir sind noch nicht ganz fertig!
- `gold: <minecraft:gold_ingot>` wir weisen `<minecraft:gold_ingot>` die Zeichenkette `gold` zu
- `}` Wir haben das Ende des Arrays erreicht!
- `as IItemStack[string];` Wir haben nun ein assoziatives Array, welches Zeichenketten zur Indexierung von IItemStack-Objekten verwendet.


Okay, und was sollte ich denn noch beachten?

- Du kannst jeden Datentyp, den du in ZenScript verwenden kannst, sowohl als Schlüssel, als auch Wert verwenden.
- In der ersten Deklaration des Arrays kannst du für den Schlüssel keine bestehenden Variablen verwenden, da frei stehender Text als Zeichenkette interpretiert wird!


## Auf Elemente innerhalb eines assoziativen Arrays zugreifen

You refer to items inside an Associative Array the same way you refer to items inside a normal [Array](/AdvancedFunctions/Arrays_and_Loops/):  
`Array[index]`  
Only difference is this time, you don't necessarily need to use an Integer as index, but whatever type you declared your Array to be!
```zenscript

<br />val dirt = <minecraft:dirt>;
val assocArray = {
    <minecraft:dirt> : "Das bin ich"
} as string[IItemStack];

//array[index]
print(assocArray[<minecraft:dirt>]);

//Du kannst hier auch Variablen verwenden, solange diese den richtigen Typ besitzen
print(assocArray[dirt]);
```


There is one special case, that is when you use strings as indeces:  
In this case you can also use the memberGetter like this:
```zenscript
val assocWithStrings = {
    //Man kann den Schlüssel auch in "" setzen
    "eins" : "1",

    //muss man allerdings nicht
    zwei : "2"
} as string[string];

//Man kann entweder den memberGetter verwenden
print(assocWithStrings.eins);

//Oder den normalen Index-Getter
print(assocWithStrings["zwei"]);
```

## Elemente in einem assoziativen Array bearbeiten

As in Arrays, you can manipulate items inside an Associative Array using `array[index] = newValue`.  
There is one major differenc though:  
While Arrays have a fixed size, maps don't. Das heißt, dass du jederzeit neue Elemente an eine Map hängen kannst, solang du einen Schlüssel verwendest, der noch nicht verwendet wurde!

```zenscript
val changingArray = {
    <minecraft:dirt> : "das bin ich",
    <minecraft:gold_ingot> : "und ich mag es nicht"
} as string[IItemStack];

val gg = <minecraft:gold>;

//Überschreibt den Wert von gold_ingot
changingArray[gg] = "und ich liebe es";

//fügt ein neues Element hinzu
changingArray[<minecraft:grass>] = "Power!";
```

## Schlüssel und EntrySets aus einem assoziativen Array holen

The KeySet is an array containing all the map's keys.  
The valueSet is an array containing all the map's values.  
The entrySet is an array containing all the map's entries (see below).

```zenscript
myAssocArray.keySet   //keySet
myAssocArray.keys     //keySet
myAssocArray.values   //valueSet
myAssocArray.valueSet //valueSet
myAssocArray.entrySet //entrySet
```


## Über ein assoziatives Array iterieren

Es gibt für diesen Zweck zwei verschiedene Iteratoren:

- Der Schlüssel-Iterator: Iteriert über die Schlüssel, nutzt dazu eine Variable
- Der Schlüssel-Wert-Iterator: Iteriert über die Schlüssel und die Werte, nutzt zwei Variablen

Wir erstellen nun ein assoziatives Array, welches Crafting-Rezepte speichert:

- Die Schlüssel sind der Crafting-Output als [IItemStack](/Vanilla/Items/IItemStack/)
- Die Werte sind der Crafting-Input als [IIngredient](/Vanilla/Variable_Types/IIngredient/)
- Wir nutzen den Schlüssel-Iterator wie folgt: `for key in assocArray {doSth;} //soSth = machIrgendwas`
- Wir können auch den Schlüssel-Wert-Iterator wie folgt verwenden: `for key, value in assocArray {doSth;}`


```zenscript
import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

val dirt = <minecraft:dirt>;
val recipeMapShaped = {
    <minecraft:grass> : [[dirt, dirt, dirt],[dirt, dirt, dirt],[dirt, dirt, dirt]],
    <minecraft:gold_ingot> : [[dirt, dirt, dirt],[dirt, <minecraft:gold_ingot>, dirt],[dirt, dirt, dirt]]
} as IIngredient[][][IItemStack];

recipeMapShaped[dirt] = [[dirt, dirt, dirt],[dirt, null, dirt],[dirt, dirt, dirt]];

//Schlüssel sind grass, goldIngot, dirt
for key in recipeMapShaped {
    recipes.addShaped(key, recipeMapShaped[key]);
}


//Schlüssel sind grass, goldIngot, dirt, die Werte sind die Rezepte dazu
for key, value in recipeMapShaped {
    recipes.addShaped(key, value);
}
```

# ZenType "Entry"
A map Entry consists of a key and a value.  
Currently the only way to get such an object is via a map's entrySet method.

Mit Hilfe von Gettern bekommt man die Werte für `key` und `value`

```zenscript
//Den ersten Eintrag aus einer beliebigen Map holen
val myEntry = map.entrySet[0];


myEntry.key;    //Gibt den Schlüssel des Eintrags aus
myEntry.value;  //Gibt den Wert des Eintrags aus
myEntry.value;  //Gibt den Wert des Eintrags aus
```
