# BlockBuilderSlab

A special builder that allows you to create slabs.

 <p> By default, this has 3 textures, one for the top, bottom and the sides. 대부분의 경우와 마찬가지로, 기본적으로 샘플 이미지가 생성되어 제공됩니다.

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

CoT에게 이 제작기가 빌드해야 하는 모든 블록을 실제로 빌드하도록 지시합니다.

Return Type: void

```zenscript
// BlockBuilderSlab.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderSlab>().build("my_awesome_block");
```

| Parameter        | Type   | Description   |
| ---------------- | ------ | ------------- |
| resourceLocation | string | 해당 블록의 리소스 경로 |


:::

:::group{name=withBottomTexture}

Allows you to override the path of the texture that the bottom should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다. Uses a function that takes the block's name as input and returns the bottom texture for it.

Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withBottomTexture(bottomTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_top"));
```

| Parameter     | Type                                                                                                                                              | Description |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| bottomTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 사용할 함수      |


:::

:::group{name=withBottomTexture}

Allows you to override the path of the texture that the bottom should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다.

Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withBottomTexture(bottomTexture as MCResourceLocation) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture(<resource:contenttweaker:my_awesome_slab_bottom>);
```

| Parameter     | Type                                                       | Description |
| ------------- | ---------------------------------------------------------- | ----------- |
| bottomTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 측면에 쓰일 텍스처  |


:::

:::group{name=withSideTexture}

측면(위/아래 제외 모든 면)에서 써야 하는 텍스처의 경로를 재정의합니다. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다. Uses a function that takes the block's name as input and returns the sides texture for it.

Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withSideTexture(sidesTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                              | Description |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| sidesTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 사용할 함수      |


:::

:::group{name=withSideTexture}

측면(위/아래 제외 모든 면)에서 써야 하는 텍스처의 경로를 재정의합니다. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다.

Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withSideTexture(sidesTexture as MCResourceLocation) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture(<resource:contenttweaker:my_awesome_slab_side>);
```

| Parameter    | Type                                                       | Description |
| ------------ | ---------------------------------------------------------- | ----------- |
| sidesTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 측면에 쓰일 텍스처  |


:::

:::group{name=withTopTexture}

Allows you to override the path of the texture that the top should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다. Uses a function that takes the block's name as input and returns the top texture for it.

Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withTopTexture(topTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_top"));
```

| Parameter  | Type                                                                                                                                              | Description |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| topTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 사용할 함수      |


:::

:::group{name=withTopTexture}

Allows you to override the path of the texture that the top should use. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다.

Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withTopTexture(topTexture as MCResourceLocation) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture(<resource:contenttweaker:my_awesome_slab_top>);
```

| Parameter  | Type                                                       | Description |
| ---------- | ---------------------------------------------------------- | ----------- |
| topTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 측면에 쓰일 텍스처  |


:::


