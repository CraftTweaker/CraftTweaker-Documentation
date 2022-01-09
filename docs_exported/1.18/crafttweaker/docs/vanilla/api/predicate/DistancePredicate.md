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

| Parameter | Type | Description |
|-----------|------|-------------|
| bounds | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |


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

| Parameter | Type | Description |
|-----------|------|-------------|
| x | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |
| y | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |
| z | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |
| horizontal | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |
| absolute | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=horizontalDistance}

Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.horizontalDistance(bounds as DoubleMinMaxBoundsPredicate) as DistancePredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| bounds | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=verticalDistance}

Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.verticalDistance(bounds as DoubleMinMaxBoundsPredicate) as DistancePredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| bounds | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=xyz}

Return Type: [DistancePredicate](/vanilla/api/predicate/DistancePredicate)

```zenscript
DistancePredicate.xyz(x as DoubleMinMaxBoundsPredicate, y as DoubleMinMaxBoundsPredicate, z as DoubleMinMaxBoundsPredicate) as DistancePredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |
| y | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |
| z | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |


:::

