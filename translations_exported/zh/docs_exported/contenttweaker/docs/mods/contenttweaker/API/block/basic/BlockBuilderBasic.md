# BlockBuilderBasic

This builder builds the block type that is used by default in [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)#build This builder does not offer any special properties to set, you can only build it.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.basic.BlockBuilderBasic;
```


## Extending BlockTypeBuilder

BlockBuilderBasic extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderBasic

## 方法

:::group{name=build}

Instructs CoT to actually build whatever this builder is supposed to be building.

Return Type: void

```zenscript
// BlockBuilderBasic.build(resourceLocation as string) as void

new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| 参数               | 类型     | 描述                                   |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | string | The resource path to give this block |


:::


