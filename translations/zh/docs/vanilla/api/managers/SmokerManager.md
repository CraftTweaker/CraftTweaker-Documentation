# 烟雾管理器



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
制造商.api.SmokerManager
```

## 已实现的接口
SmokerManager 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## 方法
### addJSONRecipe #添加JSON配方

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

```zenscript
smoker.addJSONRecipe(name as String, data as craftbiner.api.data.IData);
sobker.addJSONRecipe("recipe_name", {component:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数       | 类型                                                     | 描述           |
| -------- | ------------------------------------------------------ | ------------ |
| name（名称） | String                                                 | 配方名称         |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 代表json 文件的数据 |


### 添加配方

添加基于给定参数的合成表

```zenscript
smoker.addRecipe (name as String, output as craftwiner.api.item.IItemStack, input as craftbiner.api.item.IIngredient, xp as float, cookTime as int);
somker.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0);
```

| 参数             | 类型                                                                | 说明         |
| -------------- | ----------------------------------------------------------------- | ---------- |
| 名称             | 字符串[string]                                                       | 新的合成表名称    |
| output（输出）     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 合成表的输出物品id |
| input（输入）      | [制造商.api.item.IIngredient](/vanilla/api/items/IIngredient)        | 合成表的输入成分   |
| xp             | 浮点数                                                               | 玩家获得多少经验   |
| cookTime #烧制时间 | 整数                                                                | 烧制需要多长时间   |


### 全部移除

删除此注册表中的所有配方

```zenscript
移除所有();
```

### 移除 ByModid

删除基于注册表名称莫迪的配方

```zenscript
smoker.removeByModed(月经作为字符串);
smoker.removeByModed("minecraft");
```

| 参数  | 类型          | 描述          |
| --- | ----------- | ----------- |
| 莫多德 | 字符串[string] | 已删除配方的 modo |


### removeByName

删除基于注册表名称的配方

```zenscript
烟雾.removeByname(名称为字符串);
烟雾.removeByname("minecraft:furnace");
```

| 参数 | 类型          | 描述           |
| -- | ----------- | ------------ |
| 名称 | 字符串[string] | 要删除的配方的注册表名称 |


### removeByRegex

基于正则表达式删除配方

```zenscript
smoker.removeByRegex(正则表达式为字符串);
sobker.removeByRegex("\\d_\\d");
```

| 参数    | 类型          | 描述      |
| ----- | ----------- | ------- |
| 正则表达式 | 字符串[string] | 正则表达式匹配 |


### 删除合成表

移除基于其输出的配方。

```zenscript
smoker.removeRecipe(输出为 craftbiner.api.item.IItemStack);
sobker.removeRecipe(<item:minecraft:glass>);
```

| 参数         | 类型                                                                | 描述    |
| ---------- | ----------------------------------------------------------------- | ----- |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 配方的输出 |



移除基于输出和输入的合成表

```zenscript
smoker.removeRecipe(输出为 craftminstrer.api.item.IItemStack, 输入为 craftbiner.api.item.Ingredient);
somker.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| 参数         | 类型                                                                | 描述          |
| ---------- | ----------------------------------------------------------------- | ----------- |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 合成表的输出物品id. |
| input（输入）  | [制造商.api.item.IIngredient](/vanilla/api/items/IIngredient)        | 要移除的配方的成分。  |



