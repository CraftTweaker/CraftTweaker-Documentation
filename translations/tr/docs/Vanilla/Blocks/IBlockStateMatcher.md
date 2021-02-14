# IBlockStateMatcher

An IBlockStateMatcher object can be used to match an [IBlockState](/Vanilla/Blocks/IBlockState/) object against a set of requirements or a set of matching blockstates.

## Importing the package

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/) or using the static `.create()` method), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockStateMatcher;`

## Matching a Specific IBlockState

Every [IBlockState](/Vanilla/Blocks/IBlockState/) is also an IBlockStateMatcher which matches only to itself.

## Matching Any Block State for a Specific Block

You can use [IBlockState](/Vanilla/Blocks/IBlockState/)'s `matchBlock()` method to create an IBlockStateMatcher that matches any possible blockstate for that block.

## Calling an IBlockStateMatcher

There are several methods that return an IBlockStateMatcher

- Using `IBlockStateMatcher.create()`.
- Using the `withMatchedValuesForProperty()` method on another IBlockStateMatcher.
- OR two IBlockStateMatchers together to get a compound matcher.
- Creating an [IBlockState](/Vanilla/Blocks/IBlockState/), as all IBlockState objects are IBlockStateMatchers.

## Compound Matchers

When using OR (`|`) to combine IBlockStateMatchers, the resulting IBlockStateMatcher is no longer tied to one specific underlying block, as it would be with an [IBlockState](/Vanilla/Blocks/IBlockState/) or an IBlockStateMatcher created using the `IBlockStateMatcher.create()` method. Instead, the matcher matches any blockstate which would have been matched by any of the combined matchers.

Because this blockstate is not tied to a specific block, it is not possible to use the `withMatchedValuesForProperty()` method to retrieve another IBlockStateMatcher.

### static create

`static IBlockStateMatcher create(IBlockState... blockStates);` Parameters:

- [IBlockState](/Vanilla/Blocks/IBlockState/)... blockStates → Zero or more blockstates to match with this matcher. 

Returns an IBlockStateMatcher to match the specified blockstate(s).

- If zero `blockStates` are supplied, this matcher will never match any blockstates. 
- If only one blockstate is supplied in `blockStates`, the resulting IBlockStateMatcher will match *any* blockstate of the provided IBlockState's underlying block with any property values accepted as matching. The `withMatchedValuesForProperty` method can be used to add more specific requirements for the properties. 
- If multiple `blockStates` are supplied, the resulting IBlockStateMatcher is the same as using the OR (`|`) operator with each of the IBlockStates provided.

## ZenMethods

### matches

`boolean matches(IBlockState blockState);`  
Parameters:

- [IBlockState](/Vanilla/Blocks/IBlockState/) blockState → The blockstate object to match against

Returns a boolean that represents whether the blockstate matched this matcher's requirements.  
You can also use `A has B` that represents `A.matches(B)`.

### Get or add allowed properties

*(These methods are only allowed on non-compound IBlockStateMatcher instances)*

    IBlockStateMatcher withMatchedValuesForProperty(String name, String... values);
    List<String> getMatchedValuesForProperty(String name);
    Map<String, List<String>> getMatchedProperties();
    

Parameters:

- String name → The name of the property
- String... values → One or more values that the property of a matching IBlockState may have.

Returns a new IBlockStateMatcher with the same property requirements as this IBlockStateMatcher with the exception of the specified property `name`, which will now allow any of the specified `values` as a matching input.

### getMatchingBlockStates

`Collection<IBlockState> getMatchingBlockStates();` Returns a collection of every [IBlockState](/Vanilla/Blocks/IBlockState/) with any combination of properties that match this IBlockStateMatcher. This list may contain blockstates that are not possible to get through normal gameplay means. (Ex: `IBlockStateMatcher.create(<blockstate:minecraft:log>)` will return an IBlockStateMatcher that matches to logs with property `axis=none`, having bark textures on all 6 sides.)

### Check if a BlockState is a compound State

`boolean isCompound()`

Does what you'd expect.

### Get a commandString representation

`ZenGetter commandString`

Returns a Bracket Handler expression string, if needed paired with `withMatchedValueForProperty()` calls.  
Keep in mind though, that the returned method calls do not have `""` around the parameters.  
So if you wanted to copy that result, you'd need to manually add them to the arguments!