# BlockBuilderBasic

[mods.contenttweaker.block.basic.BlockBuilderBasic#build](/mods/contenttweaker/API/block/basic/BlockBuilderBasic/#build)에서 기본적으로 쓰이는 블록을 만드는 데 쓸 수 있습니다. 여기서는 블록의 특별한 속성을 지정할 수 없으며, 제작만 할 수 있습니다.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.block.basic.BlockBuilderBasic
```

## Implemented Interfaces
BlockBuilderBasic은 아래와 같은 인터페이스를 구현합니다. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Methods
### build

CoT에게 이 제작기가 빌드해야 하는 모든 블록을 실제로 빌드하도록 지시합니다.

```zenscript
new BlockBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parameter        | Type   | Description   |
| ---------------- | ------ | ------------- |
| resourceLocation | String | 해당 블록의 리소스 경로 |



