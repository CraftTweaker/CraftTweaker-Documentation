# Biome

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.biome.Biome;
```


## Metodi

:::group{name=getTemperature}

Return Type: float

```zenscript
Biome.getTemperature(pos as BlockPos) as float
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::

:::group{name=shouldFreeze}

Return Type: boolean

```zenscript
Biome.shouldFreeze(world as Level, pos as BlockPos) as boolean
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| world     | [Level](/vanilla/api/world/Level)           | No Description Provided |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::

:::group{name=shouldFreeze}

Return Type: boolean

```zenscript
Biome.shouldFreeze(world as Level, pos as BlockPos, mustBeAtEdge as boolean) as boolean
```

| Parametro    | Tipo                                        | Descrizione             |
| ------------ | ------------------------------------------- | ----------------------- |
| world        | [Level](/vanilla/api/world/Level)           | No Description Provided |
| pos          | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |
| mustBeAtEdge | boolean                                     | No Description Provided |


:::

:::group{name=shouldSnow}

Return Type: boolean

```zenscript
Biome.shouldSnow(world as Level, pos as BlockPos) as boolean
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| world     | [Level](/vanilla/api/world/Level)           | No Description Provided |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::


## Proprietà

| Nome          | Tipo                                                       | Ha Getter | Ha Setter | Descrizione             |
| ------------- | ---------------------------------------------------------- | --------- | --------- | ----------------------- |
| biomeCategory | string                                                     | sì        | no        | No Description Provided |
| commandString | string                                                     | sì        | no        | No Description Provided |
| depth         | float                                                      | sì        | no        | No Description Provided |
| doesRain      | boolean                                                    | sì        | no        | No Description Provided |
| doesSnow      | boolean                                                    | sì        | no        | No Description Provided |
| downfall      | float                                                      | sì        | no        | No Description Provided |
| isHumid       | boolean                                                    | sì        | no        | No Description Provided |
| rainType      | string                                                     | sì        | no        | No Description Provided |
| registryName  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | sì        | no        | No Description Provided |
| scale         | float                                                      | sì        | no        | No Description Provided |
| waterColor    | int                                                        | sì        | no        | No Description Provided |
| waterFogColor | int                                                        | sì        | no        | No Description Provided |

