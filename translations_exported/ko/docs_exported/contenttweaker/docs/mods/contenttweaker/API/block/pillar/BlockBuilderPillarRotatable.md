# BlockBuilderPillarRotatable

A special Block Builder that allows you to create blocks that can be rotated in the same way as logs can. <p> This means that it has one texture for the top and bottom and one texture for the sides. By default these sides' locations are the block's name, followed by and either `_end` or `sides`. As with most things here, sample images are generated for you by default, though.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable
```

## Implemented Interfaces
BlockBuilderPillarRotatable implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Methods
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build("my_awesome_block");
```

| Parameter        | Type   | Description                          |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | String | The resource path to give this block |


### withEndTexture

Allows you to override the path of the texture that the end sides (top/bottom) should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(<resource:contenttweaker:my_awesome_pillar_end>);
```

| Parameter  | Type                                                                             | Description                               |
| ---------- | -------------------------------------------------------------------------------- | ----------------------------------------- |
| endTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the end sides. |



Allows you to override the path of the texture that the end sides (top/bottom) should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_end"));
```

| Parameter  | Type                                                                                                                                                                                                    | Description         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| endTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |


### withSideTexture

Allows you to override the path of the texture that the sides (everything but top/bottom) should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(<resource:contenttweaker:my_awesome_pillar_side>);
```

| Parameter    | Type                                                                             | Description                           |
| ------------ | -------------------------------------------------------------------------------- | ------------------------------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides. |



Allows you to override the path of the texture that the sides (everything but top/bottom) should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                                                                                    | Description         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |



