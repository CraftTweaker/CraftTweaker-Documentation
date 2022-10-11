# DoubleMinMaxBoundsPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.DoubleMinMaxBoundsPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate)

```zenscript
// DoubleMinMaxBoundsPredicate.any() as DoubleMinMaxBoundsPredicate

DoubleMinMaxBoundsPredicate.any();
```

:::

:::group{name=atLeast}

Return Type: [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate)

```zenscript
DoubleMinMaxBoundsPredicate.atLeast(min as double) as DoubleMinMaxBoundsPredicate
```

| Parameter |  Type  |
|-----------|--------|
| min       | double |


:::

:::group{name=atMost}

Return Type: [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate)

```zenscript
DoubleMinMaxBoundsPredicate.atMost(max as double) as DoubleMinMaxBoundsPredicate
```

| Parameter |  Type  |
|-----------|--------|
| max       | double |


:::

:::group{name=between}

Return Type: [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate)

```zenscript
DoubleMinMaxBoundsPredicate.between(min as double, max as double) as DoubleMinMaxBoundsPredicate
```

| Parameter |  Type  |
|-----------|--------|
| min       | double |
| max       | double |


:::

:::group{name=exactly}

Return Type: [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate)

```zenscript
DoubleMinMaxBoundsPredicate.exactly(value as double) as DoubleMinMaxBoundsPredicate
```

| Parameter |  Type  |
|-----------|--------|
| value     | double |


:::

