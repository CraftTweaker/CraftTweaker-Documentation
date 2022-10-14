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

| Parametro | Tipo                                                       | Descrizione             | Optional | DefaultValue |
| --------- | ---------------------------------------------------------- | ----------------------- | -------- | ------------ |
| nome      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided | no       |              |
| completed | boolean                                                    | No Description Provided | sì       | sì           |


:::

:::group{name=advancement}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancement(name as string, completed as boolean) as PlayerPredicateBuilder
```

| Parametro | Tipo    | Descrizione             | Optional | DefaultValue |
| --------- | ------- | ----------------------- | -------- | ------------ |
| nome      | string  | No Description Provided | no       |              |
| completed | boolean | No Description Provided | sì       | sì           |


:::

:::group{name=advancementCriteria}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriteria(name as ResourceLocation, criteria as bool?[string]) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                       | Descrizione             |
| --------- | ---------------------------------------------------------- | ----------------------- |
| nome      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |
| criteria  | bool?[string]                                              | No Description Provided |


:::

:::group{name=advancementCriteria}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriteria(name as string, criteria as bool?[string]) as PlayerPredicateBuilder
```

| Parametro | Tipo          | Descrizione             |
| --------- | ------------- | ----------------------- |
| nome      | string        | No Description Provided |
| criteria  | bool?[string] | No Description Provided |


:::

:::group{name=advancementCriterion}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriterion(name as ResourceLocation, criterion as string, completed as boolean) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                       | Descrizione             | Optional | DefaultValue |
| --------- | ---------------------------------------------------------- | ----------------------- | -------- | ------------ |
| nome      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided | no       |              |
| criterion | string                                                     | No Description Provided | no       |              |
| completed | boolean                                                    | No Description Provided | sì       | sì           |


:::

:::group{name=advancementCriterion}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriterion(name as string, criterion as string, completed as boolean) as PlayerPredicateBuilder
```

| Parametro | Tipo    | Descrizione             | Optional | DefaultValue |
| --------- | ------- | ----------------------- | -------- | ------------ |
| nome      | string  | No Description Provided | no       |              |
| criterion | string  | No Description Provided | no       |              |
| completed | boolean | No Description Provided | sì       | sì           |


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

| Parametro | Tipo                                    | Descrizione             |
| --------- | --------------------------------------- | ----------------------- |
| type      | [GameType](/vanilla/api/world/GameType) | No Description Provided |


:::

:::group{name=level}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.level(level as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                                        | Descrizione             |
| --------- | --------------------------------------------------------------------------- | ----------------------- |
| level     | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=lookingAt}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.lookingAt(predicate as EntityPredicate) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                      | Descrizione             |
| --------- | --------------------------------------------------------- | ----------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) | No Description Provided |


:::

:::group{name=lookingAt}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.lookingAt(predicate as EntityPredicateBuilder) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                                            | Descrizione             |
| --------- | ------------------------------------------------------------------------------- | ----------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) | No Description Provided |


:::

:::group{name=recipe}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.recipe(name as ResourceLocation, unlocked as boolean) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                       | Descrizione             | Optional | DefaultValue |
| --------- | ---------------------------------------------------------- | ----------------------- | -------- | ------------ |
| nome      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided | no       |              |
| unlocked  | boolean                                                    | No Description Provided | sì       | sì           |


:::

:::group{name=recipe}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.recipe(name as string, unlocked as boolean) as PlayerPredicateBuilder
```

| Parametro | Tipo    | Descrizione             | Optional | DefaultValue |
| --------- | ------- | ----------------------- | -------- | ------------ |
| nome      | string  | No Description Provided | no       |              |
| unlocked  | boolean | No Description Provided | sì       | sì           |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as ResourceLocation, name as ResourceLocation, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                                        | Descrizione             |
| --------- | --------------------------------------------------------------------------- | ----------------------- |
| type      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                  | No Description Provided |
| nome      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                  | No Description Provided |
| valore    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as ResourceLocation, name as string, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                                        | Descrizione             |
| --------- | --------------------------------------------------------------------------- | ----------------------- |
| type      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                  | No Description Provided |
| nome      | string                                                                      | No Description Provided |
| valore    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as string, name as ResourceLocation, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                                        | Descrizione             |
| --------- | --------------------------------------------------------------------------- | ----------------------- |
| type      | string                                                                      | No Description Provided |
| nome      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                  | No Description Provided |
| valore    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as string, name as string, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parametro | Tipo                                                                        | Descrizione             |
| --------- | --------------------------------------------------------------------------- | ----------------------- |
| type      | string                                                                      | No Description Provided |
| nome      | string                                                                      | No Description Provided |
| valore    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::


