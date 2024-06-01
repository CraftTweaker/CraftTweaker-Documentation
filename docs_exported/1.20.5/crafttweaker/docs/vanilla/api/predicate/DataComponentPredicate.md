# DataComponentPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.DataComponentPredicate;
```


## Implemented Interfaces
DataComponentPredicate implements the following interfaces. That means all methods defined in these interfaces are also available in DataComponentPredicate

- Predicate&lt;[DataComponentMap](/vanilla/api/component/DataComponentMap)&gt;

## Static Methods

:::group{name=allOf}

Return Type: [DataComponentPredicate](/vanilla/api/predicate/DataComponentPredicate)

```zenscript
DataComponentPredicate.allOf(map as DataComponentMap) as DataComponentPredicate
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| map       | [DataComponentMap](/vanilla/api/component/DataComponentMap) |


:::

:::group{name=create}

Return Type: [DataComponentPredicateBuilder](/vanilla/api/predicate/builder/DataComponentPredicateBuilder)

```zenscript
// DataComponentPredicate.create() as DataComponentPredicateBuilder

DataComponentPredicate.create();
```

:::

