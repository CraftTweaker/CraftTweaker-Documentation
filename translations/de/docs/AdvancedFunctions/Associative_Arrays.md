# Assoziatives Array

Ein Assoziatives Array (wird manchmal auch als "Map" oder "Dictionary" bezeichnet) ist ähnlich wie ein normales [Array](Arrays_and_Loops/) und kann mehrere Objekte in sich speichern. Der Unterschied zu normalen [Arrays](Arrays_and_Loops/) hier ist allerdings, dass man sich den Typ des Index (hier wird er auch als "Schlüssel" oder "Key" bezeichnet) aussuchen kann!

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

Man greift auf assoziative Arrays genau so zu, wie man es auch bei normalen [Arrays](Arrays_and_Loops/) macht:  
`Array[index]`  
Der einzige Unterschied ist eben, dass man nun nicht unbedingt einen Integer braucht, sondern etwas, was dem davor spezifizierten Typ entspricht!

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

Es gibt eine Ausnahme, wenn du Zeichenketten als Indexwerte verwendest:  
In diesem Fall kannst du auch den "memberGetter" verwenden:

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

Wie in einem Array, kannst du durch `array[index] = neuerWert` die Werte auswechseln.  
Es gibt allerdings einen Unterschied:  
Arrays haben eine feste Größe, Maps nicht. Das heißt, dass du jederzeit neue Elemente an eine Map hängen kannst, solang du einen Schlüssel verwendest, der noch nicht verwendet wurde!

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

Ein KeySet ist ein Array, welche alle Schlüssel einer Map enthält.  
Ein ValueSet ist ein Array, welches alle Werte einer Map enthält.  
Ein EntrySet ist ein Array, welches alle Einträge einer Map enthält (siehe unten).

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

Ein Map-Eintrag (Entry) besteht immer aus einem Schlüssel und einem Wert.  
Ein Entry-Objekt bekommt man mit Hilfe der entrySet-Methode.

Mit Hilfe von Gettern bekommt man die Werte für `key` und `value`

```zenscript
//Den ersten Eintrag aus einer beliebigen Map holen
val myEntry = map.entrySet[0];


myEntry.key;    //Gibt den Schlüssel des Eintrags aus
myEntry.value;  //Gibt den Wert des Eintrags aus
```