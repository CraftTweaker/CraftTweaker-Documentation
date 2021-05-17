# BlockBuilderStairs

A special Block Builder that allows you to create stairs. <p> Stairs will have not one but three textures that you will need to supply: One for the top, one for the bottom and one for the sides. By default these textures will use your blockname as name, suffixed by `_top`, `_bottom` or `_sides`. As with most things here, sample images are generated for you by default, though.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.stairs.BlockBuilderStairs;
```


## Extending BlockTypeBuilder

BlockBuilderStairs extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderStairs

## 方法

:::group{name=build}

Instructs CoT to actually build whatever this builder is supposed to be building.

Return Type: void

```zenscript
// BlockBuilderStairs.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| 参数               | 类型     | 描述                                   |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | string | The resource path to give this block |


:::

:::group{name=withBottomTexture}

Allows you to override the path of the texture that the bottom side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
// BlockBuilderStairs.withBottomTexture(bottomTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs

new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| 参数            | 类型                                                                                                                                                | 描述                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| bottomTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


:::

:::group{name=withBottomTexture}

Allows you to override the path of the texture that the bottom side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withBottomTexture(bottomTexture as MCResourceLocation) as BlockBuilderStairs
```

| 参数            | 类型                                                         | 描述                                         |
| ------------- | ---------------------------------------------------------- | ------------------------------------------ |
| bottomTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the bottom side |


:::

:::group{name=withSidesTexture}

Allows you to override the path of the texture that the sides should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
// BlockBuilderStairs.withSidesTexture(sidesTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs

new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| 参数           | 类型                                                                                                                                                | 描述                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| sidesTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


:::

:::group{name=withSidesTexture}

Allows you to override the path of the texture that the sides should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withSidesTexture(sidesTexture as MCResourceLocation) as BlockBuilderStairs
```

| 参数           | 类型                                                         | 描述                                   |
| ------------ | ---------------------------------------------------------- | ------------------------------------ |
| sidesTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides |


:::

:::group{name=withTopTexture}

Allows you to override the path of the texture that the top side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withTopTexture(topTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs
```

| 参数         | 类型                                                                                                                                                | 描述                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| topTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


:::

:::group{name=withTopTexture}

Allows you to override the path of the texture that the top side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
// BlockBuilderStairs.withTopTexture(topTexture as MCResourceLocation) as BlockBuilderStairs

new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| 参数         | 类型                                                         | 描述                                      |
| ---------- | ---------------------------------------------------------- | --------------------------------------- |
| topTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the top side |


:::


