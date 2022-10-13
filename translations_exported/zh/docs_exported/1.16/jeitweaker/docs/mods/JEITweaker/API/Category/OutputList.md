::since{version=1.1.0}
# OutputList

Represents a recipe that has no inputs, but produces a certain set of outputs.

 The amount of rows of output can be manually set. Each row has space for up to 9 outputs.

This class was added by a mod with mod-id `jeitweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.category.OutputList;
```


## Extending SimpleJeiCategory

OutputList extends [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory). That means all methods available in [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory) are also available in OutputList

## 参数

| 名称   | 类型   | 可获得   | 可设置  | 描述                                                              |
| ---- | ---- | ----- | ---- | --------------------------------------------------------------- |
| rows | void | false | true | Sets the amount of rows that should be present for each recipe. |

