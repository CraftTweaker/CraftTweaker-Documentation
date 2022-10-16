# EntityPredicateBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.EntityPredicateBuilder;
```


## 使用方式

:::group{name=build}

Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
// EntityPredicateBuilder.build() as EntityPredicate

myEntityPredicateBuilder.build();
```

:::

:::group{name=distance}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.distance(predicate as DistancePredicate) as EntityPredicateBuilder
```

| 参数        | 类型                                                            |
| --------- | ------------------------------------------------------------- |
| predicate | [DistancePredicate](/vanilla/api/predicate/DistancePredicate) |


:::

:::group{name=effects}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.effects(predicate as MobEffectsPredicate) as EntityPredicateBuilder
```

| 参数        | 类型                                                                |
| --------- | ----------------------------------------------------------------- |
| predicate | [MobEffectsPredicate](/vanilla/api/predicate/MobEffectsPredicate) |


:::

:::group{name=entityType}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.entityType(predicate as EntityTypePredicate) as EntityPredicateBuilder
```

| 参数        | 类型                                                                |
| --------- | ----------------------------------------------------------------- |
| predicate | [EntityTypePredicate](/vanilla/api/predicate/EntityTypePredicate) |


:::

:::group{name=equipment}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.equipment(predicate as EntityEquipmentPredicate) as EntityPredicateBuilder
```

| 参数        | 类型                                                                          |
| --------- | --------------------------------------------------------------------------- |
| predicate | [EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate) |


:::

:::group{name=equipment}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.equipment(predicate as EntityEquipmentPredicateBuilder) as EntityPredicateBuilder
```

| 参数        | 类型                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------- |
| predicate | [EntityEquipmentPredicateBuilder](/vanilla/api/predicate/builder/EntityEquipmentPredicateBuilder) |


:::

:::group{name=flags}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.flags(predicate as EntityFlagsPredicate) as EntityPredicateBuilder
```

| 参数        | 类型                                                                  |
| --------- | ------------------------------------------------------------------- |
| predicate | [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate) |


:::

:::group{name=flags}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.flags(predicate as EntityFlagsPredicateBuilder) as EntityPredicateBuilder
```

| 参数        | 类型                                                                                        |
| --------- | ----------------------------------------------------------------------------------------- |
| predicate | [EntityFlagsPredicateBuilder](/vanilla/api/predicate/builder/EntityFlagsPredicateBuilder) |


:::

:::group{name=located}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.located(predicate as LocationPredicate) as EntityPredicateBuilder
```

| 参数        | 类型                                                            |
| --------- | ------------------------------------------------------------- |
| predicate | [LocationPredicate](/vanilla/api/predicate/LocationPredicate) |


:::

:::group{name=located}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.located(predicate as LocationPredicateBuilder) as EntityPredicateBuilder
```

| 参数        | 类型                                                                                  |
| --------- | ----------------------------------------------------------------------------------- |
| predicate | [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder) |


:::

:::group{name=nbt}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.nbt(predicate as NbtPredicate) as EntityPredicateBuilder
```

| 参数        | 类型                                                  |
| --------- | --------------------------------------------------- |
| predicate | [NbtPredicate](/vanilla/api/predicate/NbtPredicate) |


:::

:::group{name=passenger}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.passenger(predicate as EntityPredicate) as EntityPredicateBuilder
```

| 参数        | 类型                                                        |
| --------- | --------------------------------------------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=passenger}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.passenger(predicate as EntityPredicateBuilder) as EntityPredicateBuilder
```

| 参数        | 类型                                                                              |
| --------- | ------------------------------------------------------------------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

:::group{name=steppingOn}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.steppingOn(predicate as LocationPredicate) as EntityPredicateBuilder
```

| 参数        | 类型                                                            |
| --------- | ------------------------------------------------------------- |
| predicate | [LocationPredicate](/vanilla/api/predicate/LocationPredicate) |


:::

:::group{name=steppingOn}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.steppingOn(predicate as LocationPredicateBuilder) as EntityPredicateBuilder
```

| 参数        | 类型                                                                                  |
| --------- | ----------------------------------------------------------------------------------- |
| predicate | [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder) |


:::

:::group{name=subPredicate}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.subPredicate(predicate as EntitySubPredicate) as EntityPredicateBuilder
```

| 参数        | 类型                                                              |
| --------- | --------------------------------------------------------------- |
| predicate | [EntitySubPredicate](/vanilla/api/predicate/EntitySubPredicate) |


:::

:::group{name=subPredicate}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.subPredicate(predicate as PlayerPredicateBuilder) as EntityPredicateBuilder
```

| 参数        | 类型                                                                              |
| --------- | ------------------------------------------------------------------------------- |
| predicate | [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder) |


:::

:::group{name=target}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.target(predicate as EntityPredicate) as EntityPredicateBuilder
```

| 参数        | 类型                                                        |
| --------- | --------------------------------------------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=target}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.target(predicate as EntityPredicateBuilder) as EntityPredicateBuilder
```

| 参数        | 类型                                                                              |
| --------- | ------------------------------------------------------------------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

:::group{name=team}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.team(team as string) as EntityPredicateBuilder
```

| 参数   | 类型     |
| ---- | ------ |
| team | string |


:::

:::group{name=vehicle}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.vehicle(predicate as EntityPredicate) as EntityPredicateBuilder
```

| 参数        | 类型                                                        |
| --------- | --------------------------------------------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=vehicle}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicateBuilder.vehicle(predicate as EntityPredicateBuilder) as EntityPredicateBuilder
```

| 参数        | 类型                                                                              |
| --------- | ------------------------------------------------------------------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::


