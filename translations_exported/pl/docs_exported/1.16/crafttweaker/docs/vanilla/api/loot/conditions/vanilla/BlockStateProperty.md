# BlockStateProperty

Builder to create a 'BlockStateProperty' loot condition.

 This condition compares the the block state obtained from the [LootContext](/vanilla/api/loot/LootContext) and attempts to match it to the given [MCBlock](/vanilla/api/block/MCBlock). If this comparison succeeds, then the state is further compared according to the rules outlined in the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate).

 This condition thus passes only if the block matches the given one and, optionally, if all the state properties match according to the predicate given to this loot condition.

 A 'BlockStateProperty' condition requires a block to be correctly built. Properties may or may not be specified.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.BlockStateProperty;
```


## Implemented Interfaces
BlockStateProperty implements the following interfaces. That means all methods defined in these interfaces are also available in BlockStateProperty

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Methods

:::group{name=withBlock}

Sets the block that should be matched by the loot condition.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [BlockStateProperty](/vanilla/api/loot/conditions/vanilla/BlockStateProperty)

```zenscript
BlockStateProperty.withBlock(block as MCBlock) as BlockStateProperty
```

| Parameter | Type                                  | Description              |
| --------- | ------------------------------------- | ------------------------ |
| block     | [MCBlock](/vanilla/api/block/MCBlock) | The block to be matched. |


:::

:::group{name=withStatePropertiesPredicate}

Creates and sets the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) that will be matched against the state's properties.

 Any changes that have already been made to the predicate will be overwritten, effectively replacing the previous predicate, if any.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [BlockStateProperty](/vanilla/api/loot/conditions/vanilla/BlockStateProperty)

```zenscript
BlockStateProperty.withStatePropertiesPredicate(builder as Consumer<StatePropertiesPredicate>) as BlockStateProperty
```

| Parameter   | Type                                                                                                    | Description                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| konstruktor | Consumer&lt;[StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)&gt; | A consumer that will be used to configure the [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate). |


:::


