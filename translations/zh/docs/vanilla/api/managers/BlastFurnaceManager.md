# BlastFurnaceManager #高炉合成表管理



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.BlastFurnaceManager
```

## 已实现的接口
BlastFurnaceManager实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## 方法
### 添加配方

添加基于给定参数的合成表

```zenscript
blastFurnace.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
#添加合成表的格式
blastFurnace.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
#示例显示了如何实现将羊毛在高炉中烧制成钻石并且获得1.0的经验
```

| 参数             | 类型                                                                | 描述         |
| -------------- | ----------------------------------------------------------------- | ---------- |
| 名称             | 字符串[string]                                                       | 新的合成表名称    |
| output（输出）     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 合成表的输出物品id |
| input（输入）      | [制造商.api.item.IIngredient](/vanilla/api/items/IIngredient)        | 合成表的输入成分   |
| xp             | 浮点数                                                               | 玩家获得多少经验   |
| cookTime #烧制时间 | 整数                                                                | 烧制需要多长时间   |


### 删除合成表

移除基于输出和输入的合成表

```zenscript
blastFurnace.removeRecipe(output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
#删除合成表的格式
blastFurnace.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
#由输入为羊毛输出为钻石的方式定位并且删除这个合成表
```

| 参数         | 类型                                                                | 描述          |
| ---------- | ----------------------------------------------------------------- | ----------- |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 合成表的输出物品id. |
| input（输入）  | [制造商.api.item.IIngredient](/vanilla/api/items/IIngredient)        | 要移除的配方的成分。  |



