# BlockRenderType

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.BlockRenderType;
```


## Extending Enum&lt;BlockRenderType&gt;

BlockRenderType extends Enum&lt;[BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType)&gt;. That means all methods available in Enum&lt;[BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType)&gt; are also available in BlockRenderType

## Static Properties

| 名称            | 类型                                                                | 可获得  | 可设置   | 描述                                                                   |
| ------------- | ----------------------------------------------------------------- | ---- | ----- | -------------------------------------------------------------------- |
| CUTOUT        | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true | false | Transparent, often used for non-full blocks, like saplings and beds. |
| CUTOUT_MIPPED | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true | false | Transparent, but mip mapped, like vanilla glass.                     |
| SOLID         | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true | false | Solid, opaque. This is the default value.                            |
| TRANSLUCENT   | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true | false | Translucent, like vanilla ice and water                              |

