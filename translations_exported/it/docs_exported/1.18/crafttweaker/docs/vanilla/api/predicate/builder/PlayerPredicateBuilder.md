# PlayerPredicateBuilder

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.PlayerPredicateBuilder;
```


## Metodi

:::group{name=advancement}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancement(name as ResourceLocation, completed as boolean) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                       | Optional | Default Value |
| --------- | ---------------------------------------------------------- | -------- | ------------- |
| nome      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | no       |               |
| completed | boolean                                                    | sì       | sì            |


:::

:::group{name=advancement}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancement(name as string, completed as boolean) as PlayerPredicateBuilder
```

| Parametro | Tipo    | Optional | Default Value |
| --------- | ------- | -------- | ------------- |
| nome      | string  | no       |               |
| completed | boolean | sì       | sì            |


:::

:::group{name=advancementCriteria}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriteria(name as ResourceLocation, criteria as bool?[string]) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                       |
| --------- | ---------------------------------------------------------- |
| nome      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| criteria  | bool?[string]                                              |


:::

:::group{name=advancementCriteria}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriteria(name as string, criteria as bool?[string]) as PlayerPredicateBuilder
```

| Parametro | Tipo          |
| --------- | ------------- |
| nome      | string        |
| criteria  | bool?[string] |


:::

:::group{name=advancementCriterion}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriterion(name as ResourceLocation, criterion as string, completed as boolean) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                       | Optional | Default Value |
| --------- | ---------------------------------------------------------- | -------- | ------------- |
| nome      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | no       |               |
| criterion | string                                                     | no       |               |
| completed | boolean                                                    | sì       | sì            |


:::

:::group{name=advancementCriterion}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriterion(name as string, criterion as string, completed as boolean) as PlayerPredicateBuilder
```

| Parametro | Tipo    | Optional | Default Value |
| --------- | ------- | -------- | ------------- |
| nome      | string  | no       |               |
| criterion | string  | no       |               |
| completed | boolean | sì       | sì            |


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

| Parametro | Tipo                                    |
| --------- | --------------------------------------- |
| type      | [GameType](/vanilla/api/world/GameType) |


:::

:::group{name=level}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.level(level as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                                        |
| --------- | --------------------------------------------------------------------------- |
| level     | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=lookingAt}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.lookingAt(predicate as EntityPredicate) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                      |
| --------- | --------------------------------------------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=lookingAt}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.lookingAt(predicate as EntityPredicateBuilder) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                                            |
| --------- | ------------------------------------------------------------------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

:::group{name=recipe}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.recipe(name as ResourceLocation, unlocked as boolean) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                       | Optional | Default Value |
| --------- | ---------------------------------------------------------- | -------- | ------------- |
| nome      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | no       |               |
| unlocked  | boolean                                                    | sì       | sì            |


:::

:::group{name=recipe}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.recipe(name as string, unlocked as boolean) as PlayerPredicateBuilder
```

| Parametro | Tipo    | Optional | Default Value |
| --------- | ------- | -------- | ------------- |
| nome      | string  | no       |               |
| unlocked  | boolean | sì       | sì            |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as ResourceLocation, name as ResourceLocation, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                                        |
| --------- | --------------------------------------------------------------------------- |
| type      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                  |
| nome      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                  |
| valore    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as ResourceLocation, name as string, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                                        |
| --------- | --------------------------------------------------------------------------- |
| type      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                  |
| nome      | string                                                                      |
| valore    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as string, name as ResourceLocation, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                                        |
| --------- | --------------------------------------------------------------------------- |
| type      | string                                                                      |
| nome      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                  |
| valore    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as string, name as string, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                                        |
| --------- | --------------------------------------------------------------------------- |
| type      | string                                                                      |
| nome      | string                                                                      |
| valore    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::


