# SupportMethods

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.generationstages.vanilla.SupportMethods;
```


## Static Methods

:::group{name=getBiome}

Return Type: [Biome](/vanilla/api/world/biome/Biome)

```zenscript
SupportMethods.getBiome(biome as ResourceLocation) as Biome
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| biome     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=getBiomes}

Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// SupportMethods.getBiomes() as stdlib.List<ResourceLocation>

SupportMethods.getBiomes();
```

:::

:::group{name=getFeatures}

Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// SupportMethods.getFeatures() as stdlib.List<ResourceLocation>

SupportMethods.getFeatures();
```

:::

