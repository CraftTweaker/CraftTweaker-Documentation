# 最初内存

## 描述

这个模组增加了对玩家第一次加入世界时获得物品的支持，然后永远不再获得。类似于一些模组在第一次加入世界时给玩家的书籍。

## 所属包名
`mods.initialinventory.InvHandler`

## 添加初始物品

将会在玩家加入世界时给予一个物品。

这些参数是：


参数：`key`

类型：`String`

描述：

用于确定是否应该给予一个物品。 键值可以是任何字符串，关键是确定玩家以前是否获得了一组物品。

它对以后通过使用不同的键值添加更多起始项目的模组包很有用， 已经开始玩的玩家仍然可以收到这些物品。 一个例子是：

添加钻石作为一个起始项目，键"1"，加入世界，玩家将获得钻石。

添加苹果作为一个起始项目，键"2"，加入世界，玩家将获得苹果，但不会再次获得钻石。

创建一个新世界，玩家将收到一个苹果和一个钻石。

param: `item`

Type `IItemStack`

描述：

加入时给予玩家的物品。

参数： `索引`

类型： `int`

描述：

可选整数来定义物品将在哪里给出，可以用来将物品放在物品栏栏位中，就像装甲栏位。

如果被遗漏，默认为-1，这意味着它会放在第一个可用的位置， 或将其与可能已列入清单的其他项目结合起来。


## 例子

```zenscript
//mods.initialinventory.InvHandler.addStartingItem(String key, IItemStack item, Optional int index);
mods.initialinventory.Invhandler.addStartingItem("apples", <item:minecraft:apple>);
mods.initialinventory.Invhandler.addStartingItem("apples", <item:minecraft:golden_apple>, 5)
```


