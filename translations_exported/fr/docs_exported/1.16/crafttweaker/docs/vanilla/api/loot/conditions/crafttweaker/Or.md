# Or

Builder to create an 'OR' loot condition.

 At least one of the sub-conditions added to this loot condition must pass to make this condition pass. Effectively, this means all sub-conditions get merged with an 'OR' connector between them. This makes this loot condition effectively a clone of [Alternative](/vanilla/api/loot/conditions/vanilla/Alternative) at the moment. This ensures a more coherent experience in case vanilla's behavior changes in the future, while also allowing the user to specify the logic gate directly.

 This loot condition should have two or more sub-conditions. An 'Or' loot condition with a single element behaves as if it were replaced with the sub-condition itself. An 'Or' loot condition without any sub-conditions never passes.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.crafttweaker.Or;
```


## Implemented Interfaces
Or implements the following interfaces. That means all methods defined in these interfaces are also available in Or

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Methods

:::group{name=add}

Adds a new condition to the list of sub-conditions that will get merged together into an 'OR' condition.

 At least two sub-conditions should be added to obtain a well-built and well-behaved 'Or' loot condition.

Returns: This condition for chaining.  
Return Type: [Or](/vanilla/api/loot/conditions/crafttweaker/Or)

```zenscript
Or.add<T : ILootConditionTypeBuilder>(lender as Consumer<T>) as Or
```

| Parameter | Type                                                                                | Description                                                  |
| --------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| lender    | Consumer&lt;T&gt;                                                       | A consumer that allows configuration of the given condition. |
| T         | [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder) | The known type of the condition itself.                      |


:::


