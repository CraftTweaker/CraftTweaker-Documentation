# 种子

种子是你从冲锋利的草地得到的东西。

## 打印所有种子到日志

此命令将所有注册种子打印到日志。

需要玩家或控制台执行，不能写入zs文件。

    1.12
    /ct 种子
    
    pre-1.12
    /mt 种源
    

## 添加种子掉落

添加 `条项目` 作为种子滴。  
**重量与草种相对，草种的重量为 10 (asset10%)！**

```zenscript
vanilla.seeds.addSeed(items)；
```

`项目` 是一个 [重量的物品](/Vanilla/Items/WeightedItemStack/)。 这意味着什么？ 它只是意味着你需要给它一个像这样的百分比：

```zenscript
//添加重量为 1
vanilla.seeds.addSeed(<minecraft:carrot> %1);
```

## 删除种子掉落

停止 `个项目` 不再是种子掉落。

```zenscript
vanilla.seeds.removeSeed(items)；
```

`项目` 是一个 [IIngredient](/Vanilla/Variable_Types/IIngredient/)。

## 获取所有注册种子

返回所有项目作为 [重量物品堆栈](/Vanilla/Items/WeightedItemStack/) 列表。

```zenscript
val seedList = vanilla.seeds.seeds;

for item in seedList Group,
    print("Item: " ~item. 抓取.displayname ~" |机会: " ~ item.percent ~"%";

```