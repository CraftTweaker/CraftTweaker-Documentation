# RandomChance

Builder for the 'RandomChance' loot condition.

 This condition can be used to draw a random number between 0.0 (inclusive) and 1.0 (exclusive). This number will then be checked against the specified chance and the condition will pass only if the drawn number is less than the given one. Effectively, this allows the creation of a condition that will only run a certain percentage of times, as specified by the chance value.

 A 'RandomChance' condition is well-formed if the given value is between 0.0 and 1.0 (both exclusive). If that's not the case, then the 'RandomChance' will either always fail, if the value is less than or equal to 0.0, or always pass, if the value is higher than or equal to 1.0.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.RandomChance;
```


## Implemented Interfaces
RandomChance implements the following interfaces. That means all methods defined in these interfaces are also available in RandomChance

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Methods

:::group{name=withChance}

Sets the chance of the loot condition successfully passing the check.

 The number is to be treated as a percentage from 0.0 to 1.0. Only values between these two extremes are to be considered valid. Any other value will cause the resulting loot condition not to be well-formed.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [RandomChance](/vanilla/api/loot/conditions/vanilla/RandomChance)

```zenscript
RandomChance.withChance(chance as float) as RandomChance
```

| Parameter | Type  | Description                        |
| --------- | ----- | ---------------------------------- |
| chance    | float | The success rate of the condition. |


:::


