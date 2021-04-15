# Arrays Asociativos

Un Array Asociativo (A veces llamado Mapa o Diccionario) es como un Array normal que puede almancenar más de una entrada. A diferencia de un Array, en el que puedes eliges el elemento a partir del indice, en un mapa tú eliges que es el indice es forma de una "clave".

## Declarando un Array Asociativo

Declaras un Array Asociativo usando claudators `{}` y dos puntos `:`

```zenscript
val miArrayAsociativo = {
   tierra : <minecraft:dirt>,
   oro : <minecraft:gold_ingot>
} as IItemStack[string];
```

Por partes:

- `val myArrayAsociativo =` declaramos el array como una variable
- `{` esto es un Array Asociativo 
- ` tierra : <minecraft:dirt>` Almacenamos el valor `<minecraft:dirt>` al lado de la clave ` tierra : `
- `,` Hay más de un elemento en el Mapa
- `oro : <minecraft:gold_ingot> ` Almacenamos el valor `<minecraft:gold_ingot>` al lado de la clave ` gold: `
- ` } ` Hemos llegado al final del Array.
- `as IItemStack[string];` este Mapa utiliza strings como indices y IItemStacks como elementos

¿Cómo uso estos?

- Puedes usar cualquier tipo que esta expuesto a Zenscript como un elemento o una clave.
- No puedes usar variables como claves ya que el texto a la izquierda de los dos puntos se auto interpreta como un String aunque no tenga las comillas. Por tanto, si tu tuvieras una variable la convertiria a un string con el nombre de la variable, no con el valor que esa variable representa.

## Referirse a un Elemento dentro de un Mapa

Te puedes referir a algo dentro de un Array asociativo de la misma manera que te refieres a un elemento dentro de un Array normal. `Array[clave]`  
La diferencia esta en que esta vez no necesitas un Int que sea un index sino que puede ser un IItemStack, un String, un IOreDictEntry...

```zenscript
<br /><br />val dirt = <minecraft:dirt>;
val assocArray = {
    <minecraft:dirt> : "This is me"
} as string[IItemStack];

//array[index]
print(assocArray[<minecraft:dirt>]);

//You can also use varaibles here, as long as the variable is of the correct type
print(assocArray[dirt]);
```

There is one special case, that is when you use strings as indeces:  
In this case you can also use the memberGetter like this:

```zenscript
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

```zenscript
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

```zenscript
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

```zenscript
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

```zenscript
//Replace map with a reference to an existing map/associative array
val myEntry = map.entrySet[0];


myEntry.key;    //Returns the entry's key.
myEntry.value;  //Returns the entry's value.
```