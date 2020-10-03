# BracketHandlers

I advise against using the static methods in this class directly as they may be merged into CrT's BEP at any point. If you need to access the Bracket Expression Parser methods dynamically, you can use
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweaker.BracketHandlers
```

## 使用方式
### getItemGroup

Gets the itemGroup. Will throw an error if the group could not be found

 Returns: `The found MCItemGroup`

Return type: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

mods.contenttweaker.BracketHandlers.getItemGroup(tokens as String);
mods.contenttweaker.BracketHandlers.getItemGroup("misc");
```

| 参数     | 返回值类型       | 描述                                          |
| ------ | ----------- | ------------------------------------------- |
| tokens | 字符串[string] | What you createDataCompound in the BEP call |


### getToolType

Gets a [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType). Will create a new one if the given one does not exist.

 Returns: `The [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) if found, or a new MCToolType`

Return type: [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

mods.contenttweaker.BracketHandlers.getToolType(tokens as String);
mods.contenttweaker.BracketHandlers.getToolType("shovel");
```

| 参数     | 返回值类型  | 描述                                                |
| ------ | ------ | ------------------------------------------------- |
| tokens | String | What you would createDataCompound in the BEP call |



