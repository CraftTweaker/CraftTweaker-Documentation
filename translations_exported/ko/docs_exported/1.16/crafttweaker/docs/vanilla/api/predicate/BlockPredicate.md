# BlockPredicate

Represents a predicate for a [MCBlock](/vanilla/api/block/MCBlock).

 This predicate will match a block state with either the given [MCBlock](/vanilla/api/block/MCBlock) or block tag ([MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;), with the second check taking precedence over the first if they are both present. If this comparison succeeds, then the predicate may also verify additional block state properties via the supplied [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) or specific parts of the NBT data of the block entity associated to the state via a [NBTPredicate](/vanilla/api/predicate/NBTPredicate).

 By default, this predicate allows any block state to pass the checks without restrictions.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.BlockPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

BlockPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in BlockPredicate

## Methods

:::group{name=withBlock}

Sets the block that this predicate should match.

 If a tag to match against has already been set, then the tag check will take precedence over this check.

Returns: This predicate for chaining.  
Return Type: [BlockPredicate](/vanilla/api/predicate/BlockPredicate)

```zenscript
BlockPredicate.withBlock(block as MCBlock) as BlockPredicate
```

| Parameter | Type                                  | Description                           |
| --------- | ------------------------------------- | ------------------------------------- |
| block     | [MCBlock](/vanilla/api/block/MCBlock) | The block the predicate should match. |


:::

:::group{name=withBlockTag}

Sets the tag that this predicate should use for matching.

 The predicate will successfully match only if the supplied block state's block is contained within the given tag.

 Specifying both a tag and a block to match against will make the tag take precedence over the block.

Returns: This predicate for chaining.  
Return Type: [BlockPredicate](/vanilla/api/predicate/BlockPredicate)

```zenscript
BlockPredicate.withBlockTag(blockTag as MCTag<MCBlock>) as BlockPredicate
```

| Parameter | Type                                                                                      | Description                                    |
| --------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------- |
| blockTag  | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCBlock](/vanilla/api/block/MCBlock)&gt; | The tag the predicate should use for matching. |


:::

:::group{name=withDataPredicate}

Creates and sets the [NBTPredicate](/vanilla/api/predicate/NBTPredicate) that will be matched against the block entity's data.

 Any changes that have already been made to the NBT predicate will be overwritten, effectively replacing the previous one, if any.

Returns: This predicate for chaining.  
Return Type: [BlockPredicate](/vanilla/api/predicate/BlockPredicate)

```zenscript
BlockPredicate.withDataPredicate(builder as Consumer<NBTPredicate>) as BlockPredicate
```

| Parameter | Type                                                                            | Description                                                                                        |
| --------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| builder   | Consumer&lt;[NBTPredicate](/vanilla/api/predicate/NBTPredicate)&gt; | A consumer that will be used to configure the [NBTPredicate](/vanilla/api/predicate/NBTPredicate). |


:::

:::group{name=withStatePropertiesPredicate}

Creates and sets the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) that will be matched against the block state's properties.

 Any changes that have already been made to the state properties predicate will be overwritten, effectively replacing the previous one, if any.

Returns: This predicate for chaining.  
Return Type: [BlockPredicate](/vanilla/api/predicate/BlockPredicate)

```zenscript
BlockPredicate.withStatePropertiesPredicate(builder as Consumer<StatePropertiesPredicate>) as BlockPredicate
```

| Parameter | Type                                                                                                    | Description                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| builder   | Consumer&lt;[StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)&gt; | A consumer that will be used to configure the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate). |


:::


