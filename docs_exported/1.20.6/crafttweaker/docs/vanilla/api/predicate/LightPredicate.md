# LightPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.LightPredicate;
```


## Extending Record

LightPredicate extends Record. That means all methods available in Record are also available in LightPredicate

## Static Methods

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

