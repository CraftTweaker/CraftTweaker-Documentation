# BlockBuilderFalling

A special builder that allows you to create falling blocks.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.basic.BlockBuilderFalling;
```


## Extending BlockTypeBuilder

BlockBuilderFalling extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderFalling

## Methods

:::group{name=build}

Instructs CoT to actually build whatever this builder is supposed to be building.

Return Type: void

```zenscript
// BlockBuilderFalling.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderFalling>().build("my_awesome_block");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| resourceLocation | string | The resource path to give this block |


:::

:::group{name=withDustColor}

Allows you to override the dust color of this falling block.
 The dust color is used when the block is floating with nothing beneath it.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderFalling](/mods/contenttweaker/API/block/basic/BlockBuilderFalling)

```zenscript
// BlockBuilderFalling.withDustColor(dustFunc as IFallingBlockDustColorSupplier) as BlockBuilderFalling

new BlockBuilder().withType<BlockBuilderFalling>().withDustColor((thisBlock, state, reader, pos) => 0xFF55FF);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| dustFunc | [IFallingBlockDustColorSupplier](/mods/contenttweaker/API/functions/IFallingBlockDustColorSupplier) | The function that provides the dust color. |


:::


