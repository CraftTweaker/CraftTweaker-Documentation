# BracketHandlers

I advise against using the static methods in this class directly as they may be merged into CrT's BEP at any point. If you need to access the Bracket Expression Parser methods dynamically, you can use
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.BracketHandlers;
```


## 方法

### getItemGroup

Gets the itemGroup. Will throw an error if the group could not be found

Returns: The found MCItemGroup Return Type: [MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

BracketHandlers.getItemGroup(tokens as string) as MCItemGroup
BracketHandlers.getItemGroup("misc");
```
| 参数     | 类型     | 描述                                          |
| ------ | ------ | ------------------------------------------- |
| tokens | string | What you createDataCompound in the BEP call |

### getToolType

Gets a [MCToolType](/mods/contenttweaker/API/item/MCToolType). Will create a new one if the given one does not exist.

Returns: The [MCToolType](/mods/contenttweaker/API/item/MCToolType) if found, or a new MCToolType Return Type: [MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

BracketHandlers.getToolType(tokens as string) as MCToolType
BracketHandlers.getToolType("shovel");
```
| 参数     | 类型     | 描述                                                |
| ------ | ------ | ------------------------------------------------- |
| tokens | string | What you would createDataCompound in the BEP call |

