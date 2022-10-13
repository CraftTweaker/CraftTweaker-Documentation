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

CoT에게 이 제작기가 빌드해야 하는 모든 블록을 실제로 빌드하도록 지시합니다.

Return Type: void

```zenscript
// BlockBuilderFalling.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderFalling>().build("my_awesome_block");
```

| Parameter        | Type   | Description   |
| ---------------- | ------ | ------------- |
| resourceLocation | string | 해당 블록의 리소스 경로 |


:::

:::group{name=withDustColor}

Allows you to override the dust color of this falling block. The dust color is used when the block is floating with nothing beneath it.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderFalling](/mods/contenttweaker/API/block/basic/BlockBuilderFalling)

```zenscript
// BlockBuilderFalling.withDustColor(dustFunc as IFallingBlockDustColorSupplier) as BlockBuilderFalling

new BlockBuilder().withType<BlockBuilderFalling>().withDustColor((thisBlock, state, reader, pos) => 0xFF55FF);
```

| Parameter | Type                                                                                                | Description                                |
| --------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| dustFunc  | [IFallingBlockDustColorSupplier](/mods/contenttweaker/API/functions/IFallingBlockDustColorSupplier) | The function that provides the dust color. |


:::


