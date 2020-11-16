# BlockBuilderSlab

A special builder that allows you to create slabs.

 <p> By default, this has 3 textures, one for the top, bottom and the sides. As with most things here, sample images are generated for you by default, though.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweaker.block.slab.BlockBuilderSlab
```

## 已实现的接口
BlockBuilderSlab implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweeper.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## 方法
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderSlab>().build("my_awesome_block");
```

| 参数               | 类型     | 描述                                   |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | String | The resource path to give this block |


### withBottomTexture

Allows you to override the path of the texture that the bottom should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture(<resource:contenttweaker:my_awesome_slab_bottom>);
```

| 参数            | 类型                                                                               | 描述                                    |
| ------------- | -------------------------------------------------------------------------------- | ------------------------------------- |
| bottomTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides. |



Allows you to override the path of the texture that the bottom should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the bottom texture for it.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture(bottomTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_top"));
```

| 参数            | 类型                                                                                                                                                                                     | 描述                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| bottomTexture | 函数&lt;[craftmiliter.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [craftbiner.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


### withSideTexture

Allows you to override the path of the texture that the sides (everything but top/bottom) should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture(<resource:contenttweaker:my_awesome_slab_side>);
```

| 参数           | 类型                                                                               | 描述                                    |
| ------------ | -------------------------------------------------------------------------------- | ------------------------------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides. |



Allows you to override the path of the texture that the sides (everything but top/bottom) should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the sides texture for it.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| 参数           | 类型                                                                                                                                                                                     | 描述                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| sidesTexture | 函数&lt;[craftmiliter.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [craftbiner.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


### withTopTexture

Allows you to override the path of the texture that the top should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture(<resource:contenttweaker:my_awesome_slab_top>);
```

| 参数         | 类型                                                                               | 描述                                    |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------- |
| topTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides. |



Allows you to override the path of the texture that the top should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the top texture for it.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture(topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_top"));
```

| 参数         | 类型                                                                                                                                                                                     | 描述                  |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| topTexture | 函数&lt;[craftmiliter.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [craftbiner.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |



