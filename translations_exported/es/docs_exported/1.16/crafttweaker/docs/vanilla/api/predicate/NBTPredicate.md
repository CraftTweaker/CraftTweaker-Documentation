# NBTPredicate

Represents a predicate for all kinds of NBT data.

 The predicate will match the given NBT exactly, making partial matches not possible with this predicate. Nevertheless, a predicate without any NBT specified will be considered effectively as a way of matching any NBT data construct.

 By default, the predicate allows any NBT, without checking it.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.NBTPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

NBTPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in NBTPredicate

## Methods

:::group{name=withData}

Sets the NBT data that should be matched by this predicate.

 The given [IData](/vanilla/api/data/IData) instance is required to be an instance of [MapData](/vanilla/api/data/MapData). Any other type of data cannot be checked by this predicate.

 If the NBT data had already been set, then the data is replaced with the new instance.

Returns: This predicate for chaining.  
Return Type: [NBTPredicate](/vanilla/api/predicate/NBTPredicate)

```zenscript
NBTPredicate.withData(data as IData) as NBTPredicate
```

| Parameter | Type                             | Description                                                           |
| --------- | -------------------------------- | --------------------------------------------------------------------- |
| data      | [IData](/vanilla/api/data/IData) | A [MapData](/vanilla/api/data/MapData) representing the NBT to match. |


:::


