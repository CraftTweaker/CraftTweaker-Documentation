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
- 你不能使用2个变量的遍历方法遍历使用数组作为值的数组。
- 你不可以用变量作为声明数组的键（使用`{}`的那个），因为纯文本将会被解释成字符串！


## 在关联数组中访问元素。

你可以像访问[数组](Arrays_and_Loops)那样访问一个关联数组中的元素：  
`Array[index]`  
唯一不同之处在于，不再通过整型数下标来访问数组，而是通过你之前预先申明的 key 来访问！  
```js

val dirt = <minecraft:dirt>;
val assocArray = {
	<minecraft:dirt> : "This is me"
} as string[IItemStack];

//array[index]
print(assocArray[<minecraft:dirt>]);

//你也可以使用变量，只要类型匹配即可。
print(assocArray[dirt]);
```


有一种特殊情况，当你使用字符串作为 key 的时候：  
这时候你可以直接这样做来调用元素：  
```js
val assocWithStrings = {
	//你可以使用 "" 符号来包裹字符串
	"one" : "1",

	//当然这不是强制性的
	two : "2"
} as string[string];

//你就可以直接进行访问
print(assocWithStrings.one);

//或者用标准的 key 来进行访问
print(assocWithStrings["two"]);
```

## 在关联数组中修改元素

在数组中，你可以通过 `array[index] = newValue` 方法来修改数组中的元素。  
关联数组有个不同之处：  
数组是长度是固定的，但是映射（关联数组）却不是。这意味着你随时可以向数组中添加先前并不包含的 key 来添加新条目！

```js
val changingArray = {
	<minecraft:dirt> : "这是我",
	<minecraft:gold_ingot> : "我讨厌他"
} as string[IItemStack];

val gg = <minecraft:gold>;

//覆盖 gold_ingot 的 value
changingArray[gg] = "我喜欢他";

//添加一个新的条目
changingArray[<minecraft:grass>] = "力量！";
```


## 遍历一个关联数组

这里提供了两种遍历方法来遍历关联数组：

- key 遍历法：遍历 key，只需要传入一个参数
- key-value 遍历法：同时遍历 keys 和 values，需要传入两个参数

让我们来声明一个关联数组，并存储合成表，而后进行迭代：  

- Keys 作为合成的输出结果，以 [IItemStack](/Vanilla/Items/IItemStack) 类型存储
- Values 作为合成的输入材料，以 [IIngredient](/Vanilla/Variable_Types/IIngredient) 类型存储
- 我们通过 key 遍历法来遍历数组，像这样：`for key in assocArray {doSth;}`
- 我们还要通过 key-value 遍历法来遍历数组，像这样：`for key, value in assocArray {doSth;}`


```js
import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

val dirt = <minecraft:dirt>;
val recipeMapShaped = {
	<minecraft:grass> : [[dirt, dirt, dirt],[dirt, dirt, dirt],[dirt, dirt, dirt]],
	<minecraft:gold_ingot> : [[dirt, dirt, dirt],[dirt, <minecraft:gold_ingot>, dirt],[dirt, dirt, dirt]]
} as IIngredient[][][IItemStack];

recipeMapShaped[dirt] = [[dirt, dirt, dirt],[dirt, null, dirt],[dirt, dirt, dirt]];

//key 是 grass, goldIngot, dirt
for key in recipeMapShaped {
	recipes.addShaped(key, recipeMapShaped[key]);
}


//keys 是 grass, goldIngot, dirt, values 是它们的合成表
for key, value in recipeMapShaped {
	recipes.addShaped(key, value);
}
```
