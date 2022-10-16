# PlayerPredicateBuilder

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.PlayerPredicateBuilder;
```


## Методы

:::group{name=advancement}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancement(name as ResourceLocation, completed as boolean) as PlayerPredicateBuilder
```

| Параметр  | Тип                                                        | Optional | Default Value |
| --------- | ---------------------------------------------------------- | -------- | ------------- |
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | false    |               |
| completed | boolean                                                    | true     | true          |


:::

:::group{name=advancement}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancement(name as string, completed as boolean) as PlayerPredicateBuilder
```

| Параметр  | Тип     | Optional | Default Value |
| --------- | ------- | -------- | ------------- |
| name      | string  | false    |               |
| completed | boolean | true     | true          |


:::

:::group{name=advancementCriteria}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriteria(name as ResourceLocation, criteria as bool?[string]) as PlayerPredicateBuilder
```

| Параметр | Тип                                                        |
| -------- | ---------------------------------------------------------- |
| name     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| criteria | bool?[string]                                              |


:::

:::group{name=advancementCriteria}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriteria(name as string, criteria as bool?[string]) as PlayerPredicateBuilder
```

| Параметр | Тип           |
| -------- | ------------- |
| name     | string        |
| criteria | bool?[string] |


:::

:::group{name=advancementCriterion}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriterion(name as ResourceLocation, criterion as string, completed as boolean) as PlayerPredicateBuilder
```

| Параметр  | Тип                                                        | Optional | Default Value |
| --------- | ---------------------------------------------------------- | -------- | ------------- |
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | false    |               |
| criterion | string                                                     | false    |               |
| completed | boolean                                                    | true     | true          |


:::

:::group{name=advancementCriterion}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriterion(name as string, criterion as string, completed as boolean) as PlayerPredicateBuilder
```

| Параметр  | Тип     | Optional | Default Value |
| --------- | ------- | -------- | ------------- |
| name      | string  | false    |               |
| criterion | string  | false    |               |
| completed | boolean | true     | true          |


:::

:::group{name=build}

Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
// PlayerPredicateBuilder.build() as PlayerPredicate

myPlayerPredicateBuilder.build();
```

:::

:::group{name=gameType}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.gameType(type as GameType) as PlayerPredicateBuilder
```

| Параметр | Тип                                     |
| -------- | --------------------------------------- |
| type     | [GameType](/vanilla/api/world/GameType) |


:::

:::group{name=level}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.level(level as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Параметр | Тип                                                                         |
| -------- | --------------------------------------------------------------------------- |
| level    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=lookingAt}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.lookingAt(predicate as EntityPredicate) as PlayerPredicateBuilder
```

| Параметр  | Тип                                                       |
| --------- | --------------------------------------------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=lookingAt}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.lookingAt(predicate as EntityPredicateBuilder) as PlayerPredicateBuilder
```

| Параметр  | Тип                                                                             |
| --------- | ------------------------------------------------------------------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

:::group{name=recipe}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.recipe(name as ResourceLocation, unlocked as boolean) as PlayerPredicateBuilder
```

| Параметр | Тип                                                        | Optional | Default Value |
| -------- | ---------------------------------------------------------- | -------- | ------------- |
| name     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | false    |               |
| unlocked | boolean                                                    | true     | true          |


:::

:::group{name=recipe}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.recipe(name as string, unlocked as boolean) as PlayerPredicateBuilder
```

| Параметр | Тип     | Optional | Default Value |
| -------- | ------- | -------- | ------------- |
| name     | string  | false    |               |
| unlocked | boolean | true     | true          |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as ResourceLocation, name as ResourceLocation, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Параметр | Тип                                                                         |
| -------- | --------------------------------------------------------------------------- |
| type     | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                  |
| name     | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                  |
| value    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as ResourceLocation, name as string, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Параметр | Тип                                                                         |
| -------- | --------------------------------------------------------------------------- |
| type     | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                  |
| name     | string                                                                      |
| value    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as string, name as ResourceLocation, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Параметр | Тип                                                                         |
| -------- | --------------------------------------------------------------------------- |
| type     | string                                                                      |
| name     | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                  |
| value    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as string, name as string, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Параметр | Тип                                                                         |
| -------- | --------------------------------------------------------------------------- |
| type     | string                                                                      |
| name     | string                                                                      |
| value    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::


