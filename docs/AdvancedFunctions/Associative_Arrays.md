# 关联数组

关联数组（有的地方也叫映射或者字典）和普通的[数组](Arrays_and_Loops)极为相似，也能够存储多条数据。但和[数组](Arrays_and_Loops)不同之处在于，数组的下标（在这里一般叫做“键”）可以随意定义！

## 声明一个关联数组

你可以使用花括号 `{}` 和冒号 `:` 来声明关联数组  
```Js
val myAssocArray = {
	dirt : <minecraft:dirt>,
	gold : <minecraft:gold_ingot>
} as IItemStack[string];
```

让我们对其进行拆分分析：  

- `val myAssocArray =` 标准变量声明
- `{` 告诉程序，这是一个关联数组！
- `dirt : <minecraft:dirt>` 使用字符串 `dirt` 来关联 `<minecraft:dirt>`  
- `,` 告诉程序，后面还有数据
- `gold : <minecraft:gold_ingot>` 使用字符串 `gold` 来关联 `<minecraft:gold_ingot>`
- `}` 告诉程序，关联数组写完了
- `as IItemStack[string];` 向程序说明这是一个关联数组，使用字符串作为键，使用 IItemStacks 作为值。


好的，当我使用这个数据类型的时候，应该注意些什么？  

- 你可以使用 Zenscript 中的所有类型来作为键或值。
- 你不能使用数组作为键，来遍历一个关联数组。
- You cannot use the 2-Variable Iterator when iterating over an Array that uses Arrays as values.
- You cannot use variables for key declaration in the initial Declaration (the one that uses `{}`) as clear Text is interpreted as string!


## Refering to Items inside an Associative Array.

You refer to items inside an Associative Array the same way you refer to items inside a normal [Array](Arrays_and_Loops):  
`Array[index]`  
Only difference is this time, you don't necessarily need to use an Integer as index, but whatever type you declared your Array to be!  
```js

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
```js
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

```js
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

- The key-Iterator: Iterates over the keys, uses one variable
- The key-value-Iterator: Iterates over the keys and values, uses two variables

Let's add an Associative Array that stores crafting recipes to be iterated over:  

- Keys shall be the crafting output as [IItemStack](/Vanilla/Items/IItemStack)
- Values shall be the crafting ingredients as [IIngredient](/Vanilla/Variable_Types/IIngredient)
- We shall use the key-Iterator that is built like this: `for key in assocArray {doSth;}`
- We shall also use the key-value-Iterator that is built like this `for key, value in assocArray {doSth;}`


```js
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
