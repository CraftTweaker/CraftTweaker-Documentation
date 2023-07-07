# BiomeResolver

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.misc.world.BiomeResolver;
```


## Methods

:::group{name=getNoiseBiome}

Return Type: [Biome](/vanilla/api/world/biome/Biome)

```zenscript
BiomeResolver.getNoiseBiome(x as int, y as int, z as int, sampler as ClimateSampler) as Biome
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| x         | int                                                           |
| y         | int                                                           |
| z         | int                                                           |
| sampler   | [ClimateSampler](/mods/sixikutils/utils/world/ClimateSampler) |


:::


