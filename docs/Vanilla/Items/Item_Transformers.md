# 物品转换器（Item Transformers）

物品转换器能够转换在合成时转换输入的物品。  
既可以修改物品耐久，也可以返回一个完全不同的物品。

## 导入相关包

为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。   
`import crafttweaker.item.IItemTransformer;`

```js
val item = <minecraft:apple>;

//物品不会消耗，仍会保留在合成台中
transformedItem = item.reuse();

//物品不会消耗，而是整个返回给你（可以理解为此处执行了 give 指令）
transformedItem = item.giveBack();

//物品会被消耗，但会给你返还指定的物品（合成台格子会清空！）
transformedItem = item.giveBack(<minecraft:potato>);

//物品会被替换成指定物品（替换后物品保留在合成台中）
transformedItem = item.transformReplace(<minecraft:potato>);

//物品耐久减 1
transformedItem = item.transformDamage();

//物品耐久会变成指定值
transformedItem = item.transformDamage(3);

//物品会被直接消耗
transformedItem = item.noReturn();

//消耗多个物品
transformedItem = item.transformConsume(3);
```


## 注册自己的物品转换器
### Transform
The old itemTransformer that might cease to exist in 1.13.  
Thisis a special function that accepts two parameters: The [item](IItemStack) itself and the [player](/Vanilla/Players/IPlayer) performing the crafting.

```
transformedItem = item.transform(function(item, player) {return item;});
```

The function needs to return an [IItemStack](IItemStack).  
This stack will replace what's in the crafting slot afterwards. Use `null` to clear that slot.

### TransformNew
With the new internal recipe system there was a need for a new ItemTransformer. This one only accepts one parameter, that is the item in the slot.

```
transformedItem = item.transformNew(function(item){return item;});
```

The function needs to return an [IItemStack](IItemStack).  
Unlike the other transformer however, this will not be the itemstach that replaces the one in the crafting slot, but the one that is returned for that crafting slot.  
In other words if you return `null` here, one item will be consumed, any other item that is returned will either be placed in the crafting slot, if possible, or given back to you, same as when dealing with buckets.  
If you don't really need the player variable, this is the transformer to go for!