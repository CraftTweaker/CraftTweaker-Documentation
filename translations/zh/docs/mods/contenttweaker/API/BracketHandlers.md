# 骨架处理程序

我建议不要直接使用这个类中的静态方法，因为它们可以在任何时候并入CrT's BEP。 如果您需要动态访问Bracket 表达式解析方法，您可以使用
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

这个类是由模组添加的，有模组id `内容较弱`。 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweaker.BracketHandlers
```

## 方法
### getItemGroup

获取项目组。 如果找不到群组将出现错误

 返回： `找到的 MCItemGroup`

返回类型： [mods.contenttweiner.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

mods.contenttweeper.BracketHandlers.getItemGroup(tokens as String);
mods.contenttweeper.BracketHandlers.getItemGroup("misc");
```

| 参数 | 类型          | 描述                  |
| -- | ----------- | ------------------- |
| 令牌 | 字符串[string] | 您在 BEP 调用中创建数据复合的内容 |


### getToolType

获取 [mods.contenttweeper.item.MCToolType](/mods/contenttweaker/API/item/MCToolType)。 如果给定的不存在，将创建一个新的一个。

 返回： `如果找到 [mods.contenttweaker.item.MCToolType](/mods/contenttweiler/API/item/MCToolType)，或新的 MCToolType`

返回类型： [mods.contenttweiner.item.MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

mods.contenttweeper.BracketHandlers.getToolType(tokens as String);
mods.contenttweeper.BracketHandlers.getToolType("shovel");
```

| 参数 | 类型          | 描述                    |
| -- | ----------- | --------------------- |
| 令牌 | 字符串[string] | 您想要在 BEP 调用中创建数据复合的内容 |



