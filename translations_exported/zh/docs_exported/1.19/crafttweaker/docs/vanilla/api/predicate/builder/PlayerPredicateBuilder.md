# PlayerPredicateBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.PlayerPredicateBuilder;
```


## 使用方式

:::group{name=advancement}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancement(name as ResourceLocation, completed as boolean) as PlayerPredicateBuilder
```

| 参数        | 类型                                             | 可选    | 默认值  |
| --------- | ---------------------------------------------- | ----- | ---- |
| name（名称）  | [资源位置](/vanilla/api/resource/ResourceLocation) | false |      |
| completed | 布尔值                                            | true  | true |


:::

:::group{name=advancement}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancement(name as string, completed as boolean) as PlayerPredicateBuilder
```

| 参数        | 类型     | 可选    | 默认值  |
| --------- | ------ | ----- | ---- |
| name（名称）  | string | false |      |
| completed | 布尔值    | true  | true |


:::

:::group{name=advancementCriteria}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriteria(name as ResourceLocation, criteria as bool?[string]) as PlayerPredicateBuilder
```

| 参数       | 类型                                             |
| -------- | ---------------------------------------------- |
| name（名称） | [资源位置](/vanilla/api/resource/ResourceLocation) |
| criteria | bool?[string]                                  |


:::

:::group{name=advancementCriteria}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriteria(name as string, criteria as bool?[string]) as PlayerPredicateBuilder
```

| 参数       | 类型            |
| -------- | ------------- |
| name（名称） | string        |
| criteria | bool?[string] |


:::

:::group{name=advancementCriterion}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriterion(name as ResourceLocation, criterion as string, completed as boolean) as PlayerPredicateBuilder
```

| 参数        | 类型                                             | 可选    | 默认值  |
| --------- | ---------------------------------------------- | ----- | ---- |
| name（名称）  | [资源位置](/vanilla/api/resource/ResourceLocation) | false |      |
| criterion | string                                         | false |      |
| completed | 布尔值                                            | true  | true |


:::

:::group{name=advancementCriterion}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.advancementCriterion(name as string, criterion as string, completed as boolean) as PlayerPredicateBuilder
```

| 参数        | 类型     | 可选    | 默认值  |
| --------- | ------ | ----- | ---- |
| name（名称）  | string | false |      |
| criterion | string | false |      |
| completed | 布尔值    | true  | true |


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

| 参数 | 类型                                      |
| -- | --------------------------------------- |
| 类型 | [GameType](/vanilla/api/world/GameType) |


:::

:::group{name=level}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.level(level as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| 参数    | 类型                                                                          |
| ----- | --------------------------------------------------------------------------- |
| level | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=lookingAt}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.lookingAt(predicate as EntityPredicate) as PlayerPredicateBuilder
```

| 参数        | 类型                                                        |
| --------- | --------------------------------------------------------- |
| predicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=lookingAt}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.lookingAt(predicate as EntityPredicateBuilder) as PlayerPredicateBuilder
```

| 参数        | 类型                                                                              |
| --------- | ------------------------------------------------------------------------------- |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

:::group{name=recipe}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.recipe(name as ResourceLocation, unlocked as boolean) as PlayerPredicateBuilder
```

| 参数       | 类型                                             | 可选    | 默认值  |
| -------- | ---------------------------------------------- | ----- | ---- |
| name（名称） | [资源位置](/vanilla/api/resource/ResourceLocation) | false |      |
| unlocked | 布尔值                                            | true  | true |


:::

:::group{name=recipe}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.recipe(name as string, unlocked as boolean) as PlayerPredicateBuilder
```

| 参数       | 类型     | 可选    | 默认值  |
| -------- | ------ | ----- | ---- |
| name（名称） | string | false |      |
| unlocked | 布尔值    | true  | true |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as ResourceLocation, name as ResourceLocation, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| 参数       | 类型                                                                          |
| -------- | --------------------------------------------------------------------------- |
| 类型       | [资源位置](/vanilla/api/resource/ResourceLocation)                              |
| name（名称） | [资源位置](/vanilla/api/resource/ResourceLocation)                              |
| value    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as ResourceLocation, name as string, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| 参数       | 类型                                                                          |
| -------- | --------------------------------------------------------------------------- |
| 类型       | [资源位置](/vanilla/api/resource/ResourceLocation)                              |
| name（名称） | string                                                                      |
| value    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as string, name as ResourceLocation, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| 参数       | 类型                                                                          |
| -------- | --------------------------------------------------------------------------- |
| 类型       | string                                                                      |
| name（名称） | [资源位置](/vanilla/api/resource/ResourceLocation)                              |
| value    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=statistic}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
PlayerPredicateBuilder.statistic(type as string, name as string, value as IntMinMaxBoundsPredicate) as PlayerPredicateBuilder
```

| 参数       | 类型                                                                          |
| -------- | --------------------------------------------------------------------------- |
| 类型       | string                                                                      |
| name（名称） | string                                                                      |
| value    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::


