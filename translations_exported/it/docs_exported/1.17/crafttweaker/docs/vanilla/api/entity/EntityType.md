# EntityType

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.EntityType;
```


## Caster

| Tipo Risultato                                           | Implicito |
| -------------------------------------------------------- | --------- |
| [EntityIngredient](/vanilla/api/entity/EntityIngredient) | sì        |

## Metodi

:::group{name=canSpawnFarFromPlayer}

Return Type: boolean

```zenscript
// EntityType.canSpawnFarFromPlayer() as boolean

myEntityType.canSpawnFarFromPlayer();
```

:::

:::group{name=canSummon}

Return Type: boolean

```zenscript
// EntityType.canSummon() as boolean

myEntityType.canSummon();
```

:::

:::group{name=create}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
EntityType.create(level as Level) as Entity
```

| Parametro | Tipo                              | Descrizione             |
| --------- | --------------------------------- | ----------------------- |
| level     | [Level](/vanilla/api/world/Level) | No Description Provided |


:::

:::group{name=create}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
EntityType.create(param0 as ServerLevel, param1 as MapData, param2 as Component, param3 as Player, param4 as BlockPos, param5 as MobSpawnType, alignPosition as boolean, invertY as boolean) as Entity
```

| Parametro     | Tipo                                             | Descrizione             |
| ------------- | ------------------------------------------------ | ----------------------- |
| param0        | [ServerLevel](/vanilla/api/world/ServerLevel)    | No Description Provided |
| param1        | [MapData](/vanilla/api/data/MapData)             | No Description Provided |
| param2        | [Component](/vanilla/api/text/Component)         | No Description Provided |
| param3        | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |
| param4        | [BlockPos](/vanilla/api/util/math/BlockPos)      | No Description Provided |
| param5        | [MobSpawnType](/vanilla/api/entity/MobSpawnType) | No Description Provided |
| alignPosition | boolean                                          | No Description Provided |
| invertY       | boolean                                          | No Description Provided |


:::

:::group{name=fireImmune}

Return Type: boolean

```zenscript
// EntityType.fireImmune() as boolean

myEntityType.fireImmune();
```

:::

:::group{name=getCategory}

Return Type: [MobCategory](/vanilla/api/entity/MobCategory)

```zenscript
// EntityType.getCategory() as MobCategory

myEntityType.getCategory();
```

:::

:::group{name=getDefaultLootTable}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// EntityType.getDefaultLootTable() as ResourceLocation

myEntityType.getDefaultLootTable();
```

:::

:::group{name=getDescription}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// EntityType.getDescription() as Component

myEntityType.getDescription();
```

:::

:::group{name=getDescriptionId}

Return Type: string

```zenscript
// EntityType.getDescriptionId() as string

myEntityType.getDescriptionId();
```

:::

:::group{name=getDimensions}

Return Type: [EntityDimensions](/vanilla/api/entity/EntityDimensions)

```zenscript
// EntityType.getDimensions() as EntityDimensions

myEntityType.getDimensions();
```

:::

:::group{name=getHeight}

Return Type: float

```zenscript
// EntityType.getHeight() as float

myEntityType.getHeight();
```

:::

:::group{name=getWidth}

Return Type: float

```zenscript
// EntityType.getWidth() as float

myEntityType.getWidth();
```

:::

:::group{name=isBlockDangerous}

Return Type: boolean

```zenscript
EntityType.isBlockDangerous(state as BlockState) as boolean
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| state     | [BlockState](/vanilla/api/block/BlockState) | No Description Provided |


:::

:::group{name=isIn}

Return Type: boolean

```zenscript
EntityType.isIn(tag as MCTag<EntityType>) as boolean
```

| Parametro | Tipo                                                                                            | Descrizione             |
| --------- | ----------------------------------------------------------------------------------------------- | ----------------------- |
| tag       | [MCTag](/vanilla/api/tag/MCTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&gt; | No Description Provided |


:::

:::group{name=spawn}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
EntityType.spawn(level as ServerLevel, data as MapData, displayName as Component, spawningPlayer as Player, pos as BlockPos, spawnType as MobSpawnType, alignPosition as boolean, invertY as boolean) as Entity
```

| Parametro      | Tipo                                             | Descrizione             |
| -------------- | ------------------------------------------------ | ----------------------- |
| level          | [ServerLevel](/vanilla/api/world/ServerLevel)    | No Description Provided |
| data           | [MapData](/vanilla/api/data/MapData)             | No Description Provided |
| displayName    | [Component](/vanilla/api/text/Component)         | No Description Provided |
| spawningPlayer | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |
| pos            | [BlockPos](/vanilla/api/util/math/BlockPos)      | No Description Provided |
| spawnType      | [MobSpawnType](/vanilla/api/entity/MobSpawnType) | No Description Provided |
| alignPosition  | boolean                                          | No Description Provided |
| invertY        | boolean                                          | No Description Provided |


:::

:::group{name=toShortString}

Return Type: string

```zenscript
// EntityType.toShortString() as string

myEntityType.toShortString();
```

:::


## Proprietà

| Nome                  | Tipo                                                       | Ha Getter | Ha Setter | Descrizione             |
| --------------------- | ---------------------------------------------------------- | --------- | --------- | ----------------------- |
| canSpawnFarFromPlayer | boolean                                                    | sì        | no        | No Description Provided |
| canSummon             | boolean                                                    | sì        | no        | No Description Provided |
| category              | [MobCategory](/vanilla/api/entity/MobCategory)             | sì        | no        | No Description Provided |
| commandString         | string                                                     | sì        | no        | No Description Provided |
| defaultLootTable      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | sì        | no        | No Description Provided |
| description           | [Component](/vanilla/api/text/Component)                   | sì        | no        | No Description Provided |
| descriptionId         | string                                                     | sì        | no        | No Description Provided |
| dimensions            | [EntityDimensions](/vanilla/api/entity/EntityDimensions)   | sì        | no        | No Description Provided |
| fireImmune            | boolean                                                    | sì        | no        | No Description Provided |
| height                | float                                                      | sì        | no        | No Description Provided |
| toShortString         | string                                                     | sì        | no        | No Description Provided |
| width                 | float                                                      | sì        | no        | No Description Provided |

