# BlockBuilderBasic

此生成器构建默认在 [mods.contenttweeper.block.basic中使用的方块类型。 lockBuilderBasic#build](/mods/contenttweaker/API/block/basic/BlockBuilderBasic/#build) 此生成器不提供任何特殊属性，您只能构建它。

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweeper.block.basic.BlockBuilderBasic
```

## 已实现的接口
BlockBuilderBasic implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweeper.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## 使用方式
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new BlockBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| 参数               | 类型          | 描述                                   |
| ---------------- | ----------- | ------------------------------------ |
| resourceLocation | 字符串[string] | The resource path to give this block |



