# BlockBuilderStairs

A special Block Builder that allows you to create stairs. <p> Stairs will have not one but three textures that you will need to supply: One for the top, one for the bottom and one for the sides. By default these textures will use your blockname as name, suffixed by `_top`, `_bottom` or `_sides`. As with most things here, sample images are generated for you by default, though.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.stairs.BlockBuilderStairs;
```


## Extending BlockTypeBuilder

BlockBuilderStairs extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderStairs

## Methods

### withBottomTexture

Allows you to override the path of the texture that the bottom side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withBottomTexture(bottomTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```
| Parameter     | Type                                                                                                                                              | Description         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| bottomTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |

Allows you to override the path of the texture that the bottom side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withBottomTexture(bottomTexture as MCResourceLocation) as BlockBuilderStairs
```
| Parameter     | Type                                                       | Description                                |
| ------------- | ---------------------------------------------------------- | ------------------------------------------ |
| bottomTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the bottom side |

### withSidesTexture

Allows you to override the path of the texture that the sides should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withSidesTexture(sidesTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_sides"));
```
| Parameter    | Type                                                                                                                                              | Description         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| sidesTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |

Allows you to override the path of the texture that the sides should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withSidesTexture(sidesTexture as MCResourceLocation) as BlockBuilderStairs
```
| Parameter    | Type                                                       | Description                          |
| ------------ | ---------------------------------------------------------- | ------------------------------------ |
| sidesTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides |

### withTopTexture

Allows you to override the path of the texture that the top side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default. Uses a function that takes the block's name as input and returns the end texture for it.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withTopTexture(topTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs
```
| Parameter  | Type                                                                                                                                              | Description         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| topTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | The function to use |

Allows you to override the path of the texture that the top side should use. If that texture's namespace is in the namespace of CoT or any of its addons (that support it) then the image will be created by default.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withTopTexture(topTexture as MCResourceLocation) as BlockBuilderStairs
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```
| Parameter  | Type                                                       | Description                             |
| ---------- | ---------------------------------------------------------- | --------------------------------------- |
| topTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the top side |


