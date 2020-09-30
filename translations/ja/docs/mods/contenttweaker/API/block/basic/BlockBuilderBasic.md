# BlockBuilderBasic

This builder builds the block type that is used by default in [mods.contenttweaker.block.basic.BlockBuilderBasic#build](/mods/contenttweaker/API/block/basic/BlockBuilderBasic/#build) This builder does not offer any special properties to set, you can only build it.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## クラスのインポート
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.block.basic.BlockBuilderBasic
```

## Implemented Interfaces
BlockBuilderBasic implements the following interfaces. つまり、これらのクラスで使用できるすべてのメソッドをこのクラスで使用することができます。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## メソッド
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new BlockBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parameter        | Type | Description                          |
| ---------------- | ---- | ------------------------------------ |
| resourceLocation | 文字列型 | The resource path to give this block |



