# BlockRenderType

This class was added by a mod with mod-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.BlockRenderType;
```


## Extending Enum&lt;BlockRenderType&gt;

BlockRenderType extends Enum&lt;[BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType)&gt;. That means all methods available in Enum&lt;[BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType)&gt; are also available in BlockRenderType

## Static Properties

| Название      | Тип                                                               | Имеет Getter | Имеет Setter | Description                                                          |
| ------------- | ----------------------------------------------------------------- | ------------ | ------------ | -------------------------------------------------------------------- |
| CUTOUT        | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true         | false        | Transparent, often used for non-full blocks, like saplings and beds. |
| CUTOUT_MIPPED | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true         | false        | Transparent, but mip mapped, like vanilla glass.                     |
| SOLID         | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true         | false        | Solid, opaque. This is the default value.                            |
| TRANSLUCENT   | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true         | false        | Translucent, like vanilla ice and water                              |

