# StoneCutterManager



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.StoneCutterManager
```

## 已实现的接口
StoneCutterManager implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## 使用方式
### addJSONRecipe #添加JSON配方

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

```zenscript
stoneCutter.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数       | 类型                                                     | 描述                              |
| -------- | ------------------------------------------------------ | ------------------------------- |
| name（名称） | 字符串[string]                                            | name of the recipe              |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe #添加合成表

Adds a recipe to the stone cutter

```zenscript
stoneCutter.addRecipe(recipeName as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```

| 参数         | 类型                                                                  | 描述                 |
| ---------- | ------------------------------------------------------------------- | ------------------ |
| recipeName | 字符串[string]                                                         | name of the recipe |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | output IItemStack  |
| input（输入）  | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | input IIngredient  |


### removeAll

Remove all recipes in this registry

```zenscript
stoneCutter.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
stoneCutter.removeByModid(modid as String);
stoneCutter.removeByModid("minecraft");
```

| 参数    | 类型          | 描述                             |
| ----- | ----------- | ------------------------------ |
| modid | 字符串[string] | modid of the recipes to remove |


### removeByName

Remove recipe based on Registry name

```zenscript
stoneCutter.removeByName(name as String);
stoneCutter.removeByName("minecraft:furnace");
```

| 参数       | 类型          | 描述                                |
| -------- | ----------- | --------------------------------- |
| name（名称） | 字符串[string] | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
stoneCutter.removeByRegex(regex as String);
stoneCutter.removeByRegex("\\d_\\d");
```

| 参数    | 类型          | 描述                     |
| ----- | ----------- | ---------------------- |
| regex | 字符串[string] | regex to match against |


### 删除合成表

Remove a recipe based on it's output.

```zenscript
stoneCutter.removeRecipe(output as crafttweaker.api.item.IItemStack);
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| 参数         | 类型                                                                | 描述                   |
| ---------- | ----------------------------------------------------------------- | -------------------- |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



## 参数

| 名称                   | 类型          | 可获得  | 可设置   |
| -------------------- | ----------- | ---- | ----- |
| commandString #命令字符串 | 字符串[string] | true | false |

