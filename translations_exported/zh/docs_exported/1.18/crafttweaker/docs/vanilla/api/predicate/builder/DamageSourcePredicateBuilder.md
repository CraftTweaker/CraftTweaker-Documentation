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

| 参数            | 类型    | 可选   | 默认值  |
| ------------- | ----- | ---- | ---- |
| bypassesArmor | bool? | true | true |


:::

:::group{name=bypassesInvulnerability}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.bypassesInvulnerability(bypassesInvulnerability as bool?) as DamageSourcePredicateBuilder
```

| 参数                      | 类型    | 可选   | 默认值  |
| ----------------------- | ----- | ---- | ---- |
| bypassesInvulnerability | bool? | true | true |


:::

:::group{name=bypassesMagic}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.bypassesMagic(bypassesMagic as bool?) as DamageSourcePredicateBuilder
```

| 参数            | 类型    | 可选   | 默认值  |
| ------------- | ----- | ---- | ---- |
| bypassesMagic | bool? | true | true |


:::

:::group{name=direct}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.direct(entityPredicate as EntityPredicate) as DamageSourcePredicateBuilder
```

| 参数              | 类型                                                        |
| --------------- | --------------------------------------------------------- |
| entityPredicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=direct}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.direct(entityPredicate as EntityPredicateBuilder) as DamageSourcePredicateBuilder
```

| 参数              | 类型                                                                              |
| --------------- | ------------------------------------------------------------------------------- |
| entityPredicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

:::group{name=isExplosion}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isExplosion(isExplosion as bool?) as DamageSourcePredicateBuilder
```

| 参数          | 类型    | 可选   | 默认值  |
| ----------- | ----- | ---- | ---- |
| isExplosion | bool? | true | true |


:::

:::group{name=isFire}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isFire(isFire as bool?) as DamageSourcePredicateBuilder
```

| 参数     | 类型    | 可选   | 默认值  |
| ------ | ----- | ---- | ---- |
| isFire | bool? | true | true |


:::

:::group{name=isLightning}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isLightning(isLightning as bool?) as DamageSourcePredicateBuilder
```

| 参数          | 类型    | 可选   | 默认值  |
| ----------- | ----- | ---- | ---- |
| isLightning | bool? | true | true |


:::

:::group{name=isMagic}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isMagic(isMagic as bool?) as DamageSourcePredicateBuilder
```

| 参数      | 类型    | 可选   | 默认值  |
| ------- | ----- | ---- | ---- |
| isMagic | bool? | true | true |


:::

:::group{name=isProjectile}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isProjectile(isProjectile as bool?) as DamageSourcePredicateBuilder
```

| 参数           | 类型    | 可选   | 默认值  |
| ------------ | ----- | ---- | ---- |
| isProjectile | bool? | true | true |


:::

:::group{name=source}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.source(entityPredicate as EntityPredicate) as DamageSourcePredicateBuilder
```

| 参数              | 类型                                                        |
| --------------- | --------------------------------------------------------- |
| entityPredicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=source}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.source(entityPredicate as EntityPredicateBuilder) as DamageSourcePredicateBuilder
```

| 参数              | 类型                                                                              |
| --------------- | ------------------------------------------------------------------------------- |
| entityPredicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::


