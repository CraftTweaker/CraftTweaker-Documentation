# BlockRenderType

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.BlockRenderType;
```


## Enum Constants

BlockRenderType is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript

// Solid, opaque. This is the default value.
BlockRenderType.SOLID

// Translucent, like vanilla ice and water
BlockRenderType.TRANSLUCENT

// Transparent, often used for non-full blocks, like saplings and beds.
BlockRenderType.CUTOUT

// Transparent, but mip mapped, like vanilla glass.
BlockRenderType.CUTOUT_MIPPED
```
## Static Properties

| 名称            | 类型                                                                | 可获得  | 可设置   | 描述                                                                   |
| ------------- | ----------------------------------------------------------------- | ---- | ----- | -------------------------------------------------------------------- |
| CUTOUT        | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true | false | Transparent, often used for non-full blocks, like saplings and beds. |
| CUTOUT_MIPPED | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true | false | Transparent, but mip mapped, like vanilla glass.                     |
| SOLID         | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true | false | Solid, opaque. This is the default value.                            |
| TRANSLUCENT   | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true | false | Translucent, like vanilla ice and water                              |

