# ArmorTrim

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.armortrim.ArmorTrim;
```


## Static Methods

:::group{name=of}

Return Type: [ArmorTrim](/vanilla/api/item/armortrim/ArmorTrim)

```zenscript
ArmorTrim.of(material as TrimMaterial, pattern as TrimPattern, showInTooltip as boolean) as ArmorTrim
```

|   Parameter   |                           Type                           | Optional | Default Value |
|---------------|----------------------------------------------------------|----------|---------------|
| material      | [TrimMaterial](/vanilla/api/item/armortrim/TrimMaterial) | false    |               |
| pattern       | [TrimPattern](/vanilla/api/item/armortrim/TrimPattern)   | false    |               |
| showInTooltip | boolean                                                  | true     | true          |


:::

## Methods

:::group{name=hasPatternAndMaterial}

Return Type: boolean

```zenscript
ArmorTrim.hasPatternAndMaterial(pattern as TrimPattern, material as TrimMaterial) as boolean
```

| Parameter |                           Type                           |
|-----------|----------------------------------------------------------|
| pattern   | [TrimPattern](/vanilla/api/item/armortrim/TrimPattern)   |
| material  | [TrimMaterial](/vanilla/api/item/armortrim/TrimMaterial) |


:::

:::group{name=innerTexture}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
ArmorTrim.innerTexture(material as ArmorMaterial) as ResourceLocation
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| material  | [ArmorMaterial](/vanilla/api/item/type/armor/ArmorMaterial) |


:::

:::group{name=outerTexture}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
ArmorTrim.outerTexture(material as ArmorMaterial) as ResourceLocation
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| material  | [ArmorMaterial](/vanilla/api/item/type/armor/ArmorMaterial) |


:::

:::group{name=withTooltip}

Return Type: [ArmorTrim](/vanilla/api/item/armortrim/ArmorTrim)

```zenscript
ArmorTrim.withTooltip(withTooltip as boolean) as ArmorTrim
```

|  Parameter  |  Type   |
|-------------|---------|
| withTooltip | boolean |


:::


## Properties

|   Name   |                           Type                           | Has Getter | Has Setter |
|----------|----------------------------------------------------------|------------|------------|
| material | [TrimMaterial](/vanilla/api/item/armortrim/TrimMaterial) | true       | false      |
| pattern  | [TrimPattern](/vanilla/api/item/armortrim/TrimPattern)   | true       | false      |

