# FluidPredicateBuilder

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.FluidPredicateBuilder;
```


## Методы

:::group{name=blocks}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
FluidPredicateBuilder.blocks(fluid as Fluid) as FluidPredicateBuilder
```

| Параметр | Тип                               |
| -------- | --------------------------------- |
| fluid    | [Fluid](/vanilla/api/fluid/Fluid) |


:::

:::group{name=build}

Return Type: [FluidPredicate](/vanilla/api/predicate/FluidPredicate)

```zenscript
// FluidPredicateBuilder.build() as FluidPredicate

myFluidPredicateBuilder.build();
```

:::

:::group{name=properties}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
FluidPredicateBuilder.properties(predicate as StatePropertiesPredicate) as FluidPredicateBuilder
```

| Параметр  | Тип                                                                         |
| --------- | --------------------------------------------------------------------------- |
| predicate | [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) |


:::

:::group{name=properties}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
FluidPredicateBuilder.properties(predicate as StatePropertiesPredicateBuilder) as FluidPredicateBuilder
```

| Параметр  | Тип                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------- |
| predicate | [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder) |


:::

:::group{name=tag}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
FluidPredicateBuilder.tag(tag as KnownTag<Fluid>) as FluidPredicateBuilder
```

| Параметр | Тип                                                                                             |
| -------- | ----------------------------------------------------------------------------------------------- |
| tag      | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; |


:::


