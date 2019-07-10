# Assoziatives Array

Ein Assoziatives Array (wird manchmal auch als "Map" oder "Dictionary" bezeichnet) ist ähnlich wie ein normales [Array](Arrays_and_Loops/) und kann mehrere Objekte in sich speichern. Der Unterschied zu normalen [Arrays](Arrays_and_Loops/) hier ist allerdings, dass man sich den Typ des Index (hier wird er auch als "Schlüssel" oder "Key" bezeichnet) aussuchen kann!

## Ein Assoziatives Array deklarieren

Ein assoziatives Array deklariert man mit Hilfe von geschweiften Klammern `{}` und Doppelpunkten `:`

```JAVA
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

```JAVA
<br />val dirt = &lt;minecraft:dirt&gt;;
val assocArray = {
    &lt;minecraft:dirt&gt; : "Das bin ich"
} as string[IItemStack];

//array[index]
print(assocArray[&lt;minecraft:dirt&gt;]);

//Du kannst hier auch Variablen verwenden, solange diese den richtigen Typ besitzen
print(assocArray[dirt]);
```

There is one special case, that is when you use strings as indeces:  
In this case you can also use the memberGetter like this:

```JAVA
val assocWithStrings = {
    //you can use "" if you want
    "one" : "1",

    //but you don't have to
    two : "2"
} as string[string];

//You can either use the memberGetter
print(assocWithStrings.one);

//Or the standard index Getter
print(assocWithStrings["two"]);
```

## Manipulating items inside an Associative Array

As in Arrays, you can manipulate items inside an Associative Array using `array[index] = newValue`.  
There is one major differenc though:  
While Arrays have a fixed size, maps don't. That means you can always add an entry by setting to an index that has previously not been set!

```JAVA
val changingArray = {
    <minecraft:dirt> : "this is me",
    <minecraft:gold_ingot> : "and I hate it"
} as string[IItemStack];

val gg = <minecraft:gold>;

//Overrides the value of gold_ingot
changingArray[gg] = "and I love it";

//adds a new entry
changingArray[<minecraft:grass>] = "Power!";
```

## Retrieving an Associative Array's Key and Entrysets

The KeySet is an array containing all the map's keys.  
The valueSet is an array containing all the map's values.  
The entrySet is an array containing all the map's entries (see below).

```JAVA
myAssocArray.keySet   //keySet
myAssocArray.keys     //keySet
myAssocArray.values   //valueSet
myAssocArray.valueSet //valueSet
myAssocArray.entrySet //entrySet
```

## Iterating over an Associative Array

There are two Iterators that allow you to iterate over an Associative Array:

- The key-Iterator: Iterates over the keys, uses one variable
- The key-value-Iterator: Iterates over the keys and values, uses two variables

Let's add an Associative Array that stores crafting recipes to be iterated over:

- Keys shall be the crafting output as [IItemStack](/Vanilla/Items/IItemStack/)
- Values shall be the crafting ingredients as [IIngredient](/Vanilla/Variable_Types/IIngredient/)
- We shall use the key-Iterator that is built like this: `for key in assocArray {doSth;}`
- We shall also use the key-value-Iterator that is built like this `for key, value in assocArray {doSth;}`

```JAVA
import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

val dirt = <minecraft:dirt>;
val recipeMapShaped = {
    <minecraft:grass> : [[dirt, dirt, dirt],[dirt, dirt, dirt],[dirt, dirt, dirt]],
    <minecraft:gold_ingot> : [[dirt, dirt, dirt],[dirt, <minecraft:gold_ingot>, dirt],[dirt, dirt, dirt]]
} as IIngredient[][][IItemStack];

recipeMapShaped[dirt] = [[dirt, dirt, dirt],[dirt, null, dirt],[dirt, dirt, dirt]];

//key will be grass, goldIngot, dirt
for key in recipeMapShaped {
    recipes.addShaped(key, recipeMapShaped[key]);
}


//keys will be grass, goldIngot, dirt, values will be the recipes for them
for key, value in recipeMapShaped {
    recipes.addShaped(key, value);
}
```

# ZenType Entry

A map Entry consists of a key and a value.  
Currently the only way to get such an object is via a map's entrySet method.

You can use the getters to get `key` and `value`

```kotlin
//Replace map with a reference to an existing map/associative array
val myEntry = map.entrySet[0];


myEntry.key;    //Returns the entry's key.
myEntry.value;  //Returns the entry's value.
```