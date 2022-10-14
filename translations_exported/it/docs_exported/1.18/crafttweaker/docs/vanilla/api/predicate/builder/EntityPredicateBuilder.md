# EntityPredicateBuilder

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.EntityPredicateBuilder;
```


## Metodi

:::group{name=build}

Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
// EntityPredicateBuilder.build() as EntityPredicate

myEntityPredicateBuilder.build();
```

:::

:::group{name=catType}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.catType(catType as ResourceLocation) as EntityPredicateBuilder
```

| Parametro | Tipo                                                       |
| --------- | ---------------------------------------------------------- |
| catType   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=catType}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.catType(catType as string) as EntityPredicateBuilder
```

| Parametro | Tipo   |
| --------- | ------ |
| catType   | string |


:::

:::group{name=distance}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.distance(predicate as DistancePredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                          |
| --------- | ------------------------------------------------------------- |
| predicate | [DistancePredicate](/vanilla/api/predicate/DistancePredicate) |


:::

:::group{name=effects}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.effects(predicate as MobEffectsPredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                              |
| --------- | ----------------------------------------------------------------- |
| predicate | [MobEffectsPredicate](/vanilla/api/predicate/MobEffectsPredicate) |


:::

:::group{name=entityType}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.entityType(predicate as EntityTypePredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                              |
| --------- | ----------------------------------------------------------------- |
| predicate | [EntityTypePredicate](/vanilla/api/predicate/EntityTypePredicate) |


:::

:::group{name=equipment}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.equipment(predicate as EntityEquipmentPredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                                        |
| --------- | --------------------------------------------------------------------------- |
| predicate | [EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate) |


:::

:::group{name=equipment}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.equipment(predicate as EntityEquipmentPredicateBuilder) as EntityPredicateBuilder
```

| Parametro | Tipo                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------- |
| predicate | [EntityEquipmentPredicateBuilder](/vanilla/api/predicate/builder/EntityEquipmentPredicateBuilder) |


:::

:::group{name=fishingHook}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.fishingHook(predicate as FishingHookPredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                                |
| --------- | ------------------------------------------------------------------- |
| predicate | [FishingHookPredicate](/vanilla/api/predicate/FishingHookPredicate) |


:::

:::group{name=flags}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.flags(predicate as EntityFlagsPredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                                |
| --------- | ------------------------------------------------------------------- |
| predicate | [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate) |


:::

:::group{name=flags}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.flags(predicate as EntityFlagsPredicateBuilder) as EntityPredicateBuilder
```

| Parametro | Tipo                                                                                      |
| --------- | ----------------------------------------------------------------------------------------- |
| predicate | [EntityFlagsPredicateBuilder](/vanilla/api/predicate/builder/EntityFlagsPredicateBuilder) |


:::

:::group{name=lightningBolt}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.lightningBolt(predicate as LightningBoltPredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                                    |
| --------- | ----------------------------------------------------------------------- |
| predicate | [LightningBoltPredicate](/vanilla/api/predicate/LightningBoltPredicate) |


:::

:::group{name=located}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.located(predicate as LocationPredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                          |
| --------- | ------------------------------------------------------------- |
| predicate | [LocationPredicate](/vanilla/api/predicate/LocationPredicate) |


:::

:::group{name=located}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.located(predicate as LocationPredicateBuilder) as EntityPredicateBuilder
```

| Parametro | Tipo                                                                                |
| --------- | ----------------------------------------------------------------------------------- |
| predicate | [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder) |


:::

:::group{name=nbt}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.nbt(predicate as NbtPredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                |
| --------- | --------------------------------------------------- |
| predicate | [NbtPredicate](/vanilla/api/predicate/NbtPredicate) |


:::

:::group{name=passenger}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.passenger(predicate as EntityPredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                      |
| --------- | --------------------------------------------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=passenger}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.passenger(predicate as EntityPredicateBuilder) as EntityPredicateBuilder
```

| Parametro | Tipo                                                                            |
| --------- | ------------------------------------------------------------------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

:::group{name=player}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.player(predicate as PlayerPredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                      |
| --------- | --------------------------------------------------------- |
| predicate | [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate) |


:::

:::group{name=player}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.player(predicate as PlayerPredicateBuilder) as EntityPredicateBuilder
```

| Parametro | Tipo                                                                            |
| --------- | ------------------------------------------------------------------------------- |
| predicate | [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder) |


:::

:::group{name=steppingOn}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.steppingOn(predicate as LocationPredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                          |
| --------- | ------------------------------------------------------------- |
| predicate | [LocationPredicate](/vanilla/api/predicate/LocationPredicate) |


:::

:::group{name=steppingOn}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.steppingOn(predicate as LocationPredicateBuilder) as EntityPredicateBuilder
```

| Parametro | Tipo                                                                                |
| --------- | ----------------------------------------------------------------------------------- |
| predicate | [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder) |


:::

:::group{name=target}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.target(predicate as EntityPredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                      |
| --------- | --------------------------------------------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=target}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.target(predicate as EntityPredicateBuilder) as EntityPredicateBuilder
```

| Parametro | Tipo                                                                            |
| --------- | ------------------------------------------------------------------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

:::group{name=team}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.team(team as string) as EntityPredicateBuilder
```

| Parametro | Tipo   |
| --------- | ------ |
| team      | string |


:::

:::group{name=vehicle}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.vehicle(predicate as EntityPredicate) as EntityPredicateBuilder
```

| Parametro | Tipo                                                      |
| --------- | --------------------------------------------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=vehicle}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.vehicle(predicate as EntityPredicateBuilder) as EntityPredicateBuilder
```

| Parametro | Tipo                                                                            |
| --------- | ------------------------------------------------------------------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::


