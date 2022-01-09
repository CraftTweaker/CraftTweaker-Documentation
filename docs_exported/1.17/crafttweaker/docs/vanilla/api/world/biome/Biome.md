# Biome

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.biome.Biome;
```


## Methods

:::group{name=getTemperature}

Return Type: float

```zenscript
Biome.getTemperature(pos as BlockPos) as float
```

| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::

:::group{name=shouldFreeze}

Return Type: boolean

```zenscript
Biome.shouldFreeze(world as Level, pos as BlockPos) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [Level](/vanilla/api/world/Level) | No Description Provided |
| pos | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::

:::group{name=shouldFreeze}

Return Type: boolean

```zenscript
Biome.shouldFreeze(world as Level, pos as BlockPos, mustBeAtEdge as boolean) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [Level](/vanilla/api/world/Level) | No Description Provided |
| pos | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |
| mustBeAtEdge | boolean | No Description Provided |


:::

:::group{name=shouldSnow}

Return Type: boolean

```zenscript
Biome.shouldSnow(world as Level, pos as BlockPos) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [Level](/vanilla/api/world/Level) | No Description Provided |
| pos | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| biomeCategory | string | true | false | No Description Provided |
| commandString | string | true | false | No Description Provided |
| depth | float | true | false | No Description Provided |
| doesRain | boolean | true | false | No Description Provided |
| doesSnow | boolean | true | false | No Description Provided |
| downfall | float | true | false | No Description Provided |
| isHumid | boolean | true | false | No Description Provided |
| rainType | string | true | false | No Description Provided |
| registryName | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true | false | No Description Provided |
| scale | float | true | false | No Description Provided |
| waterColor | int | true | false | No Description Provided |
| waterFogColor | int | true | false | No Description Provided |

