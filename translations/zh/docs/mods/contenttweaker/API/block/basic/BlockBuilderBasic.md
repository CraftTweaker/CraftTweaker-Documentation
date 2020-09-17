# BlockBuilderBasic

此生成器构建默认在 [mods.contenttweeper.block.basic中使用的方块类型。BlockBuilderBasic#build](/mods/contenttweaker/API/block/basic/BlockBuilderBasic/#build) 此生成器不提供任何特殊属性，您只能构建它。

这个类是由模组添加的，有模组id `内容较弱`。 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweeper.block.basic。BlockBuilderBasic
```

## 已实现的接口
BlockBuilderBasic 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweeper.block。BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## 方法
### 构建中

指示CoT实际建造任何这个建筑师的建筑物。

```zenscript
新 BlockBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| 参数   | 返回值类型       | 描述        |
| ---- | ----------- | --------- |
| 资源位置 | 字符串[string] | 给此方块的资源路径 |



