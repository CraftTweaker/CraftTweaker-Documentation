# TrimPattern

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.armortrim.TrimPattern;
```


## Extending Record

TrimPattern extends Record. That means all methods available in Record are also available in TrimPattern

## Methods

:::group{name=copyWithStyle}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
TrimPattern.copyWithStyle(material as TrimMaterial) as Component
```

| Parameter |                           Type                           |
|-----------|----------------------------------------------------------|
| material  | [TrimMaterial](/vanilla/api/item/armortrim/TrimMaterial) |


:::


## Properties

|     Name      |                            Type                            | Has Getter | Has Setter |
|---------------|------------------------------------------------------------|------------|------------|
| assetId       | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |
| commandString | string                                                     | true       | false      |
| decal         | boolean                                                    | true       | false      |
| description   | [Component](/vanilla/api/text/Component)                   | true       | false      |
| registryName  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |
| templateItem  | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | true       | false      |

