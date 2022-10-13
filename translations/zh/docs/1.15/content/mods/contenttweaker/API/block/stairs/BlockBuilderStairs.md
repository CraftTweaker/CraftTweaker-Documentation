# BlockBuilderStairs

A special Block Builder that allows you to create stairs. <p> Stairs will have not one but three textures that you will need to supply: One for the top, one for the bottom and one for the sides. By default these textures will use your blockname as name, suffixed by `_top`, `_bottom` or `_sides`. As with most things here, sample images are generated for you by default, though.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweeper.block.stairs.BlockBuilderStairs
```

## 已实现的接口
BlockBuilderStairs implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweeper.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## 使用方式
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| 参数               | 类型          | 描述                                   |
| ---------------- | ----------- | ------------------------------------ |
| resourceLocation | 字符串[string] | The resource path to give this block |


### withBottomTexture

Allows you to override the path of the texture that the bottom side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweeper.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
```

| 参数            | 类型                                       | 描述                                         |
| ------------- | ---------------------------------------- | ------------------------------------------ |
| bottomTexture | crafttweaker.api.util.MCResourceLocation | The texture to be used for the bottom side |



Allows you to override the path of the texture that the bottom side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweeper.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
新 BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(底部纹理作为函数。函数<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(blockname as MCResourceLocation) => new MCResourceLocation(blockName.namespace, namel.pace + "_bown");
```

| 参数            | 类型                                                                                                                      | 描述                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------- |
| bottomTexture | function.Function&lt;crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation&gt; | The function to use |


### withSidesTexture

Allows you to override the path of the texture that the sides should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweeper.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
```

| 参数           | 类型                                       | 描述                                   |
| ------------ | ---------------------------------------- | ------------------------------------ |
| sidesTexture | crafttweaker.api.util.MCResourceLocation | The texture to be used for the sides |



Allows you to override the path of the texture that the sides should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweeper.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
新 BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture (sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(blockname as MCResourceLocation) => new MCResourceLocation(nblockName.namespace, blockName.path + "_sides");
```

| 参数           | 类型                                                                                                                      | 描述                  |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------- |
| sidesTexture | function.Function&lt;crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation&gt; | The function to use |


### withTopTexture

Allows you to override the path of the texture that the top side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweeper.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| 参数         | 类型                                       | 描述                                      |
| ---------- | ---------------------------------------- | --------------------------------------- |
| topTexture | crafttweaker.api.util.MCResourceLocation | The texture to be used for the top side |



Allows you to override the path of the texture that the top side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

 Returns: `This builder, used for method chaining`

返回类型： [mods.contenttweeper.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
新 BlockBuilder().withType<BlockBuilderStairs>().withTopTexture (topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
```

| 参数         | 类型                                                                                                                      | 描述                  |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------- |
| topTexture | function.Function&lt;crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation&gt; | The function to use |



