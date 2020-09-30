# FurnaceManager



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.FurnaceManager
```

## 已实现的接口
FurnaceManager implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## 方法
### addRecipe

添加基于给定参数的合成表

```zenscript
furnace.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
furnace.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| 参数             | 类型                                                                  | 描述         |
| -------------- | ------------------------------------------------------------------- | ---------- |
| name           | String                                                              | 新的合成表名称    |
| output（输出）     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | 合成表的输出物品id |
| input（输入）      | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | 合成表的输入成分   |
| xp             | float                                                               | 玩家获得多少经验   |
| cookTime #烧制时间 | int                                                                 | 烧制需要多长时间   |


### 删除合成表

移除基于输出和输入的合成表

```zenscript
furnace.removeRecipe(output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
furnace.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| 参数         | 类型                                                                  | 描述          |
| ---------- | ------------------------------------------------------------------- | ----------- |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | 合成表的输出物品id. |
| input（输入）  | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | 要移除的配方的成分。  |



