# SmokerManager



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.SmokerManager
```

## 已实现的接口
SmokerManager implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## 使用方式
### addJSONRecipe #添加JSON配方

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

```zenscript
smoker.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
smoker.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数       | 类型                                                     | 描述                              |
| -------- | ------------------------------------------------------ | ------------------------------- |
| name（名称） | 字符串[string]                                            | name of the recipe              |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe #添加合成表

添加基于给定参数的合成表

```zenscript
smoker.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
smoker.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| 参数             | 类型                                                                  | 描述         |
| -------------- | ------------------------------------------------------------------- | ---------- |
| name（名称）       | 字符串[string]                                                         | 新的合成表名称    |
| output（输出）     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | 合成表的输出物品id |
| input（输入）      | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | 合成表的输入成分   |
| xp (经验值)       | 浮点数                                                                 | 玩家获得多少经验   |
| cookTime #烧制时间 | int                                                                 | 烧制需要多长时间   |


### removeAll

Remove all recipes in this registry

```zenscript
smoker.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
smoker.removeByModid(modid as String);
smoker.removeByModid("minecraft");
```

| 参数    | 类型          | 描述                             |
| ----- | ----------- | ------------------------------ |
| modid | 字符串[string] | modid of the recipes to remove |


### removeByName

Remove recipe based on Registry name

```zenscript
smoker.removeByName(name as String);
smoker.removeByName("minecraft:furnace");
```

| 参数       | 类型          | 描述                                |
| -------- | ----------- | --------------------------------- |
| name（名称） | 字符串[string] | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
smoker.removeByRegex(regex as String);
smoker.removeByRegex("\\d_\\d");
```

| 参数    | 类型          | 描述                     |
| ----- | ----------- | ---------------------- |
| regex | 字符串[string] | regex to match against |


### 删除合成表

Remove a recipe based on it's output.

```zenscript
smoker.removeRecipe(output as crafttweaker.api.item.IItemStack);
smoker.removeRecipe(<item:minecraft:glass>);
```

| 参数         | 类型                                                                | 描述                   |
| ---------- | ----------------------------------------------------------------- | -------------------- |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



移除基于输出和输入的合成表

```zenscript
smoker.removeRecipe(output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
smoker.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| 参数         | 类型                                                                  | 描述          |
| ---------- | ------------------------------------------------------------------- | ----------- |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | 合成表的输出物品id. |
| input（输入）  | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | 要移除的配方的成分。  |



