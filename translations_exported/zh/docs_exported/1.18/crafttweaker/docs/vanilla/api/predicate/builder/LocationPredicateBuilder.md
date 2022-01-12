# LocationPredicateBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.LocationPredicateBuilder;
```


## 使用方式

:::group{name=biome}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.biome(biome as ResourceLocation) as LocationPredicateBuilder
```

| 参数    | 类型                                             | 描述                      |
| ----- | ---------------------------------------------- | ----------------------- |
| biome | [资源位置](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=biome}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.biome(biome as string) as LocationPredicateBuilder
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| biome | string | No Description Provided |


:::

:::group{name=block}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.block(predicate as BlockPredicate) as LocationPredicateBuilder
```

| 参数        | 类型                                                      | 描述                      |
| --------- | ------------------------------------------------------- | ----------------------- |
| predicate | [BlockPredicate](/vanilla/api/predicate/BlockPredicate) | No Description Provided |


:::

:::group{name=block}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.block(predicate as BlockPredicateBuilder) as LocationPredicateBuilder
```

| 参数        | 类型                                                                            | 描述                      |
| --------- | ----------------------------------------------------------------------------- | ----------------------- |
| predicate | [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder) | No Description Provided |


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

| 参数        | 类型                                             | 描述                      |
| --------- | ---------------------------------------------- | ----------------------- |
| dimension | [资源位置](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=dimension}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.dimension(dimension as string) as LocationPredicateBuilder
```

| 参数        | 类型     | 描述                      |
| --------- | ------ | ----------------------- |
| dimension | string | No Description Provided |


:::

:::group{name=feature}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.feature(feature as ResourceLocation) as LocationPredicateBuilder
```

| 参数      | 类型                                             | 描述                      |
| ------- | ---------------------------------------------- | ----------------------- |
| feature | [资源位置](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=feature}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.feature(feature as string) as LocationPredicateBuilder
```

| 参数      | 类型     | 描述                      |
| ------- | ------ | ----------------------- |
| feature | string | No Description Provided |


:::

:::group{name=fluid}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.fluid(predicate as FluidPredicate) as LocationPredicateBuilder
```

| 参数        | 类型                                                      | 描述                      |
| --------- | ------------------------------------------------------- | ----------------------- |
| predicate | [FluidPredicate](/vanilla/api/predicate/FluidPredicate) | No Description Provided |


:::

:::group{name=fluid}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.fluid(predicate as FluidPredicateBuilder) as LocationPredicateBuilder
```

| 参数        | 类型                                                                            | 描述                      |
| --------- | ----------------------------------------------------------------------------- | ----------------------- |
| predicate | [FluidPredicateBuilder](/vanilla/api/predicate/builder/FluidPredicateBuilder) | No Description Provided |


:::

:::group{name=light}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.light(predicate as LightPredicate) as LocationPredicateBuilder
```

| 参数        | 类型                                                      | 描述                      |
| --------- | ------------------------------------------------------- | ----------------------- |
| predicate | [LightPredicate](/vanilla/api/predicate/LightPredicate) | No Description Provided |


:::

:::group{name=light}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.light(predicate as LightPredicateBuilder) as LocationPredicateBuilder
```

| 参数        | 类型                                                                            | 描述                      |
| --------- | ----------------------------------------------------------------------------- | ----------------------- |
| predicate | [LightPredicateBuilder](/vanilla/api/predicate/builder/LightPredicateBuilder) | No Description Provided |


:::

:::group{name=smokey}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.smokey(smokey as bool?) as LocationPredicateBuilder
```

| 参数     | 类型    | 描述                      | 可选   | DefaultValue |
| ------ | ----- | ----------------------- | ---- | ------------ |
| smokey | bool? | No Description Provided | true | true         |


:::

:::group{name=x}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.x(x as DoubleMinMaxBoundsPredicate) as LocationPredicateBuilder
```

| 参数 | 类型                                                                                | 描述                      |
| -- | --------------------------------------------------------------------------------- | ----------------------- |
| x  | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=y}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.y(y as DoubleMinMaxBoundsPredicate) as LocationPredicateBuilder
```

| 参数 | 类型                                                                                | 描述                      |
| -- | --------------------------------------------------------------------------------- | ----------------------- |
| y  | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=z}

Return Type: [LocationPredicateBuilder](/vanilla/api/predicate/builder/LocationPredicateBuilder)

```zenscript
LocationPredicateBuilder.z(z as DoubleMinMaxBoundsPredicate) as LocationPredicateBuilder
```

| 参数 | 类型                                                                                | 描述                      |
| -- | --------------------------------------------------------------------------------- | ----------------------- |
| z  | [DoubleMinMaxBoundsPredicate](/vanilla/api/predicate/DoubleMinMaxBoundsPredicate) | No Description Provided |


:::


