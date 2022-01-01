# BlockRenderType

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

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

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| CUTOUT | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true | false | Transparent, often used for non-full blocks, like saplings and beds. |
| CUTOUT_MIPPED | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true | false | Transparent, but mip mapped, like vanilla glass. |
| SOLID | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true | false | Solid, opaque. This is the default value. |
| TRANSLUCENT | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | true | false | Translucent, like vanilla ice and water |

