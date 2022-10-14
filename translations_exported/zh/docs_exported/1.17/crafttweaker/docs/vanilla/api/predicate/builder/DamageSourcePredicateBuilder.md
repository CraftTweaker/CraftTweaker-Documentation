# DamageSourcePredicateBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.DamageSourcePredicateBuilder;
```


## 使用方式

:::group{name=build}

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicateBuilder.build() as DamageSourcePredicate

myDamageSourcePredicateBuilder.build();
```

:::

:::group{name=bypassesArmor}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.bypassesArmor(bypassesArmor as bool?) as DamageSourcePredicateBuilder
```

| 参数            | 类型    | 描述                      | 可选   | DefaultValue |
| ------------- | ----- | ----------------------- | ---- | ------------ |
| bypassesArmor | bool? | No Description Provided | true | true         |


:::

:::group{name=bypassesInvulnerability}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.bypassesInvulnerability(bypassesInvulnerability as bool?) as DamageSourcePredicateBuilder
```

| 参数                      | 类型    | 描述                      | 可选   | DefaultValue |
| ----------------------- | ----- | ----------------------- | ---- | ------------ |
| bypassesInvulnerability | bool? | No Description Provided | true | true         |


:::

:::group{name=bypassesMagic}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.bypassesMagic(bypassesMagic as bool?) as DamageSourcePredicateBuilder
```

| 参数            | 类型    | 描述                      | 可选   | DefaultValue |
| ------------- | ----- | ----------------------- | ---- | ------------ |
| bypassesMagic | bool? | No Description Provided | true | true         |


:::

:::group{name=direct}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.direct(entityPredicate as EntityPredicate) as DamageSourcePredicateBuilder
```

| 参数              | 类型                                                        | 描述                      |
| --------------- | --------------------------------------------------------- | ----------------------- |
| entityPredicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) | No Description Provided |


:::

:::group{name=direct}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.direct(entityPredicate as EntityPredicateBuilder) as DamageSourcePredicateBuilder
```

| 参数              | 类型                                                                              | 描述                      |
| --------------- | ------------------------------------------------------------------------------- | ----------------------- |
| entityPredicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) | No Description Provided |


:::

:::group{name=isExplosion}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isExplosion(isExplosion as bool?) as DamageSourcePredicateBuilder
```

| 参数          | 类型    | 描述                      | 可选   | DefaultValue |
| ----------- | ----- | ----------------------- | ---- | ------------ |
| isExplosion | bool? | No Description Provided | true | true         |


:::

:::group{name=isFire}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isFire(isFire as bool?) as DamageSourcePredicateBuilder
```

| 参数     | 类型    | 描述                      | 可选   | DefaultValue |
| ------ | ----- | ----------------------- | ---- | ------------ |
| isFire | bool? | No Description Provided | true | true         |


:::

:::group{name=isLightning}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isLightning(isLightning as bool?) as DamageSourcePredicateBuilder
```

| 参数          | 类型    | 描述                      | 可选   | DefaultValue |
| ----------- | ----- | ----------------------- | ---- | ------------ |
| isLightning | bool? | No Description Provided | true | true         |


:::

:::group{name=isMagic}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isMagic(isMagic as bool?) as DamageSourcePredicateBuilder
```

| 参数      | 类型    | 描述                      | 可选   | DefaultValue |
| ------- | ----- | ----------------------- | ---- | ------------ |
| isMagic | bool? | No Description Provided | true | true         |


:::

:::group{name=isProjectile}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isProjectile(isProjectile as bool?) as DamageSourcePredicateBuilder
```

| 参数           | 类型    | 描述                      | 可选   | DefaultValue |
| ------------ | ----- | ----------------------- | ---- | ------------ |
| isProjectile | bool? | No Description Provided | true | true         |


:::

:::group{name=source}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.source(entityPredicate as EntityPredicate) as DamageSourcePredicateBuilder
```

| 参数              | 类型                                                        | 描述                      |
| --------------- | --------------------------------------------------------- | ----------------------- |
| entityPredicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) | No Description Provided |


:::

:::group{name=source}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.source(entityPredicate as EntityPredicateBuilder) as DamageSourcePredicateBuilder
```

| 参数              | 类型                                                                              | 描述                      |
| --------------- | ------------------------------------------------------------------------------- | ----------------------- |
| entityPredicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) | No Description Provided |


:::


