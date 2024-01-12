# LocationPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.LocationPredicate;
```


## Extending Record

LocationPredicate extends Record. That means all methods available in Record are also available in LocationPredicate

## Static Methods

:::group{name=at}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.at(x as DoubleMinMaxBoundsPredicate, y as DoubleMinMaxBoundsPredicate, z as DoubleMinMaxBoundsPredicate) as LocationPredicate
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| x         | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |
| y         | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |
| z         | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |


:::

:::group{name=create}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
// LocationPredicate.create() as LocationPredicateBuilder

LocationPredicate.create();
```

:::

