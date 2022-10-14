# DamageSourcePredicateBuilder

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.DamageSourcePredicateBuilder;
```


## Metodi

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

| Parametro     | Tipo  | Optional | Default Value |
| ------------- | ----- | -------- | ------------- |
| bypassesArmor | bool? | sì       | sì            |


:::

:::group{name=bypassesInvulnerability}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.bypassesInvulnerability(bypassesInvulnerability as bool?) as DamageSourcePredicateBuilder
```

| Parametro               | Tipo  | Optional | Default Value |
| ----------------------- | ----- | -------- | ------------- |
| bypassesInvulnerability | bool? | sì       | sì            |


:::

:::group{name=bypassesMagic}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.bypassesMagic(bypassesMagic as bool?) as DamageSourcePredicateBuilder
```

| Parametro     | Tipo  | Optional | Default Value |
| ------------- | ----- | -------- | ------------- |
| bypassesMagic | bool? | sì       | sì            |


:::

:::group{name=direct}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.direct(entityPredicate as EntityPredicate) as DamageSourcePredicateBuilder
```

| Parametro       | Tipo                                                      |
| --------------- | --------------------------------------------------------- |
| entityPredicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=direct}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.direct(entityPredicate as EntityPredicateBuilder) as DamageSourcePredicateBuilder
```

| Parametro       | Tipo                                                                            |
| --------------- | ------------------------------------------------------------------------------- |
| entityPredicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

:::group{name=isExplosion}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isExplosion(isExplosion as bool?) as DamageSourcePredicateBuilder
```

| Parametro   | Tipo  | Optional | Default Value |
| ----------- | ----- | -------- | ------------- |
| isExplosion | bool? | sì       | sì            |


:::

:::group{name=isFire}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isFire(isFire as bool?) as DamageSourcePredicateBuilder
```

| Parametro | Tipo  | Optional | Default Value |
| --------- | ----- | -------- | ------------- |
| isFire    | bool? | sì       | sì            |


:::

:::group{name=isLightning}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isLightning(isLightning as bool?) as DamageSourcePredicateBuilder
```

| Parametro   | Tipo  | Optional | Default Value |
| ----------- | ----- | -------- | ------------- |
| isLightning | bool? | sì       | sì            |


:::

:::group{name=isMagic}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isMagic(isMagic as bool?) as DamageSourcePredicateBuilder
```

| Parametro | Tipo  | Optional | Default Value |
| --------- | ----- | -------- | ------------- |
| isMagic   | bool? | sì       | sì            |


:::

:::group{name=isProjectile}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.isProjectile(isProjectile as bool?) as DamageSourcePredicateBuilder
```

| Parametro    | Tipo  | Optional | Default Value |
| ------------ | ----- | -------- | ------------- |
| isProjectile | bool? | sì       | sì            |


:::

:::group{name=source}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.source(entityPredicate as EntityPredicate) as DamageSourcePredicateBuilder
```

| Parametro       | Tipo                                                      |
| --------------- | --------------------------------------------------------- |
| entityPredicate | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=source}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.source(entityPredicate as EntityPredicateBuilder) as DamageSourcePredicateBuilder
```

| Parametro       | Tipo                                                                            |
| --------------- | ------------------------------------------------------------------------------- |
| entityPredicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::


