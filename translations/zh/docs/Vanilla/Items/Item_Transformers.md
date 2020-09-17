# 项目变换

物品转换器会在制作时转换你的制造输入。  
这可以从损坏物品到返回一个完全不同的物品的范围。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftminstruer.item.IItemTransformer；`

```zenscript
<br />valable item = <minecraft:apple>;

//item 不会被消耗，将保持在网格
变现item = item。 euse();

//item不会被消耗, 整个堆栈将被退回给你 (do /give).
transformeditems = item.giveBack();

///items 将被消耗，但会给您指定的堆栈(制作槽将被清除!)。
转化物项=物品。 iveBack(<minecraft:potato>);

//item 将被指定项目替换，它将转到制作槽
变换项= 项目。 赎金替换(<minecraft:potato>);

//damage the item by 1
transformmeditem = item 赎金损害();

//damage the item by 给定的值
transformeditem = item.transformDamage(3);

///item will be consided, what.
转换项= item.noReturn();

//Causes 多个要消耗的项目。
transformeditems = item.transformConsume(3)；
```

## 注册自己的项目变换器

### 变换

可能不存在于1.13中的旧物品变压器。  
这是一个接受两个参数的特殊函数： [项目](/Vanilla/Items/IItemStack/) 本身和 [玩家](/Vanilla/Players/IPlayer/) 正在进行制造。

```zenscript
transformedItem = item.transform(函数, 播放器) {return item;});
```

函数需要返回一个 [IItemStack](/Vanilla/Items/IItemStack/)。  
这个堆栈将在以后取代制作槽中的内容。 使用 `null` 来清除那个槽位。

### 新建转换

由于有了新的内部配方系统，需要有一个新的项目变换器。 这只接受一个参数，即栏位中的项目。

```zenscript
transformeditem = item.transformNew(函数)(项目){return item;});
```

函数需要返回 [IItemStack](/Vanilla/Items/IItemStack/)。  
与其他变压器不同的 这将不会是取代工作区中的工作区的工作区的工作区，而是返回的工作区的工作。  
换句话说，如果您返回 `null` 这里将消耗一件物品， 任何其他退回的物品都将放在手工位置， 如果可能，或退回给您，与处理桶时相同。  
如果你真的不需要玩家变量，那么这个变压器就要去了！