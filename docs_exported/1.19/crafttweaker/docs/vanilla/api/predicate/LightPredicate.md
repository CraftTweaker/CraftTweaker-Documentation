# LightPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.LightPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [LightPredicate](/vanilla/api/predicate/LightPredicate)

```zenscript
// LightPredicate.any() as LightPredicate

LightPredicate.any();
```

:::

:::group{name=create}

Return Type: [LightPredicateBuilder](/vanilla/api/predicate/builder/LightPredicateBuilder)

```zenscript
// LightPredicate.create() as LightPredicateBuilder

LightPredicate.create();
```

:::

:::group{name=create}

Return Type: [LightPredicateBuilder](/vanilla/api/predicate/builder/LightPredicateBuilder)

```zenscript
LightPredicate.create(level as IntMinMaxBoundsPredicate) as LightPredicateBuilder
```

| Parameter |                                    Type                                     |
|-----------|-----------------------------------------------------------------------------|
| level     | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

## Methods

:::group{name=matches}

Return Type: boolean

```zenscript
LightPredicate.matches(level as ServerLevel, pos as BlockPos) as boolean
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)   |


:::


