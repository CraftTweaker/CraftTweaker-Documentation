# FluidPredicate

Represents a predicate for a [MCFluid](/vanilla/api/fluid/MCFluid).

 This predicate will match a fluid state with either the given [MCFluid](/vanilla/api/fluid/MCFluid) or fluid tag ([MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;), with the second check taking precedence over the first if they are both present. If this comparison succeeds, then the predicate may also verify additional fluid state properties via the supplied [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate).

 By default, this predicate allows any fluid state to pass the checks without restrictions.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.FluidPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

FluidPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in FluidPredicate

## Methods

:::group{name=withFluid}

Sets the fluid that this predicate should match.

 If a tag to match against has already been set, then the tag check will take precedence over this check.

Returns: This predicate for chaining.  
Return Type: [FluidPredicate](/vanilla/api/predicate/FluidPredicate)

```zenscript
FluidPredicate.withFluid(fluid as MCFluid) as FluidPredicate
```

| Parameter | Type                                  | Description                           |
| --------- | ------------------------------------- | ------------------------------------- |
| fluid     | [MCFluid](/vanilla/api/fluid/MCFluid) | The fluid the predicate should match. |


:::

:::group{name=withFluidTag}

Sets the tag that this predicate should use for matching.

 The predicate will successfully match only if the supplied fluid state's fluid is contained within the given tag.

 Specifying both a tag and a fluid to match against will make the tag take precedence over the fluid.

Returns: This predicate for chaining.  
Return Type: [FluidPredicate](/vanilla/api/predicate/FluidPredicate)

```zenscript
FluidPredicate.withFluidTag(fluidTag as MCTag<MCFluid>) as FluidPredicate
```

| Parameter | Type                                                                                      | Description                                    |
| --------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------- |
| fluidTag  | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt; | The tag the predicate should use for matching. |


:::

:::group{name=withStatePropertiesPredicate}

Creates and sets the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) that will be matched against the fluid state's properties.

 Any changes that have already been made to the state properties predicate will be overwritten, effectively replacing the previous one, if any.

Returns: This predicate for chaining.  
Return Type: [FluidPredicate](/vanilla/api/predicate/FluidPredicate)

```zenscript
FluidPredicate.withStatePropertiesPredicate(builder as Consumer<StatePropertiesPredicate>) as FluidPredicate
```

| Parameter   | Type                                                                                                    | Description                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| konstruktor | Consumer&lt;[StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)&gt; | A consumer that will be used to configure the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate). |


:::


