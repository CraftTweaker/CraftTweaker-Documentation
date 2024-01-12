# DamageSourcePredicateBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.DamageSourcePredicateBuilder;
```


## Methods

:::group{name=build}

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicateBuilder.build() as DamageSourcePredicate

myDamageSourcePredicateBuilder.build();
```

:::

:::group{name=direct}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.direct(entityPredicate as EntityPredicateBuilder) as DamageSourcePredicateBuilder
```

|    Parameter    |                                      Type                                       |
|-----------------|---------------------------------------------------------------------------------|
| entityPredicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

:::group{name=source}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.source(entityPredicate as EntityPredicateBuilder) as DamageSourcePredicateBuilder
```

|    Parameter    |                                      Type                                       |
|-----------------|---------------------------------------------------------------------------------|
| entityPredicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

:::group{name=tag}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
DamageSourcePredicateBuilder.tag(tag as TagPredicate<DamageType>) as DamageSourcePredicateBuilder
```

| Parameter |                                                     Type                                                      |
|-----------|---------------------------------------------------------------------------------------------------------------|
| tag       | [TagPredicate](/vanilla/api/predicate/TagPredicate)&lt;[DamageType](/vanilla/api/world/damage/DamageType)&gt; |


:::


