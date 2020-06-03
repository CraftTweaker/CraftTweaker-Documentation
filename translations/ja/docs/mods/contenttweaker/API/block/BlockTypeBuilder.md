# BlockTypeBuilder

Denotes a special builder that is used for building special block types. Used in [mods.contenttweaker.block.BlockTypeBuilder#withType](/mods/contenttweaker/API/block/BlockTypeBuilder/#withtype)

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## クラスのインポート
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.block.BlockTypeBuilder
```

## Implemented Interfaces
BlockTypeBuilder implements the following interfaces. つまり、これらのクラスで使用できるすべてのメソッドをこのクラスで使用することができます。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## メソッド
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new BlockBuilder().withType<BlockBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderBasic>().build("my_awesome_block");
```

| Parameter        | Type | Description                          |
| ---------------- | ---- | ------------------------------------ |
| resourceLocation | 文字列型 | The resource path to give this block |



