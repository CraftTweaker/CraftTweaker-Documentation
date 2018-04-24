# 种子
种子是玩家破坏草获得的东西

## 在日志中输出所有种子

这个指令会在日志中输出所有注册的种子。

它需要由玩家或者控制台使用才有效，不能写在zs文件内。
```
1.12
/ct seeds

1.12之前
/mt seeds
```

## 添加一个种子掉落

添加一个作为种子掉落的`物品`。
**权重是相对于原版种子的，它的权重为10(≙ 1000%)!**

```
vanilla.seeds.addSeed(item);
```

`item（物品）`类型为[weightedItemStack（加权物品堆）](/Vanilla/Items/WeightedItemStack).
这是什么意思？这就是说你需要在后面需要一个百分比，例如：

```
//添加权重为1的胡萝卜
vanilla.seeds.addSeed(<minecraft:carrot> % 100);
```


## 移除一个种子掉落

将`物品`从种子掉落中移除
```
vanilla.seeds.removeSeed(item);
```
`item（物品）`类型为[IIngredient](/Vanilla/Variable_Types/IIngredient).



## 检索所有注册的种子

以[加权物品堆](/Vanilla/Items/WeightedItemStack)列表形式返回所有种子。
```
val seedList = vanilla.seeds.seeds;

for item in seedList {
	print("Item: " ~ item.stack.displayName ~ " || Chance: " ~ item.percent ~ "%");
}
```
