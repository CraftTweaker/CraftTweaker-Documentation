# BlockBuilderSlab

A special builder that allows you to create slabs.

 <p>
 By default, this has 3 textures, one for the top, bottom and the sides.
 As with most things here, sample images are generated for you by default, though.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.  
```zenscript
mods.contenttweaker.block.slab.BlockBuilderSlab
```

## Implemented Interfaces
BlockBuilderSlab implements the following interfaces. That means any method available to them can also be used on this class.  
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Methods
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderSlab>().build("my_awesome_block");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| resourceLocation | String | The resource path to give this block |


### withBottomTexture

Allows you to override the path of the texture that the bottom should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture(<resource:contenttweaker:my_awesome_slab_bottom>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| bottomTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides. |



Allows you to override the path of the texture that the bottom should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.
 Uses a function that takes the block's name as input and returns the bottom texture for it.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture(bottomTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_top"));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| bottomTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


### withSideTexture

Allows you to override the path of the texture that the sides (everything but top/bottom) should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture(<resource:contenttweaker:my_awesome_slab_side>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides. |



Allows you to override the path of the texture that the sides (everything but top/bottom) should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.
 Uses a function that takes the block's name as input and returns the sides texture for it.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


### withTopTexture

Allows you to override the path of the texture that the top should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture(<resource:contenttweaker:my_awesome_slab_top>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| topTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides. |



Allows you to override the path of the texture that the top should use.
 If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.
 Uses a function that takes the block's name as input and returns the top texture for it.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture(topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_top"));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| topTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |



