# BlockBuilderPillarRotatable

一个特殊的区块生成器，允许您创建可以与日志同样旋转的区块。 <p> 这意味着它的顶部和底部有一个纹理，双方有一个纹理。 默认情况下，这些方的位置是方块的名称，然后是 `_end` 或 `边`。 与这里的大多数情况一样，样本图像是默认情况下为您生成的。

这个类是由模组添加的，有模组id `内容较弱`。 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweiner.block.pillar。BlockBuilderPillarRotatable
```

## 已实现的接口
BlockBuilderPillarRotatable 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweeper.block。BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## 方法
### 构建中

指示CoT实际建造任何这个建筑师的建筑物。

```zenscript
新 BlockBuilder().withType<BlockBuilderPillarRotatable>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build("my_awesome_block");
```

| 参数   | 返回值类型       | 描述        |
| ---- | ----------- | --------- |
| 资源位置 | 字符串[string] | 给此方块的资源路径 |


### withend纹理

允许您覆盖端边(顶部/底部)使用的纹理路径。 如果该文本的命名空间在 CoT 或其任一附加组件(支持它)的命名空间中，则默认情况下将创建图像。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweiner.block.pillar。BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
新 BlockBuilder().withType<BlockBuilderPillarRotatable>().withendTexture as craftweeker.api.util.MCResourceLocation;
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(<resource:contenttweaker:my_awesome_pillar_end>);
```

| 参数         | 返回值类型                                                                             | 描述          |
| ---------- | --------------------------------------------------------------------------------- | ----------- |
| endTexture | [craftminstrer.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 供最终两侧使用的纹理. |



允许您覆盖端边(顶部/底部)使用的纹理路径。 如果该文本的命名空间在 CoT 或其任一附加组件(支持它)的命名空间中，则默认情况下将创建图像。 使用以方块名称作为输入的函数并返回其最终纹理。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweiner.block.pillar。BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
新BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(端纹理为函数)。函数<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(fblockname as MCResourceLocation) => new MCResourceLocation(flockName.namespace, blockName.path + "_end");
```

| 参数         | 返回值类型                                                                                                                                                                                     | 描述     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| endTexture | 函数。函数&lt;[craftmiliter.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [craftbiner.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 要使用的函数 |


### 侧边框

允许您覆盖旁边(顶部/底部以外的一切)使用的纹理路径。 如果该文本的命名空间在 CoT 或其任一附加组件(支持它)的命名空间中，则默认情况下将创建图像。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweiner.block.pillar。BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
新 BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as craftweer.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(<resource:contenttweaker:my_awesome_pillar_side>);
```

| 参数           | 返回值类型                                                                             | 描述        |
| ------------ | --------------------------------------------------------------------------------- | --------- |
| sidesTexture | [craftminstrer.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 双方将使用的纹理。 |



允许您覆盖旁边(顶部/底部以外的一切)使用的纹理路径。 如果该文本的命名空间在 CoT 或其任一附加组件(支持它)的命名空间中，则默认情况下将创建图像。 使用以方块名称作为输入的函数并返回其最终纹理。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweiner.block.pillar。BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
新 BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture (sidesTexture as function).函数<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(blockname as MCResourceLocation) => new MCResourceLocation(flockName.namespace, blockName.path + "_sides");
```

| 参数           | 返回值类型                                                                                                                                                                                     | 描述     |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| sidesTexture | 函数。函数&lt;[craftmiliter.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [craftbiner.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 要使用的函数 |



