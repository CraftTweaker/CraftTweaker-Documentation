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

### 转换（Transform）

旧的物品转换器（itemTransformer）可能在1.13中取消。
这是一个特殊的函数。它接受两个参数：物品本身[item](IItemStack)和执行合成的玩家[player](/Vanilla/Players/IPlayer)。

```
transformedItem = item.transform(function(item, player) {return item;});
```

这个函数返回一个[物品堆](IItemStack)。
这个堆将会替换合成前在合成框架中的物品。使用`null`作为返回，会清空框架。

（译者注：经过实验目前版本这个函数好像有Bug，其行为和描述并不符合。也无法返回物品。建议不要使用这个函数。）

### 新转换（TransformNew）

为了适应新的内置配方系统，需要一个新的物品转换器。新转换器仅仅接受一个参数，那就是在合成框架中的物品。

```
transformedItem = item.transformNew(function(item){return item;});
```

这个函数返回一个[物品堆](IItemStack)。
然而这不像其他转换器。它不是用来替换合成框架中剩余的物品的，而是作为合成的返还物品。
换句话说如果你在这里返回`null`，一个物品会被消耗，但是其他返还的物品将会尝试放到合成框架中。如果无法放回到合成框架中（比如位置被占用），返还的物品将会退回给你，就像装有液体的桶在合成中的行为。
如果你不需要一个玩家变量作为参数，这正是你该用的转换器。