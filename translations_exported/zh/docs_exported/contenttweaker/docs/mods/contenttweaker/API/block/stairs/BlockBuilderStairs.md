# BlockBuilderStairs

一个特殊的块生成器，允许您创建楼梯。 <p> 楼梯只能有三个你需要提供的纹理： 顶部一个, 一个是底部，一个是双方。 默认情况下，这些纹理将使用您的方块名称作为名称，由 `_top`， `_底部` 或 `_边` 后缀。 与这里的大多数情况一样，样本图像是默认情况下为您生成的。

这个类是由模组添加的，有模组id `内容较弱`。 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweeper.block.stairs.BlockBuilderStairs
```

## 已实现的接口
BlockBuilderStairs 实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweeper.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## 方法
### 构建中

指示CoT实际建造任何这个建筑师的建筑物。

```zenscript
新 BlockBuilder().withType<BlockBuilderStairs>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| 参数   | 类型          | 描述        |
| ---- | ----------- | --------- |
| 资源位置 | 字符串[string] | 给此方块的资源路径 |


### 与底部纹理

允许您覆盖底边应该使用的纹理路径。 如果该文本的命名空间在 CoT 或其任一附加组件(支持它)的命名空间中，则默认情况下将创建图像。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
新 BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(底部纹理作为craftweer.api.util.MCResourceLocation);
```

| 参数   | 类型                                                                                | 描述       |
| ---- | --------------------------------------------------------------------------------- | -------- |
| 底部纹理 | [craftminstrer.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 底部要使用的纹理 |



允许您覆盖底边应该使用的纹理路径。 如果该文本的命名空间在 CoT 或其任一附加组件(支持它)的命名空间中，则默认情况下将创建图像。 使用以方块名称作为输入的函数并返回其最终纹理。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
新 BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(底部纹理作为函数。函数<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(blockname as MCResourceLocation) => new MCResourceLocation(blockName.namespace, namel.pace + "_bown");
```

| 参数   | 类型                                                                                                                                                                                     | 描述     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 底部纹理 | 函数&lt;[craftmiliter.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [craftbiner.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 要使用的函数 |


### 西德纹理

允许您覆盖双方应该使用的纹理路径。 如果该文本的命名空间在 CoT 或其任一附加组件(支持它)的命名空间中，则默认情况下将创建图像。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
新 BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture (craftmile.api.util.MCResourceLocation);
```

| 参数           | 类型                                                                                | 描述       |
| ------------ | --------------------------------------------------------------------------------- | -------- |
| sidesTexture | [craftminstrer.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 双方要使用的纹理 |



允许您覆盖双方应该使用的纹理路径。 如果该文本的命名空间在 CoT 或其任一附加组件(支持它)的命名空间中，则默认情况下将创建图像。 使用以方块名称作为输入的函数并返回其最终纹理。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
新 BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture (sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(blockname as MCResourceLocation) => new MCResourceLocation(nblockName.namespace, blockName.path + "_sides");
```

| 参数           | 类型                                                                                                                                                                                     | 描述     |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| sidesTexture | 函数&lt;[craftmiliter.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [craftbiner.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 要使用的函数 |


### wittTop纹理

允许您覆盖上方应该使用的纹理路径。 如果该文本的命名空间在 CoT 或其任一附加组件(支持它)的命名空间中，则默认情况下将创建图像。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
新 BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as craftweer.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| 参数   | 类型                                                                                | 描述       |
| ---- | --------------------------------------------------------------------------------- | -------- |
| 顶部纹理 | [craftminstrer.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 顶部要使用的纹理 |



允许您覆盖上方应该使用的纹理路径。 如果该文本的命名空间在 CoT 或其任一附加组件(支持它)的命名空间中，则默认情况下将创建图像。 使用以方块名称作为输入的函数并返回其最终纹理。

 返回： `此生成器，用于方法链`

返回类型： [mods.contenttweeper.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
新 BlockBuilder().withType<BlockBuilderStairs>().withTopTexture (topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
```

| 参数   | 类型                                                                                                                                                                                     | 描述     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 顶部纹理 | 函数&lt;[craftmiliter.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [craftbiner.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 要使用的函数 |



