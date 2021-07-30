# BlockBuilderStairs

A special Block Builder that allows you to create stairs. <p> Stairs will have not one but three textures that you will need to supply: One for the top, one for the bottom and one for the sides. By default these textures will use your blockname as name, suffixed by `_top`, `_bottom` or `_sides`. 대부분의 경우와 마찬가지로, 기본적으로 샘플 이미지가 생성되어 제공됩니다.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.block.stairs.BlockBuilderStairs
```

## Implemented Interfaces
BlockBuilderStairs implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Methods
### build

CoT에게 이 제작기가 빌드해야 하는 모든 블록을 실제로 빌드하도록 지시합니다.

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| Parameter        | Type   | Description   |
| ---------------- | ------ | ------------- |
| resourceLocation | String | 해당 블록의 리소스 경로 |


### withBottomTexture

Allows you to override the path of the texture that the bottom side should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
```

| Parameter     | Type                                                                             | Description                                |
| ------------- | -------------------------------------------------------------------------------- | ------------------------------------------ |
| bottomTexture | MCResourceLocation | The texture to be used for the bottom side |



Allows you to override the path of the texture that the bottom side should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다. 블록의 이름을 입력으로 받아 끝 면 텍스처를 반환하는 함수를 씁니다.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| Parameter     | Type                                                                                                                                                                                                    | Description |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| bottomTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 사용할 함수      |


### withSidesTexture

Allows you to override the path of the texture that the sides should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
```

| Parameter    | Type                                                                             | Description                          |
| ------------ | -------------------------------------------------------------------------------- | ------------------------------------ |
| sidesTexture | MCResourceLocation | The texture to be used for the sides |



Allows you to override the path of the texture that the sides should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다. 블록의 이름을 입력으로 받아 끝 면 텍스처를 반환하는 함수를 씁니다.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                                                                                    | Description |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 사용할 함수      |


### withTopTexture

Allows you to override the path of the texture that the top side should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Parameter  | Type                                                                             | Description                             |
| ---------- | -------------------------------------------------------------------------------- | --------------------------------------- |
| topTexture | MCResourceLocation | The texture to be used for the top side |



Allows you to override the path of the texture that the top side should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다. 블록의 이름을 입력으로 받아 끝 면 텍스처를 반환하는 함수를 씁니다.

 Returns: `This builder, used for method chaining`

Return type: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
```

| Parameter  | Type                                                                                                                                                                                                    | Description |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| topTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 사용할 함수      |



