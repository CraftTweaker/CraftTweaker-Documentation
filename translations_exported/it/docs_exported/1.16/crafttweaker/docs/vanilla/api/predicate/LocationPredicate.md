# LocationPredicate

Represents a predicate for a location an entity or a block may be in.

 This predicate firstly ensures that the given location is inside the coordinate bounds. If the check passes, then the predicate ensures that the dimension, biome, and feature that are at the specified coordinates correctly match the values that have been specified if any. Moreover, the predicate is also able to check if the block is situated above a campfire, or validate either the block or fluid at the current location, using respectively either a [BlockPredicate](/vanilla/api/predicate/BlockPredicate) or a [FluidPredicate](/vanilla/api/predicate/FluidPredicate). It is also able to check the light level of the current location with a [LightPredicate](/vanilla/api/predicate/LightPredicate).

 By default, any location is valid for this predicate.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.LocationPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

LocationPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in LocationPredicate

## Metodi

:::group{name=withBiomeName}

Sets the biome in which the location should be.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withBiomeName(biome as MCResourceLocation) as LocationPredicate
```

| Parametro | Tipo                                                       | Descrizione            |
| --------- | ---------------------------------------------------------- | ---------------------- |
| biome     | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The name of the biome. |


:::

:::group{name=withBlockPredicate}

Creates and sets the [BlockPredicate](/vanilla/api/predicate/BlockPredicate) that will be used to match the block at the location.

 Any changes that have been made previously to the block predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withBlockPredicate(builder as Consumer<BlockPredicate>) as LocationPredicate
```

| Parametro   | Tipo                                                                                | Descrizione                                                                                            |
| ----------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| costruttore | Consumer&lt;[BlockPredicate](/vanilla/api/predicate/BlockPredicate)&gt; | A consumer that will be used to configure the [BlockPredicate](/vanilla/api/predicate/BlockPredicate). |


:::

:::group{name=withCampfireBelow}

Indicates that the location must be on top of a campfire.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
// LocationPredicate.withCampfireBelow() as LocationPredicate

myLocationPredicate.withCampfireBelow();
```

:::

:::group{name=withDimension}

Sets the dimension where the location should be located in.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withDimension(dimension as MCResourceLocation) as LocationPredicate
```

| Parametro | Tipo                                                       | Descrizione                |
| --------- | ---------------------------------------------------------- | -------------------------- |
| dimension | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The name of the dimension. |


:::

:::group{name=withExactXPosition}

Sets the value of the X position to exactly match the given <code>value</code>.

 If the position had already some bounds specified, then they will be overwritten with the new value.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withExactXPosition(x as float) as LocationPredicate
```

| Parametro | Tipo  | Descrizione                                   |
| --------- | ----- | --------------------------------------------- |
| x         | float | The exact value the X position should assume. |


:::

:::group{name=withExactYPosition}

Sets the value of the Y position to exactly match the given <code>value</code>.

 If the position had already some bounds specified, then they will be overwritten with the new value.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withExactYPosition(y as int) as LocationPredicate
```

| Parametro | Tipo | Descrizione                                   |
| --------- | ---- | --------------------------------------------- |
| y         | int  | The exact value the Y position should assume. |


:::

:::group{name=withExactZPosition}

Sets the value of the Z position to exactly match the given <code>value</code>.

 If the position had already some bounds specified, then they will be overwritten with the new value.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withExactZPosition(z as int) as LocationPredicate
```

| Parametro | Tipo | Descrizione                                   |
| --------- | ---- | --------------------------------------------- |
| z         | int  | The exact value the Z position should assume. |


:::

:::group{name=withFeatureName}

Sets the name of the feature this location should be located in.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withFeatureName(feature as string) as LocationPredicate
```

| Parametro | Tipo   | Descrizione              |
| --------- | ------ | ------------------------ |
| feature   | string | The name of the feature. |


:::

:::group{name=withFluidPredicate}

Creates and sets the [FluidPredicate](/vanilla/api/predicate/FluidPredicate) that will be used to match the block at the location, if present.

 Any changes that have been made previously to the fluid predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withFluidPredicate(builder as Consumer<FluidPredicate>) as LocationPredicate
```

| Parametro   | Tipo                                                                                | Descrizione                                                                                            |
| ----------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| costruttore | Consumer&lt;[FluidPredicate](/vanilla/api/predicate/FluidPredicate)&gt; | A consumer that will be used to configure the [FluidPredicate](/vanilla/api/predicate/FluidPredicate). |


:::

:::group{name=withLightPredicate}

Creates and sets the [LightPredicate](/vanilla/api/predicate/LightPredicate) that will be used to match the light level at the location.

 Any changes that have been made previously to the light level predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withLightPredicate(builder as Consumer<LightPredicate>) as LocationPredicate
```

| Parametro   | Tipo                                                                                | Descrizione                                                                                            |
| ----------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| costruttore | Consumer&lt;[LightPredicate](/vanilla/api/predicate/LightPredicate)&gt; | A consumer that will be used to configure the [LightPredicate](/vanilla/api/predicate/LightPredicate). |


:::

:::group{name=withMaximumXPosition}

Sets the maximum value the X position can assume to <code>max</code>.

 If the position had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the position didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withMaximumXPosition(max as float) as LocationPredicate
```

| Parametro | Tipo  | Descrizione                                  |
| --------- | ----- | -------------------------------------------- |
| max       | float | The maximum value the X position can assume. |


:::

:::group{name=withMaximumYPosition}

Sets the maximum value the Y position can assume to <code>max</code>.

 If the position had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the position didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withMaximumYPosition(max as float) as LocationPredicate
```

| Parametro | Tipo  | Descrizione                                  |
| --------- | ----- | -------------------------------------------- |
| max       | float | The maximum value the Y position can assume. |


:::

:::group{name=withMaximumZPosition}

Sets the maximum value the Z position can assume to <code>max</code>.

 If the position had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the position didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withMaximumZPosition(max as float) as LocationPredicate
```

| Parametro | Tipo  | Descrizione                                  |
| --------- | ----- | -------------------------------------------- |
| max       | float | The maximum value the Z position can assume. |


:::

:::group{name=withMinimumXPosition}

Sets the minimum value the X position can assume to <code>min</code>.

 If the position had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the position didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withMinimumXPosition(min as float) as LocationPredicate
```

| Parametro | Tipo  | Descrizione                                  |
| --------- | ----- | -------------------------------------------- |
| min       | float | The minimum value the X position can assume. |


:::

:::group{name=withMinimumYPosition}

Sets the minimum value the Y position can assume to <code>min</code>.

 If the position had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the position didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withMinimumYPosition(min as float) as LocationPredicate
```

| Parametro | Tipo  | Descrizione                                  |
| --------- | ----- | -------------------------------------------- |
| min       | float | The minimum value the Y position can assume. |


:::

:::group{name=withMinimumZPosition}

Sets the minimum value the Z position can assume to <code>min</code>.

 If the position had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the position didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withMinimumZPosition(min as float) as LocationPredicate
```

| Parametro | Tipo  | Descrizione                                  |
| --------- | ----- | -------------------------------------------- |
| min       | float | The minimum value the Z position can assume. |


:::

:::group{name=withRangedXPosition}

Sets both the minimum and maximum values the X position can assume to <code>min</code> and <code>max</code>
 respectively.

 If the position had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withRangedXPosition(min as float, max as float) as LocationPredicate
```

| Parametro | Tipo  | Descrizione                                  |
| --------- | ----- | -------------------------------------------- |
| min       | float | The minimum value the X position can assume. |
| max       | float | The maximum value the X position can assume. |


:::

:::group{name=withRangedYPosition}

Sets both the minimum and maximum values the Y position can assume to <code>min</code> and <code>max</code>
 respectively.

 If the position had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withRangedYPosition(min as float, max as float) as LocationPredicate
```

| Parametro | Tipo  | Descrizione                                  |
| --------- | ----- | -------------------------------------------- |
| min       | float | The minimum value the Y position can assume. |
| max       | float | The maximum value the Y position can assume. |


:::

:::group{name=withRangedZPosition}

Sets both the minimum and maximum values the Z position can assume to <code>min</code> and <code>max</code>
 respectively.

 If the position had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withRangedZPosition(min as float, max as float) as LocationPredicate
```

| Parametro | Tipo  | Descrizione                                  |
| --------- | ----- | -------------------------------------------- |
| min       | float | The minimum value the Z position can assume. |
| max       | float | The maximum value the Z position can assume. |


:::

:::group{name=withoutCampfireBelow}

Indicates that the location must not be on top of a campfire.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
// LocationPredicate.withoutCampfireBelow() as LocationPredicate

myLocationPredicate.withoutCampfireBelow();
```

:::


