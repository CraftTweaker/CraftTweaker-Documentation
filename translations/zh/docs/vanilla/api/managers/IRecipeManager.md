# IRecipeManager

基于注册表的处理程序默认接口，因为它们都可以通过资源定位移除配方。

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.registries.IRecipeManager
```

## 已实现的接口
IRecipeManager实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 方法
### addJSONRecipe #添加JSON配方

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

```zenscript
craftingTable.addJSONRecipe(name as String, data as craftbiner.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {component:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数   | 类型                                                     | 描述           |
| ---- | ------------------------------------------------------ | ------------ |
| 名称   | 字符串[string]                                            | 配方名称         |
| data | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 代表json 文件的数据 |


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



## 参数

| 名称                   | 类型          | 可获得  | 可设置   |
| -------------------- | ----------- | ---- | ----- |
| commandString #命令字符串 | 字符串[string] | true | false |

