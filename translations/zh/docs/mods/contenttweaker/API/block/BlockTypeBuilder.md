# BlockTypeBuilder

表示用于构建特殊区块类型的特殊生成器。 用于 [mods.contenttweeper.block.BlockTypeBuilder#withType](/mods/contenttweaker/API/block/BlockTypeBuilder/#withtype)

这个类是由模组添加的，有模组id `内容较弱`。 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweeper.block.BlockTypeBuilder
```

## 已实现的接口
BlockTypeBuilder 实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## 方法
### 构建中

指示CoT实际建造任何这个建筑师的建筑物。

```zenscript
新 BlockBuilder().withType<BlockBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderBasic>().build("my_awesome_block");
```

| 参数   | 类型          | 描述        |
| ---- | ----------- | --------- |
| 资源位置 | 字符串[string] | 给此方块的资源路径 |



