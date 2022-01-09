# PlayerPredicateBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.PlayerPredicateBuilder;
```


## Methods

:::group{name=advancement}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancement(name as ResourceLocation, completed as boolean) as PlayerPredicateBuilder
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| name | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided | false |  |
| completed | boolean | No Description Provided | true | true |


:::

:::group{name=advancement}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancement(name as string, completed as boolean) as PlayerPredicateBuilder
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| name | string | No Description Provided | false |  |
| completed | boolean | No Description Provided | true | true |


:::

:::group{name=advancementCriteria}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriteria(name as ResourceLocation, criteria as bool?[string]) as PlayerPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |
| criteria | bool?[string] | No Description Provided |


:::

:::group{name=advancementCriteria}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriteria(name as string, criteria as bool?[string]) as PlayerPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |
| criteria | bool?[string] | No Description Provided |


:::

:::group{name=advancementCriterion}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriterion(name as ResourceLocation, criterion as string, completed as boolean) as PlayerPredicateBuilder
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| name | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided | false |  |
| criterion | string | No Description Provided | false |  |
| completed | boolean | No Description Provided | true | true |


:::

:::group{name=advancementCriterion}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriterion(name as string, criterion as string, completed as boolean) as PlayerPredicateBuilder
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| name | string | No Description Provided | false |  |
| criterion | string | No Description Provided | false |  |
| completed | boolean | No Description Provided | true | true |


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

| Parameter | Type | Description |
|-----------|------|-------------|
| type | [GameType](/vanilla/api/world/GameType) | No Description Provided |


:::

:::group{name=level}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.level(level as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| level | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=lookingAt}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.lookingAt(predicate as EntityPredicate) as PlayerPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) | No Description Provided |


:::

:::group{name=lookingAt}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.lookingAt(predicate as EntityPredicateBuilder) as PlayerPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) | No Description Provided |


:::

:::group{name=recipe}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.recipe(name as ResourceLocation, unlocked as boolean) as PlayerPredicateBuilder
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| name | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided | false |  |
| unlocked | boolean | No Description Provided | true | true |


:::

:::group{name=recipe}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.recipe(name as string, unlocked as boolean) as PlayerPredicateBuilder
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| name | string | No Description Provided | false |  |
| unlocked | boolean | No Description Provided | true | true |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as ResourceLocation, name as ResourceLocation, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| type | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |
| name | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |
| value | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as ResourceLocation, name as string, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| type | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |
| name | string | No Description Provided |
| value | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as string, name as ResourceLocation, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| type | string | No Description Provided |
| name | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |
| value | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as string, name as string, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| type | string | No Description Provided |
| name | string | No Description Provided |
| value | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::


