# Associative Arrays

An Associative Array (sometimes also called a Map or a Dictionary) is like a normal [Array](Arrays_and_Loops) in the way that it is able to store multiple entries. Unlike [Arrays](Arrays_and_Loops) however, you can choose what type you want the index, or (as we call it in maps) key, to be!

## Declaring an Associative Array

You declare Associative Arrays using curly brackets `{}` and colons `:`  
```JAVA
val myAssocArray = {
	dirt : <minecraft:dirt>,
	gold : <minecraft:gold_ingot>
} as IItemStack[string];
```

Let's break this down, shall we?  

- `val myAssocArray =` standard variable declaration
- `{` this is an Associative Array, Sir!
- `dirt : <minecraft:dirt>` we map `<minecraft:dirt>` under the string `dirt`
- `,` wait, there's more to come
- `gold : <minecraft:gold_ingot>` we map `<minecraft:gold_ingot>` under the string `gold`
- `}` we have reached the end of the Array, Sir!
- `as IItemStack[string];` this is an Associative Array that uses strings as indices and IItemStacks as values.


Okay, so what do I need to think of when using these?  

- You can use about every type available to Zenscript as either key or value.
- You cannot iterate over an Associative Array that uses Arrays as keys.
- You cannot use the 2-Variable Iterator when iterating over an Array that uses Arrays as values.
- You cannot use variables for key declaration in the initial Declaration (the one that uses `{}`) as clear Text is interpreted as string!


## Refering to Items inside an Associative Array.

You refer to items inside an Associative Array the same way you refer to items inside a normal [Array](Arrays_and_Loops):  
`Array[index]`  
Only difference is this time, you don't necessarily need to use an Integer as index, but whatever type you declared your Array to be!  
```JAVA

val dirt = <minecraft:dirt>;
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


## Iterating over an Associative Array

There are two Iterators that allow you to iterate over an Associative Array:  

- The key-Iterator: Iterates over the keys, uses one variable → __Recommended one__
- The key-value-Iterator: Iterates over the keys and values, uses two variables → known to do strange stuff...

Let's add an Associative Array that stores crafting recipes to be iterated over:  

- Keys shall be the crafting output as [IItemStack](/Vanilla/Items/IItemStack)
- Values shall be the crafting ingredients as [IIngredient](/Vanilla/Variable_Types/IIngredient)
- We shall use the key-Iterator that is built like this: `for key in assocArray {doSth;}`


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
```


<details>
<summary>Debugging Map Iterators</summary>
You need to be careful with the Iterators: You __cannot iterate over ZenNatives__ (strings, ints, Nested Arrays). So check that you are not using any of these. You can however assign the variable with the values you just cannot use it, so this would work as long as you leave the reference to key commented out (key is an Array - A ZenNative):
	
	val ttt = {
    [<minecraft:dirt>] : <minecraft:gold_ingot>,
    [<minecraft:grass>] : <minecraft:iron_ingot>
	} as IItemStack[IItemStack[]];


	for key, value in ttt {
    print("KV");
    //print(key[0].name);
    print(value.name);
	}

You can, however, use the __indexGet__ functionality to retrieve a ZenNative if it has not-ZenNative key.  
That is what we did in the iterator-Example with the recipes!
	
</details>