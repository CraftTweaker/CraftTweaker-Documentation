# Biome

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.biome.Biome;
```


## Metodi

:::group{name=shouldFreeze}

Return Type: boolean

```zenscript
Biome.shouldFreeze(world as Level, pos as BlockPos) as boolean
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| world     | [Level](/vanilla/api/world/Level)           |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=shouldFreeze}

Return Type: boolean

```zenscript
Biome.shouldFreeze(world as Level, pos as BlockPos, mustBeAtEdge as boolean) as boolean
```

| Parametro    | Tipo                                        |
| ------------ | ------------------------------------------- |
| world        | [Level](/vanilla/api/world/Level)           |
| pos          | [BlockPos](/vanilla/api/util/math/BlockPos) |
| mustBeAtEdge | boolean                                     |


:::

:::group{name=shouldSnow}

Return Type: boolean

```zenscript
Biome.shouldSnow(world as Level, pos as BlockPos) as boolean
```

| Parametro | Tipo                                        |
| --------- | ------------------------------------------- |
| world     | [Level](/vanilla/api/world/Level)           |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::


## Proprietà

| Nome          | Tipo                                                       | Ha Getter | Ha Setter |
| ------------- | ---------------------------------------------------------- | --------- | --------- |
| biomeCategory | string                                                     | sì        | no        |
| commandString | string                                                     | sì        | no        |
| doesRain      | boolean                                                    | sì        | no        |
| doesSnow      | boolean                                                    | sì        | no        |
| downfall      | float                                                      | sì        | no        |
| isHumid       | boolean                                                    | sì        | no        |
| rainType      | string                                                     | sì        | no        |
| registryName  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | sì        | no        |
| waterColor    | int                                                        | sì        | no        |
| waterFogColor | int                                                        | sì        | no        |

