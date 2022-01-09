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

| Parameter | Type | Description |
|-----------|------|-------------|
| x | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |
| y | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |
| z | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |


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

| Parameter | Type | Description |
|-----------|------|-------------|
| biome | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=inBiome}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.inBiome(biome as string) as LocationPredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| biome | string | No Description Provided |


:::

:::group{name=inDimension}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.inDimension(dimension as ResourceLocation) as LocationPredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| dimension | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=inDimension}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.inDimension(dimension as string) as LocationPredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| dimension | string | No Description Provided |


:::

:::group{name=inFeature}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.inFeature(feature as ResourceLocation) as LocationPredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| feature | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=inFeature}

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.inFeature(feature as string) as LocationPredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| feature | string | No Description Provided |


:::

