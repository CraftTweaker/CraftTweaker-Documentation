# BlockBuilderSlab

A special builder that allows you to create slabs.

 
 By default, this has 3 textures, one for the top, bottom and the sides.
 As with most things here, sample images are generated for you by default, though.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.slab.BlockBuilderSlab;
```


## Extending BlockTypeBuilder

BlockBuilderSlab extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderSlab

## Methods

:::group{name=build}

Instructs CoT to actually build whatever this builder is supposed to be building.

Return Type: void

```zenscript
// BlockBuilderSlab.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderSlab>().build("my_awesome_block");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| resourceLocation | string | The resource path to give this block |


:::

:::group{name=withBottomTexture}

Allows you to override the path of the texture that the bottom should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.
 Uses a function that takes the block's name as input and returns the bottom texture for it.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withBottomTexture(bottomTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_top"));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| bottomTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


:::

:::group{name=withBottomTexture}

Allows you to override the path of the texture that the bottom should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withBottomTexture(bottomTexture as MCResourceLocation) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture(<resource:contenttweaker:my_awesome_slab_bottom>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| bottomTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides. |


:::

:::group{name=withSideTexture}

Allows you to override the path of the texture that the sides (everything but top/bottom) should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.
 Uses a function that takes the block's name as input and returns the sides texture for it.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withSideTexture(sidesTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| sidesTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


:::

:::group{name=withSideTexture}

Allows you to override the path of the texture that the sides (everything but top/bottom) should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withSideTexture(sidesTexture as MCResourceLocation) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture(<resource:contenttweaker:my_awesome_slab_side>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| sidesTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides. |


:::

:::group{name=withTopTexture}

Allows you to override the path of the texture that the top should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.
 Uses a function that takes the block's name as input and returns the top texture for it.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withTopTexture(topTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_top"));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| topTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


:::

:::group{name=withTopTexture}

Allows you to override the path of the texture that the top should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withTopTexture(topTexture as MCResourceLocation) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture(<resource:contenttweaker:my_awesome_slab_top>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| topTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides. |


:::


