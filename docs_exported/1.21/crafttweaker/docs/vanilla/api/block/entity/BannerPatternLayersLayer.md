# BannerPatternLayersLayer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.entity.BannerPatternLayersLayer;
```


## Extending Record

BannerPatternLayersLayer extends Record. That means all methods available in Record are also available in BannerPatternLayersLayer

## Static Methods

:::group{name=of}

Return Type: [BannerPatternLayersLayer](/vanilla/api/block/entity/BannerPatternLayersLayer)

```zenscript
BannerPatternLayersLayer.of(pattern as BannerPattern, color as invalid) as BannerPatternLayersLayer
```

| Parameter |                           Type                           |
|-----------|----------------------------------------------------------|
| pattern   | [BannerPattern](/vanilla/api/block/entity/BannerPattern) |
| color     | **invalid**                                              |


:::

## Properties

|    Name     |                           Type                           | Has Getter | Has Setter |
|-------------|----------------------------------------------------------|------------|------------|
| color       | **invalid**                                              | true       | false      |
| description | [MutableComponent](/vanilla/api/text/MutableComponent)   | true       | false      |
| pattern     | [BannerPattern](/vanilla/api/block/entity/BannerPattern) | true       | false      |

