# FluidPredicateBuilder

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.FluidPredicateBuilder;
```


## Methoden

:::group{name=blocks}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
FluidPredicateBuilder.blocks(fluid as Fluid) as FluidPredicateBuilder
```

| Parameter | Type                              | Beschreibung            |
| --------- | --------------------------------- | ----------------------- |
| fluid     | [Fluid](/vanilla/api/fluid/Fluid) | No Description Provided |


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

| Parameter | Type                                                                        | Beschreibung            |
| --------- | --------------------------------------------------------------------------- | ----------------------- |
| predicate | [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) | No Description Provided |


:::

:::group{name=properties}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
FluidPredicateBuilder.properties(predicate as StatePropertiesPredicateBuilder) as FluidPredicateBuilder
```

| Parameter | Type                                                                                              | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| predicate | [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder) | No Description Provided |


:::

:::group{name=tag}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
FluidPredicateBuilder.tag(tag as MCTag<Fluid>) as FluidPredicateBuilder
```

| Parameter | Type                                                                                 | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| tag       | [MCTag](/vanilla/api/tag/MCTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; | No Description Provided |


:::


