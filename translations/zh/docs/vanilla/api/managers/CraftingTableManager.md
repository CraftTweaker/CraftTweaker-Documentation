# CraftingTableManager #工作台合成表管理



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.CraftingTableManager
```

## 已实现的接口
CraftingTableManager实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## 使用方式
### addJSONRecipe #添加JSON配方

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

```zenscript
craftingTable.addJSONRecipe(name as String, data as craftbiner.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {component:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数       | 类型                                                     | 描述           |
| -------- | ------------------------------------------------------ | ------------ |
| name（名称） | String                                                 | 配方名称         |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 代表json 文件的数据 |


### 添加了

将形状的配方添加到工作台中

```zenscript
craftingTable.addShaped(recipeName as String, output as craftwiner.api.item.IItemStack, conditions as craftwiner.api.item.IIngredient[], recipeFunction as com.blamijared.crafttbiner.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable. ddShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (用作IItemStack, 输入 IItemStack[]) => {if(input[0][0]. isplayname == "完全真实的钻石块" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| 参数         | 类型                                                                            | 说明                                                                                         | 可选的   | 默认值 |
| ---------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ----- | --- |
| 累计名称       | 字符串[string]                                                                   | 要添加的配方名称。                                                                                  | false | 空的  |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)             | output IItemStack                                                                          | false | 空的  |
| 成分：        | [craftbinstruer.api.item.Ingredient](/vanilla/api/items/IIngredient)[]        | 输入的 IIngredient 数组数组                                                                       | false | 空的  |
| 累犯功能       | com.blamejared.craftminstrer.api.managers.IRecipeManager.RecipeFunctionMatrix | 可选的 com.blamejared.craftbinstrer.api.managers.IRecipeManager.RecipeFunctionMatrix 用于更高级的条件 | true  | 空的  |


### addShapedMirrored

将镜像形状配方添加到工作台中

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as craftbiner.api.item.IItemStack, conditions as craftwiner.api.item.IIngredient[], recipeFunction as com.blamejared.craftminer.api.managers.IRecipeFunctionMatrix);
craftingTable.addShapedMirrored("recipe_name", [<item:minecraft:diamond>], [<item:minecraft:diamond> ], [<tag:minecraft:wool>]]);
craftingTable ddd ShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (用作IItemStack, 输入 IItemStack[]) => {if(input[0][0]. isplayname == "完全真实的钻石块" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| 参数         | 类型                                                                            | 描述                                                                                         | 可选的   | 默认值 |
| ---------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ----- | --- |
| 累计名称       | 字符串[string]                                                                   | 要添加的配方名称。                                                                                  | false | 空的  |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)             | output IItemStack                                                                          | false | 空的  |
| 成分：        | [craftbinstruer.api.item.Ingredient](/vanilla/api/items/IIngredient)[]        | 输入的 IIngredient 数组数组                                                                       | false | 空的  |
| 累犯功能       | com.blamejared.craftminstrer.api.managers.IRecipeManager.RecipeFunctionMatrix | 可选的 com.blamejared.craftbinstrer.api.managers.IRecipeManager.RecipeFunctionMatrix 用于更高级的条件 | true  | 空的  |


### addShapeless

在制造桌上添加一个无耻的配方

```zenscript
craftingTable.addShapeless(recipeName as String, output as craftwiner.api.item.IItemStack, components as craftbiner.api.item.IIngredient[], recipeFunction as com.blamejared.craftbiner.api.managers.IRecipeManager.RecipeFunctionArray);
craftingTable. ddShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable ddShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut as IItemStack, input as IItemStack[]) => {if(input[0]. isplayname == "完全真实的钻石块" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| 参数         | 类型                                                                           | 描述                                                                                        | 可选的   | 默认值 |
| ---------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----- | --- |
| 累计名称       | 字符串[string]                                                                  | 要添加的配方名称。                                                                                 | false | 空的  |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                         | false | 空的  |
| 成分：        | [craftminstruer.api.item.IIngredient](/vanilla/api/items/IIngredient)[]      | 输入的 IIngredient 数组                                                                        | false | 空的  |
| 累犯功能       | com.blamejared.craftminstrer.api.managers.IRecipeManager.RecipeFunctionArray | 可选的 com.blamejared.craftbinstrer.api.managers.IRecipeManager.RecipeFunctionArray 获取更高级的条件 | true  | 空的  |


### 全部移除

删除此注册表中的所有配方

```zenscript
craftingTable.removeAll();
```

### 移除 ByModid

删除基于注册表名称莫迪的配方

```zenscript
craftingTable.removeByModed(modified as String);
craftingTable.removeByModed("minecraft");
```

| 参数  | 类型          | 描述          |
| --- | ----------- | ----------- |
| 莫多德 | 字符串[string] | 已删除配方的 modo |


### removeByName

删除基于注册表名称的配方

```zenscript
craftingTable.removeByname(名称为字符串);
craftingTable.removeByname("minecraft:furchace");
```

| 参数 | 类型          | 描述           |
| -- | ----------- | ------------ |
| 名称 | 字符串[string] | 要删除的配方的注册表名称 |


### removeByRegex

基于正则表达式删除配方

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\d_\\d");
```

| 参数    | 类型          | 描述      |
| ----- | ----------- | ------- |
| 正则表达式 | 字符串[string] | 正则表达式匹配 |


### 删除合成表

移除基于其输出的配方。

```zenscript
craftingTable.removeRecipe(输出为 craftbiner.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| 参数         | 类型                                                                | 描述    |
| ---------- | ----------------------------------------------------------------- | ----- |
| output（输出） | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 配方的输出 |



