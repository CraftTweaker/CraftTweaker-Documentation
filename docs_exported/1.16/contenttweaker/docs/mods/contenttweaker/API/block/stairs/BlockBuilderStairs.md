# BlockBuilderStairs

A special Block Builder that allows you to create stairs.
 
 Stairs will have not one but three textures that you will need to supply:
 One for the top, one for the bottom and one for the sides.
 By default these textures will use your blockname as name, suffixed by `_top`, `_bottom` or `_sides`.
 As with most things here, sample images are generated for you by default, though.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.stairs.BlockBuilderStairs;
```


## Extending BlockTypeBuilder

BlockBuilderStairs extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderStairs

## Methods

:::group{name=build}

Instructs CoT to actually build whatever this builder is supposed to be building.

Return Type: void

```zenscript
// BlockBuilderStairs.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| resourceLocation | string | The resource path to give this block |


:::

:::group{name=withBottomTexture}

Allows you to override the path of the texture that the bottom side should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.
 Uses a function that takes the block's name as input and returns the end texture for it.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
// BlockBuilderStairs.withBottomTexture(bottomTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs

new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| bottomTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


:::

:::group{name=withBottomTexture}

Allows you to override the path of the texture that the bottom side should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withBottomTexture(bottomTexture as MCResourceLocation) as BlockBuilderStairs
```

| Parameter | Type | Description |
|-----------|------|-------------|
| bottomTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the bottom side |


:::

:::group{name=withSidesTexture}

Allows you to override the path of the texture that the sides should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.
 Uses a function that takes the block's name as input and returns the end texture for it.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
// BlockBuilderStairs.withSidesTexture(sidesTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs

new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| sidesTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


:::

:::group{name=withSidesTexture}

Allows you to override the path of the texture that the sides should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withSidesTexture(sidesTexture as MCResourceLocation) as BlockBuilderStairs
```

| Parameter | Type | Description |
|-----------|------|-------------|
| sidesTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides |


:::

:::group{name=withTopTexture}

Allows you to override the path of the texture that the top side should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.
 Uses a function that takes the block's name as input and returns the end texture for it.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withTopTexture(topTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs
```

| Parameter | Type | Description |
|-----------|------|-------------|
| topTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


:::

:::group{name=withTopTexture}

Allows you to override the path of the texture that the top side should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
// BlockBuilderStairs.withTopTexture(topTexture as MCResourceLocation) as BlockBuilderStairs

new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| topTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the top side |


:::


