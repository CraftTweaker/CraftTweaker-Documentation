# BlockBuilderPillarRotatable

통나무처럼 회전할 수 있는 블록을 만들 수 있는 특수 블록 제작기입니다. <p> 즉 이 제작기는 위와 아래에 하나의 텍스처를 사용하고 옆면에는 하나의 텍스처를 사용하는 블록을 만들 수 있습니다. 보통 이런 블록의 면을 지칭할 때는 이름에 `_end`나 `sides`가 따라붙습니다. 대부분의 경우와 마찬가지로, 기본적으로 샘플 이미지가 생성되어 제공됩니다.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable;
```


## Extending BlockTypeBuilder

BlockBuilderPillarRotatable extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderPillarRotatable

## Methods

:::group{name=build}

CoT에게 이 제작기가 빌드해야 하는 모든 블록을 실제로 빌드하도록 지시합니다.

Return Type: void

```zenscript
// BlockBuilderPillarRotatable.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderPillarRotatable>().build("my_awesome_block");
```

| Parameter        | Type   | Description   |
| ---------------- | ------ | ------------- |
| resourceLocation | string | 해당 블록의 리소스 경로 |


:::

:::group{name=withEndTexture}

끝 면(위/아래)에서 써야 하는 텍스처의 경로를 재정의합니다. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다. 블록의 이름을 입력으로 받아 끝 면 텍스처를 반환하는 함수를 씁니다.

Return Type: [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
// BlockBuilderPillarRotatable.withEndTexture(endTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderPillarRotatable

new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_end"));
```

| Parameter  | Type                                                                                                                                              | Description |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| endTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 사용할 함수      |


:::

:::group{name=withEndTexture}

끝 면(위/아래)에서 써야 하는 텍스처의 경로를 재정의합니다. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다.

Return Type: [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
// BlockBuilderPillarRotatable.withEndTexture(endTexture as MCResourceLocation) as BlockBuilderPillarRotatable

new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(<resource:contenttweaker:my_awesome_pillar_end>);
```

| Parameter  | Type                                                       | Description |
| ---------- | ---------------------------------------------------------- | ----------- |
| endTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 끝 면에 쓰일 텍스처 |


:::

:::group{name=withSideTexture}

측면(위/아래 제외 모든 면)에서 써야 하는 텍스처의 경로를 재정의합니다. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다. Uses a function that takes the block's name as input and returns the side texture for it.

Return Type: [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
// BlockBuilderPillarRotatable.withSideTexture(sidesTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderPillarRotatable

new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                              | Description |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| sidesTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 사용할 함수      |


:::

:::group{name=withSideTexture}

측면(위/아래 제외 모든 면)에서 써야 하는 텍스처의 경로를 재정의합니다. 해당 텍스처의 네임스페이스가 CoT의 네임스페이스나 이를 지원하는 애드온에 있는 경우 기본적으로 이미지가 생성됩니다.

Return Type: [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
// BlockBuilderPillarRotatable.withSideTexture(sidesTexture as MCResourceLocation) as BlockBuilderPillarRotatable

new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(<resource:contenttweaker:my_awesome_pillar_side>);
```

| Parameter    | Type                                                       | Description |
| ------------ | ---------------------------------------------------------- | ----------- |
| sidesTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 측면에 쓰일 텍스처  |


:::


