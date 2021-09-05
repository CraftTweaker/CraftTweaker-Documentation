# BlockBuilderStairs

A special Block Builder that allows you to create stairs. <p> Stairs will have not one but three textures that you will need to supply: One for the top, one for the bottom and one for the sides. By default these textures will use your blockname as name, suffixed by `_top`, `_bottom` or `_sides`. 대부분의 경우와 마찬가지로, 기본적으로 샘플 이미지가 생성되어 제공됩니다.

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

CoT에게 이 제작기가 빌드해야 하는 모든 블록을 실제로 빌드하도록 지시합니다.

Return Type: void

```zenscript
// BlockBuilderStairs.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| Parameter        | Type   | Description   |
| ---------------- | ------ | ------------- |
| resourceLocation | string | 해당 블록의 리소스 경로 |


:::

:::group{name=withBottomTexture}

Allows you to override the path of the texture that the bottom side should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다. 블록의 이름을 입력으로 받아 끝 면 텍스처를 반환하는 함수를 씁니다.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
// BlockBuilderStairs.withBottomTexture(bottomTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs

new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| Parameter     | Type                                                                                                                                              | Description |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| bottomTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 사용할 함수      |


:::

:::group{name=withBottomTexture}

Allows you to override the path of the texture that the bottom side should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withBottomTexture(bottomTexture as MCResourceLocation) as BlockBuilderStairs
```

| Parameter     | Type                                                       | Description                                |
| ------------- | ---------------------------------------------------------- | ------------------------------------------ |
| bottomTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the bottom side |


:::

:::group{name=withSidesTexture}

Allows you to override the path of the texture that the sides should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다. 블록의 이름을 입력으로 받아 끝 면 텍스처를 반환하는 함수를 씁니다.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
// BlockBuilderStairs.withSidesTexture(sidesTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs

new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                              | Description |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| sidesTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 사용할 함수      |


:::

:::group{name=withSidesTexture}

Allows you to override the path of the texture that the sides should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withSidesTexture(sidesTexture as MCResourceLocation) as BlockBuilderStairs
```

| Parameter    | Type                                                       | Description                          |
| ------------ | ---------------------------------------------------------- | ------------------------------------ |
| sidesTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides |


:::

:::group{name=withTopTexture}

Allows you to override the path of the texture that the top side should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다. 블록의 이름을 입력으로 받아 끝 면 텍스처를 반환하는 함수를 씁니다.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withTopTexture(topTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs
```

| Parameter  | Type                                                                                                                                              | Description |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| topTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 사용할 함수      |


:::

:::group{name=withTopTexture}

Allows you to override the path of the texture that the top side should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
// BlockBuilderStairs.withTopTexture(topTexture as MCResourceLocation) as BlockBuilderStairs

new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Parameter  | Type                                                       | Description                             |
| ---------- | ---------------------------------------------------------- | --------------------------------------- |
| topTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the top side |


:::


