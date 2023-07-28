# DistancePredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.DistancePredicate;
```


## Static Methods

:::group{name=absoluteDistance}

Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.absoluteDistance(bounds as DoubleMinMaxBoundsPredicate) as DistancePredicate
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| bounds    | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |


:::

:::group{name=any}

Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
// DistancePredicate.any() as DistancePredicate

DistancePredicate.any();
```

:::

:::group{name=create}

Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.create(x as DoubleMinMaxBoundsPredicate, y as DoubleMinMaxBoundsPredicate, z as DoubleMinMaxBoundsPredicate, horizontal as DoubleMinMaxBoundsPredicate, absolute as DoubleMinMaxBoundsPredicate) as DistancePredicate
```

| Parameter  |                                       Type                                        |
|------------|-----------------------------------------------------------------------------------|
| x          | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |
| y          | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |
| z          | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |
| horizontal | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |
| absolute   | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |


:::

:::group{name=horizontalDistance}

Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.horizontalDistance(bounds as DoubleMinMaxBoundsPredicate) as DistancePredicate
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| bounds    | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |


:::

:::group{name=verticalDistance}

Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.verticalDistance(bounds as DoubleMinMaxBoundsPredicate) as DistancePredicate
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| bounds    | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |


:::

:::group{name=xyz}

Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.xyz(x as DoubleMinMaxBoundsPredicate, y as DoubleMinMaxBoundsPredicate, z as DoubleMinMaxBoundsPredicate) as DistancePredicate
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| x         | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |
| y         | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |
| z         | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |


:::

