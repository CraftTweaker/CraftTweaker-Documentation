# EntityPredicateBuilder

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.EntityPredicateBuilder;
```


## Methoden

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

| Parameter | Type                                                       | Beschreibung            |
| --------- | ---------------------------------------------------------- | ----------------------- |
| catType   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=catType}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.catType(catType as string) as EntityPredicateBuilder
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| catType   | string | No Description Provided |


:::

:::group{name=distance}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.distance(predicate as DistancePredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                          | Beschreibung            |
| --------- | ------------------------------------------------------------- | ----------------------- |
| predicate | [DistancePredicate](/vanilla/api/predicate/DistancePredicate) | No Description Provided |


:::

:::group{name=effects}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.effects(predicate as MobEffectsPredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                              | Beschreibung            |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| predicate | [MobEffectsPredicate](/vanilla/api/predicate/MobEffectsPredicate) | No Description Provided |


:::

:::group{name=entityType}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.entityType(predicate as EntityTypePredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                              | Beschreibung            |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| predicate | [EntityTypePredicate](/vanilla/api/predicate/EntityTypePredicate) | No Description Provided |


:::

:::group{name=equipment}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.equipment(predicate as EntityEquipmentPredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                                        | Beschreibung            |
| --------- | --------------------------------------------------------------------------- | ----------------------- |
| predicate | [EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate) | No Description Provided |


:::

:::group{name=equipment}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.equipment(predicate as EntityEquipmentPredicateBuilder) as EntityPredicateBuilder
```

| Parameter | Type                                                                                              | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| predicate | [EntityEquipmentPredicateBuilder](/vanilla/api/predicate/builder/EntityEquipmentPredicateBuilder) | No Description Provided |


:::

:::group{name=fishingHook}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.fishingHook(predicate as FishingHookPredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                                | Beschreibung            |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| predicate | [FishingHookPredicate](/vanilla/api/predicate/FishingHookPredicate) | No Description Provided |


:::

:::group{name=flags}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.flags(predicate as EntityFlagsPredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                                | Beschreibung            |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| predicate | [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate) | No Description Provided |


:::

:::group{name=flags}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.flags(predicate as EntityFlagsPredicateBuilder) as EntityPredicateBuilder
```

| Parameter | Type                                                                                      | Beschreibung            |
| --------- | ----------------------------------------------------------------------------------------- | ----------------------- |
| predicate | [EntityFlagsPredicateBuilder](/vanilla/api/predicate/builder/EntityFlagsPredicateBuilder) | No Description Provided |


:::

:::group{name=lightningBolt}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.lightningBolt(predicate as LightningBoltPredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                                    | Beschreibung            |
| --------- | ----------------------------------------------------------------------- | ----------------------- |
| predicate | [LightningBoltPredicate](/vanilla/api/predicate/LightningBoltPredicate) | No Description Provided |


:::

:::group{name=located}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.located(predicate as LocationPredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                          | Beschreibung            |
| --------- | ------------------------------------------------------------- | ----------------------- |
| predicate | [LocationPredicate](/vanilla/api/predicate/LocationPredicate) | No Description Provided |


:::

:::group{name=located}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.located(predicate as LocationPredicateBuilder) as EntityPredicateBuilder
```

| Parameter | Type                                                                                | Beschreibung            |
| --------- | ----------------------------------------------------------------------------------- | ----------------------- |
| predicate | [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder) | No Description Provided |


:::

:::group{name=nbt}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.nbt(predicate as NbtPredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                | Beschreibung            |
| --------- | --------------------------------------------------- | ----------------------- |
| predicate | [NbtPredicate](/vanilla/api/predicate/NbtPredicate) | No Description Provided |


:::

:::group{name=passenger}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.passenger(predicate as EntityPredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                      | Beschreibung            |
| --------- | --------------------------------------------------------- | ----------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) | No Description Provided |


:::

:::group{name=passenger}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.passenger(predicate as EntityPredicateBuilder) as EntityPredicateBuilder
```

| Parameter | Type                                                                            | Beschreibung            |
| --------- | ------------------------------------------------------------------------------- | ----------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) | No Description Provided |


:::

:::group{name=player}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.player(predicate as PlayerPredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                      | Beschreibung            |
| --------- | --------------------------------------------------------- | ----------------------- |
| predicate | [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate) | No Description Provided |


:::

:::group{name=player}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.player(predicate as PlayerPredicateBuilder) as EntityPredicateBuilder
```

| Parameter | Type                                                                            | Beschreibung            |
| --------- | ------------------------------------------------------------------------------- | ----------------------- |
| predicate | [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder) | No Description Provided |


:::

:::group{name=steppingOn}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.steppingOn(predicate as LocationPredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                          | Beschreibung            |
| --------- | ------------------------------------------------------------- | ----------------------- |
| predicate | [LocationPredicate](/vanilla/api/predicate/LocationPredicate) | No Description Provided |


:::

:::group{name=steppingOn}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.steppingOn(predicate as LocationPredicateBuilder) as EntityPredicateBuilder
```

| Parameter | Type                                                                                | Beschreibung            |
| --------- | ----------------------------------------------------------------------------------- | ----------------------- |
| predicate | [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder) | No Description Provided |


:::

:::group{name=target}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.target(predicate as EntityPredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                      | Beschreibung            |
| --------- | --------------------------------------------------------- | ----------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) | No Description Provided |


:::

:::group{name=target}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.target(predicate as EntityPredicateBuilder) as EntityPredicateBuilder
```

| Parameter | Type                                                                            | Beschreibung            |
| --------- | ------------------------------------------------------------------------------- | ----------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) | No Description Provided |


:::

:::group{name=team}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.team(team as string) as EntityPredicateBuilder
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| team      | string | No Description Provided |


:::

:::group{name=vehicle}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.vehicle(predicate as EntityPredicate) as EntityPredicateBuilder
```

| Parameter | Type                                                      | Beschreibung            |
| --------- | --------------------------------------------------------- | ----------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) | No Description Provided |


:::

:::group{name=vehicle}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.vehicle(predicate as EntityPredicateBuilder) as EntityPredicateBuilder
```

| Parameter | Type                                                                            | Beschreibung            |
| --------- | ------------------------------------------------------------------------------- | ----------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) | No Description Provided |


:::


