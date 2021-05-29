# BlockTypeBuilder

Denotes a special builder that is used for building special block types. Used in [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)#withType

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.BlockTypeBuilder;
```


## Implemented Interfaces
BlockTypeBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in BlockTypeBuilder

- [IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Methods

:::group{name=build}

CoT에게 이 제작기가 빌드해야 하는 모든 블록을 실제로 빌드하도록 지시합니다.

Return Type: void

```zenscript
// BlockTypeBuilder.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderBasic>().build("my_awesome_block");
```

| Parameter        | Type   | Description   |
| ---------------- | ------ | ------------- |
| resourceLocation | string | 해당 블록의 리소스 경로 |


:::


