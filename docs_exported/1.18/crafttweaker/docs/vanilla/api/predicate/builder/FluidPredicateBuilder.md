# FluidPredicateBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.FluidPredicateBuilder;
```


## Methods

:::group{name=blocks}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
FluidPredicateBuilder.blocks(fluid as Fluid) as FluidPredicateBuilder
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| fluid     | [Fluid](/vanilla/api/fluid/Fluid) |


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

| Parameter |                                    Type                                     |
|-----------|-----------------------------------------------------------------------------|
| predicate | [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) |


:::

:::group{name=properties}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
FluidPredicateBuilder.properties(predicate as StatePropertiesPredicateBuilder) as FluidPredicateBuilder
```

| Parameter |                                               Type                                                |
|-----------|---------------------------------------------------------------------------------------------------|
| predicate | [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder) |


:::

:::group{name=tag}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
FluidPredicateBuilder.tag(tag as KnownTag<Fluid>) as FluidPredicateBuilder
```

| Parameter |                                        Type                                         |
|-----------|-------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; |


:::


