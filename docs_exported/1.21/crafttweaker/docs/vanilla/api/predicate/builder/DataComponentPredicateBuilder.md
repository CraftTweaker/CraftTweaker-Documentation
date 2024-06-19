# DataComponentPredicateBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.DataComponentPredicateBuilder;
```


## Static Methods

:::group{name=empty}

Return Type: [DataComponentPredicate](/vanilla/api/predicate/DataComponentPredicate)

```zenscript
// DataComponentPredicateBuilder.empty() as DataComponentPredicate

DataComponentPredicateBuilder.empty();
```

:::

## Methods

:::group{name=build}

Return Type: [DataComponentPredicate](/vanilla/api/predicate/DataComponentPredicate)

```zenscript
// DataComponentPredicateBuilder.build() as DataComponentPredicate

myDataComponentPredicateBuilder.build();
```

:::

:::group{name=expect}

Return Type: [DataComponentPredicateBuilder](/vanilla/api/predicate/builder/DataComponentPredicateBuilder)

```zenscript
DataComponentPredicateBuilder.expect<T : Object>(type as DataComponentType, value as T) as DataComponentPredicateBuilder
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType) |
| value     | T                                                             |
| T         | Object                                                        |


:::


