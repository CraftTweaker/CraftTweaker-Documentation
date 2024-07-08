# BannerPatternLayersBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.entity.BannerPatternLayersBuilder;
```


## Static Methods

:::group{name=of}

Return Type: [BannerPatternLayersBuilder](/vanilla/api/block/entity/BannerPatternLayersBuilder)

```zenscript
// BannerPatternLayersBuilder.of() as BannerPatternLayersBuilder

BannerPatternLayersBuilder.of();
```

:::

## Methods

:::group{name=add}

Return Type: [BannerPatternLayersBuilder](/vanilla/api/block/entity/BannerPatternLayersBuilder)

```zenscript
BannerPatternLayersBuilder.add(layer as BannerPatternLayersLayer) as BannerPatternLayersBuilder
```

| Parameter |                                      Type                                      |
|-----------|--------------------------------------------------------------------------------|
| layer     | [BannerPatternLayersLayer](/vanilla/api/block/entity/BannerPatternLayersLayer) |


:::

:::group{name=add}

Return Type: [BannerPatternLayersBuilder](/vanilla/api/block/entity/BannerPatternLayersBuilder)

```zenscript
BannerPatternLayersBuilder.add(pattern as BannerPattern, color as DyeColor) as BannerPatternLayersBuilder
```

| Parameter |                           Type                           |
|-----------|----------------------------------------------------------|
| pattern   | [BannerPattern](/vanilla/api/block/entity/BannerPattern) |
| color     | [DyeColor](/vanilla/api/item/component/DyeColor)         |


:::

:::group{name=addAll}

Return Type: [BannerPatternLayersBuilder](/vanilla/api/block/entity/BannerPatternLayersBuilder)

```zenscript
BannerPatternLayersBuilder.addAll(layers as BannerPatternLayers) as BannerPatternLayersBuilder
```

| Parameter |                                 Type                                 |
|-----------|----------------------------------------------------------------------|
| layers    | [BannerPatternLayers](/vanilla/api/block/entity/BannerPatternLayers) |


:::

:::group{name=build}

Return Type: [BannerPatternLayers](/vanilla/api/block/entity/BannerPatternLayers)

```zenscript
// BannerPatternLayersBuilder.build() as BannerPatternLayers

myBannerPatternLayersBuilder.build();
```

:::


