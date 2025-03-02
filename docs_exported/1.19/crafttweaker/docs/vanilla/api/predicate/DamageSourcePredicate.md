# DamageSourcePredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.DamageSourcePredicate;
```


## Static Methods

:::group{name=any}

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.any() as DamageSourcePredicate

DamageSourcePredicate.any();
```

:::

:::group{name=create}

Return Type: [DamageSourcePredicateBuilder](/vanilla/api/predicate/builder/DamageSourcePredicateBuilder)

```zenscript
// DamageSourcePredicate.create() as DamageSourcePredicateBuilder

DamageSourcePredicate.create();
```

:::

## Methods

:::group{name=matches}

Return Type: boolean

```zenscript
DamageSourcePredicate.matches(player as ServerPlayer, source as DamageSource) as boolean
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |
| source    | [DamageSource](/vanilla/api/world/DamageSource)              |


:::

:::group{name=matches}

Return Type: boolean

```zenscript
DamageSourcePredicate.matches(level as ServerLevel, pos as Vec3, source as DamageSource) as boolean
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel)   |
| pos       | [Vec3](/vanilla/api/util/math/Vec3)             |
| source    | [DamageSource](/vanilla/api/world/DamageSource) |


:::


