# LocationPredicate

Represents a predicate for a location an entity or a block may be in.

 This predicate firstly ensures that the given location is inside the coordinate bounds. If the check passes, then the predicate ensures that the dimension, biome, and feature that are at the specified coordinates correctly match the values that have been specified if any. Moreover, the predicate is also able to check if the block is situated above a campfire, or validate either the block or fluid at the current location, using respectively either a [BlockPredicate](/vanilla/api/predicate/BlockPredicate) or a [FluidPredicate](/vanilla/api/predicate/FluidPredicate). It is also able to check the light level of the current location with a [LightPredicate](/vanilla/api/predicate/LightPredicate).

 By default, any location is valid for this predicate.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.LocationPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

LocationPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in LocationPredicate

## Methods

### withBiomeName

Sets the biome in which the location should be.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withBiomeName(biome as MCResourceLocation) as LocationPredicate
```

| Parameter | Type                                                       | Description            |
| --------- | ---------------------------------------------------------- | ---------------------- |
| biome     | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The name of the biome. |


### withBlockPredicate

Creates and sets the [BlockPredicate](/vanilla/api/predicate/BlockPredicate) that will be used to match the block at the location.

 Any changes that have been made previously to the block predicate will be discarded, if any.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withBlockPredicate(builder as Consumer<BlockPredicate>) as LocationPredicate
```

| Parameter   | Type                                                                                | Description                                                                                            |
| ----------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| costruttore | Consumer&lt;[BlockPredicate](/vanilla/api/predicate/BlockPredicate)&gt; | A consumer that will be used to configure the [BlockPredicate](/vanilla/api/predicate/BlockPredicate). |


### withCampfireBelow

Indicates that the location must be on top of a campfire.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withCampfireBelow() as LocationPredicate
myLocationPredicate.withCampfireBelow();
```

### withDimension

Sets the dimension where the location should be located in.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withDimension(dimension as MCResourceLocation) as LocationPredicate
```

| Parameter | Type                                                       | Description                |
| --------- | ---------------------------------------------------------- | -------------------------- |
| dimension | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The name of the dimension. |


### withExactXPosition

Sets the value of the X position to exactly match the given <code>value</code>.

 If the position had already some bounds specified, then they will be overwritten with the new value.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withExactXPosition(x as float) as LocationPredicate
```

| Parameter | Type  | Description                                   |
| --------- | ----- | --------------------------------------------- |
| x         | float | The exact value the X position should assume. |


### withExactYPosition

Sets the value of the Y position to exactly match the given <code>value</code>.

 If the position had already some bounds specified, then they will be overwritten with the new value.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withExactYPosition(y as int) as LocationPredicate
```

| Parameter | Type | Description                                   |
| --------- | ---- | --------------------------------------------- |
| y         | int  | The exact value the Y position should assume. |


### withExactZPosition

Sets the value of the Z position to exactly match the given <code>value</code>.

 If the position had already some bounds specified, then they will be overwritten with the new value.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withExactZPosition(z as int) as LocationPredicate
```

| Parameter | Type | Description                                   |
| --------- | ---- | --------------------------------------------- |
| z         | int  | The exact value the Z position should assume. |


### withFeatureName

Sets the name of the feature this location should be located in.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withFeatureName(feature as string) as LocationPredicate
```

| Parameter | Type   | Description              |
| --------- | ------ | ------------------------ |
| feature   | string | The name of the feature. |


### withFluidPredicate

Creates and sets the [FluidPredicate](/vanilla/api/predicate/FluidPredicate) that will be used to match the block at the location, if present.

 Any changes that have been made previously to the fluid predicate will be discarded, if any.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withFluidPredicate(builder as Consumer<FluidPredicate>) as LocationPredicate
```

| Parameter   | Type                                                                                | Description                                                                                            |
| ----------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| costruttore | Consumer&lt;[FluidPredicate](/vanilla/api/predicate/FluidPredicate)&gt; | A consumer that will be used to configure the [FluidPredicate](/vanilla/api/predicate/FluidPredicate). |


### withLightPredicate

Creates and sets the [LightPredicate](/vanilla/api/predicate/LightPredicate) that will be used to match the light level at the location.

 Any changes that have been made previously to the light level predicate will be discarded, if any.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withLightPredicate(builder as Consumer<LightPredicate>) as LocationPredicate
```

| Parameter   | Type                                                                                | Description                                                                                            |
| ----------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| costruttore | Consumer&lt;[LightPredicate](/vanilla/api/predicate/LightPredicate)&gt; | A consumer that will be used to configure the [LightPredicate](/vanilla/api/predicate/LightPredicate). |


### withMaximumXPosition

Sets the maximum value the X position can assume to <code>max</code>.

 If the position had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the position didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withMaximumXPosition(max as float) as LocationPredicate
```

| Parameter | Type  | Description                                  |
| --------- | ----- | -------------------------------------------- |
| max       | float | The maximum value the X position can assume. |


### withMaximumYPosition

Sets the maximum value the Y position can assume to <code>max</code>.

 If the position had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the position didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withMaximumYPosition(max as float) as LocationPredicate
```

| Parameter | Type  | Description                                  |
| --------- | ----- | -------------------------------------------- |
| max       | float | The maximum value the Y position can assume. |


### withMaximumZPosition

Sets the maximum value the Z position can assume to <code>max</code>.

 If the position had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the position didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withMaximumZPosition(max as float) as LocationPredicate
```

| Parameter | Type  | Description                                  |
| --------- | ----- | -------------------------------------------- |
| max       | float | The maximum value the Z position can assume. |


### withMinimumXPosition

Sets the minimum value the X position can assume to <code>min</code>.

 If the position had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the position didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withMinimumXPosition(min as float) as LocationPredicate
```

| Parameter | Type  | Description                                  |
| --------- | ----- | -------------------------------------------- |
| min       | float | The minimum value the X position can assume. |


### withMinimumYPosition

Sets the minimum value the Y position can assume to <code>min</code>.

 If the position had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the position didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withMinimumYPosition(min as float) as LocationPredicate
```

| Parameter | Type  | Description                                  |
| --------- | ----- | -------------------------------------------- |
| min       | float | The minimum value the Y position can assume. |


### withMinimumZPosition

Sets the minimum value the Z position can assume to <code>min</code>.

 If the position had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the position didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withMinimumZPosition(min as float) as LocationPredicate
```

| Parameter | Type  | Description                                  |
| --------- | ----- | -------------------------------------------- |
| min       | float | The minimum value the Z position can assume. |


### withRangedXPosition

Sets both the minimum and maximum values the X position can assume to <code>min</code> and <code>max</code>
 respectively.

 If the position had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withRangedXPosition(min as float, max as float) as LocationPredicate
```

| Parameter | Type  | Description                                  |
| --------- | ----- | -------------------------------------------- |
| min       | float | The minimum value the X position can assume. |
| max       | float | The maximum value the X position can assume. |


### withRangedYPosition

Sets both the minimum and maximum values the Y position can assume to <code>min</code> and <code>max</code>
 respectively.

 If the position had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withRangedYPosition(min as float, max as float) as LocationPredicate
```

| Parameter | Type  | Description                                  |
| --------- | ----- | -------------------------------------------- |
| min       | float | The minimum value the Y position can assume. |
| max       | float | The maximum value the Y position can assume. |


### withRangedZPosition

Sets both the minimum and maximum values the Z position can assume to <code>min</code> and <code>max</code>
 respectively.

 If the position had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withRangedZPosition(min as float, max as float) as LocationPredicate
```

| Parameter | Type  | Description                                  |
| --------- | ----- | -------------------------------------------- |
| min       | float | The minimum value the Z position can assume. |
| max       | float | The maximum value the Z position can assume. |


### withoutCampfireBelow

Indicates that the location must not be on top of a campfire.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [LocationPredicate](/vanilla/api/predicate/LocationPredicate)

```zenscript
LocationPredicate.withoutCampfireBelow() as LocationPredicate
myLocationPredicate.withoutCampfireBelow();
```


