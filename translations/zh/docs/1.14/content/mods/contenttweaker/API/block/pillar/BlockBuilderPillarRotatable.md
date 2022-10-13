# BlockBuilderPillarRotatable

A special Block Builder that allows you to create blocks that can be rotated in the same way as logs can. <p> This means that it has one texture for the top and bottom and one texture for the sides. By default these sides' locations are the block's name, followed by and either `_end` or `sides`. As with most things here, sample images are generated for you by default, though.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttmainer.block.pillar.BlockBuilderPillarRotatable
```

## 已实现的接口
BlockBuilderPillarRotatable implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweeper.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## 使用方式
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build("my_awesome_block");
```

| 参数               | 类型          | 描述                                   |
| ---------------- | ----------- | ------------------------------------ |
| resourceLocation | 字符串[string] | The resource path to give this block |


### withEndTexture

Allows you to override the path of the texture that the end sides (top/bottom) should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(<resource:contenttweaker:my_awesome_pillar_end>);
```

| 参数         | 类型                 | 描述                                        |
| ---------- | ------------------ | ----------------------------------------- |
| endTexture | MCResourceLocation | The texture to be used for the end sides. |



Allows you to override the path of the texture that the end sides (top/bottom) should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
新 BlockBuilder().withType<BlockBuilderPillarRotatable>().withendTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(blockname as MCResourceLocation) => new MCResourceLocation(flockName.namespace, blockName.path + "_end");
```

| 参数         | 类型                                                                          | 描述                  |
| ---------- | --------------------------------------------------------------------------- | ------------------- |
| endTexture | function.Function&lt;MCResourceLocation, MCResourceLocation&gt; | The function to use |


### withSideTexture

Allows you to override the path of the texture that the sides (everything but top/bottom) should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(<resource:contenttweaker:my_awesome_pillar_side>);
```

| 参数           | 类型                 | 描述                                    |
| ------------ | ------------------ | ------------------------------------- |
| sidesTexture | MCResourceLocation | The texture to be used for the sides. |



Allows you to override the path of the texture that the sides (everything but top/bottom) should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweiner.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
新 BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture (sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(blockname as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides");
```

| 参数           | 类型                                                                          | 描述                  |
| ------------ | --------------------------------------------------------------------------- | ------------------- |
| sidesTexture | function.Function&lt;MCResourceLocation, MCResourceLocation&gt; | The function to use |



