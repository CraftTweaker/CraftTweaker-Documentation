# LocationPredicateBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.LocationPredicateBuilder;
```


## Methods

:::group{name=biome}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.biome(biome as ResourceLocation) as LocationPredicateBuilder
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| biome     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=biome}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.biome(biome as string) as LocationPredicateBuilder
```

| Parameter |  Type  |
|-----------|--------|
| biome     | string |


:::

:::group{name=block}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.block(predicate as BlockPredicate) as LocationPredicateBuilder
```

| Parameter |                          Type                           |
|-----------|---------------------------------------------------------|
| predicate | [BlockPredicate](/vanilla/api/predicate/BlockPredicate) |


:::

:::group{name=block}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.block(predicate as BlockPredicateBuilder) as LocationPredicateBuilder
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| predicate | [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder) |


:::

:::group{name=build}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
// LocationPredicateBuilder.build() as LocationPredicate

myLocationPredicateBuilder.build();
```

:::

:::group{name=dimension}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.dimension(dimension as ResourceLocation) as LocationPredicateBuilder
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| dimension | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=dimension}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.dimension(dimension as string) as LocationPredicateBuilder
```

| Parameter |  Type  |
|-----------|--------|
| dimension | string |


:::

:::group{name=fluid}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.fluid(predicate as FluidPredicate) as LocationPredicateBuilder
```

| Parameter |                          Type                           |
|-----------|---------------------------------------------------------|
| predicate | [FluidPredicate](/vanilla/api/predicate/FluidPredicate) |


:::

:::group{name=fluid}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.fluid(predicate as FluidPredicateBuilder) as LocationPredicateBuilder
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| predicate | [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder) |


:::

:::group{name=light}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.light(predicate as LightPredicate) as LocationPredicateBuilder
```

| Parameter |                          Type                           |
|-----------|---------------------------------------------------------|
| predicate | [LightPredicate](/vanilla/api/predicate/LightPredicate) |


:::

:::group{name=light}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.light(predicate as LightPredicateBuilder) as LocationPredicateBuilder
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| predicate | [LightPredicateBuilder](/vanilla/api/predicate/builder/LightPredicateBuilder) |


:::

:::group{name=smokey}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.smokey(smokey as bool?) as LocationPredicateBuilder
```

| Parameter | Type  | Optional | Default Value |
|-----------|-------|----------|---------------|
| smokey    | bool? | true     | true          |


:::

:::group{name=structure}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.structure(structure as ResourceLocation) as LocationPredicateBuilder
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| structure | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=structure}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.structure(structure as string) as LocationPredicateBuilder
```

| Parameter |  Type  |
|-----------|--------|
| structure | string |


:::

:::group{name=x}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.x(x as DoubleMinMaxBoundsPredicate) as LocationPredicateBuilder
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| x         | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |


:::

:::group{name=y}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.y(y as DoubleMinMaxBoundsPredicate) as LocationPredicateBuilder
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| y         | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |


:::

:::group{name=z}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.z(z as DoubleMinMaxBoundsPredicate) as LocationPredicateBuilder
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| z         | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |


:::


