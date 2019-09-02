# Ассоциативные массивы

Ассоциативный массив (иногда также называемый картой или словарем) &mdash; способ хранить несколько значений, равно как и обычный [массив](Arrays_and_Loops/). Однако, в отличие от [массивов](Arrays_and_Loops/), вы можете выбрать тип, который хотите использовать в качестве индекса или (как это называется в картах) ключа!

## Объявление ассоциативного массива

Ассоциативные массивы объявляются с помощью фигурных скобок`{}` и двоеточий `:`.

```JAVA
val myAssocArray = {
    dirt : <minecraft:dirt>,
    gold : <minecraft:gold_ingot>
} as IItemStack[string];
```

Давайте разберемся с этим, да?

- `val myAssocArray =` — стандартное объявление переменной,
- `{` — ассоциативный массив, сэр!
- `dirt : <minecraft:dirt>` — мы присваиваем значение `<minecraft:dirt>` к ключу `dirt`,
- `,` wait, there's more to come
- `gold : <minecraft:gold_ingot>` we map `<minecraft:gold_ingot>` under the string `gold`
- `}` we have reached the end of the Array, Sir!
- `as IItemStack[string];` this is an Associative Array that uses strings as indices and IItemStacks as values.

Okay, so what do I need to think of when using these?

- You can use about every type available to Zenscript as either key or value.
- You cannot use variables for key declaration in the initial Declaration (the one that uses `{}`) as clear Text is interpreted as string!

## Обращение к элементам ассоциативного массива

You refer to items inside an Associative Array the same way you refer to items inside a normal [Array](Arrays_and_Loops/):  
`Array[index]`  
Only difference is this time, you don't necessarily need to use an Integer as index, but whatever type you declared your Array to be!

```JAVA
<br />val dirt = &lt;minecraft:dirt&gt;;
val assocArray = {
    &lt;minecraft:dirt&gt; : "This is me"
} as string[IItemStack];

//array[index]
print(assocArray[&lt;minecraft:dirt&gt;]);

//You can also use varaibles here, as long as the variable is of the correct type
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

## Манипулирование элементами внутри ассоциативного массива

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

## Перебор ассоциативного массива

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