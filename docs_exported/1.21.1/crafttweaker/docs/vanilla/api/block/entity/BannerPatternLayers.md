# BannerPatternLayers

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.entity.BannerPatternLayers;
```


## Extending Record

BannerPatternLayers extends Record. That means all methods available in Record are also available in BannerPatternLayers

## Static Methods

:::group{name=of}

Return Type: [BannerPatternLayers](/vanilla/api/block/entity/BannerPatternLayers)

```zenscript
BannerPatternLayers.of(layers as stdlib.List<BannerPatternLayersLayer>) as BannerPatternLayers
```

| Parameter |                                               Type                                                |
|-----------|---------------------------------------------------------------------------------------------------|
| layers    | stdlib.List&lt;[BannerPatternLayersLayer](/vanilla/api/block/entity/BannerPatternLayersLayer)&gt; |


:::

## Methods

:::group{name=removeLast}

Return Type: [BannerPatternLayers](/vanilla/api/block/entity/BannerPatternLayers)

```zenscript
// BannerPatternLayers.removeLast() as BannerPatternLayers

myBannerPatternLayers.removeLast();
```

:::


## Properties

|  Name  |                                               Type                                                | Has Getter | Has Setter |
|--------|---------------------------------------------------------------------------------------------------|------------|------------|
| layers | stdlib.List&lt;[BannerPatternLayersLayer](/vanilla/api/block/entity/BannerPatternLayersLayer)&gt; | true       | false      |

