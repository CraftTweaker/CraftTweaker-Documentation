# BlockBuilderFalling

A special builder that allows you to create falling blocks.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.basic.BlockBuilderFalling;
```


## Extending BlockTypeBuilder

BlockBuilderFalling extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderFalling

## 使用方式

:::group{name=build}

Instructs CoT to actually build whatever this builder is supposed to be building.

Return Type: void

```zenscript
// BlockBuilderFalling.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderFalling>().build("my_awesome_block");
```

| 参数               | 类型     | 描述                                   |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | string | The resource path to give this block |


:::

:::group{name=withDustColor}

Allows you to override the dust color of this falling block. The dust color is used when the block is floating with nothing beneath it.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderFalling](/mods/contenttweaker/API/block/basic/BlockBuilderFalling)

```zenscript
// BlockBuilderFalling.withDustColor(dustFunc as IFallingBlockDustColorSupplier) as BlockBuilderFalling

new BlockBuilder().withType<BlockBuilderFalling>().withDustColor((thisBlock, state, reader, pos) => 0xFF55FF);
```

| 参数       | 类型                                                                                                  | 描述                                         |
| -------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| dustFunc | [IFallingBlockDustColorSupplier](/mods/contenttweaker/API/functions/IFallingBlockDustColorSupplier) | The function that provides the dust color. |


:::


