# Biome

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.biome.Biome;
```


## Methods

:::group{name=shouldFreeze}

Return Type: boolean

```zenscript
Biome.shouldFreeze(world as Level, pos as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| world     | [Level](/vanilla/api/world/Level)           |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=shouldFreeze}

Return Type: boolean

```zenscript
Biome.shouldFreeze(world as Level, pos as BlockPos, mustBeAtEdge as boolean) as boolean
```

|  Parameter   |                    Type                     |
|--------------|---------------------------------------------|
| world        | [Level](/vanilla/api/world/Level)           |
| pos          | [BlockPos](/vanilla/api/util/math/BlockPos) |
| mustBeAtEdge | boolean                                     |


:::

:::group{name=shouldSnow}

Return Type: boolean

```zenscript
Biome.shouldSnow(world as Level, pos as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| world     | [Level](/vanilla/api/world/Level)           |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::


## Properties

|     Name      |                            Type                            | Has Getter | Has Setter |
|---------------|------------------------------------------------------------|------------|------------|
| biomeCategory | string                                                     | true       | false      |
| commandString | string                                                     | true       | false      |
| doesRain      | boolean                                                    | true       | false      |
| doesSnow      | boolean                                                    | true       | false      |
| downfall      | float                                                      | true       | false      |
| isHumid       | boolean                                                    | true       | false      |
| rainType      | string                                                     | true       | false      |
| registryName  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |
| waterColor    | int                                                        | true       | false      |
| waterFogColor | int                                                        | true       | false      |

