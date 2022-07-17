# FluidPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.FluidPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [FluidPredicate](/vanilla/api/predicate/FluidPredicate)

```zenscript
// FluidPredicate.any() as FluidPredicate

FluidPredicate.any();
```

:::

:::group{name=create}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
// FluidPredicate.create() as FluidPredicateBuilder

FluidPredicate.create();
```

:::

:::group{name=create}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
FluidPredicate.create(fluid as Fluid) as FluidPredicateBuilder
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| fluid     | [Fluid](/vanilla/api/fluid/Fluid) |


:::

:::group{name=create}

Return Type: [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder)

```zenscript
FluidPredicate.create(tag as KnownTag<Fluid>) as FluidPredicateBuilder
```

| Parameter |                                        Type                                         |
|-----------|-------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; |


:::

