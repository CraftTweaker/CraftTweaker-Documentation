# LocationPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.LocationPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
// LocationPredicate.any() as LocationPredicate

LocationPredicate.any();
```

:::

:::group{name=at}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.at(x as DoubleMinMaxBoundsPredicate, y as DoubleMinMaxBoundsPredicate, z as DoubleMinMaxBoundsPredicate) as LocationPredicate
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| x         | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |
| y         | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |
| z         | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) |


:::

:::group{name=create}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
// LocationPredicate.create() as LocationPredicateBuilder

LocationPredicate.create();
```

:::

:::group{name=inBiome}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.inBiome(biome as ResourceLocation) as LocationPredicate
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| biome     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=inBiome}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.inBiome(biome as string) as LocationPredicate
```

| Parameter |  Type  |
|-----------|--------|
| biome     | string |


:::

:::group{name=inDimension}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.inDimension(dimension as ResourceLocation) as LocationPredicate
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| dimension | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=inDimension}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.inDimension(dimension as string) as LocationPredicate
```

| Parameter |  Type  |
|-----------|--------|
| dimension | string |


:::

:::group{name=inStructure}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.inStructure(structure as ResourceLocation) as LocationPredicate
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| structure | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=inStructure}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.inStructure(structure as string) as LocationPredicate
```

| Parameter |  Type  |
|-----------|--------|
| structure | string |


:::

