# RandomChanceWithLooting

Builder for the 'RandomChanceWithLooting' loot condition.

 This condition can be used to draw a random number between 0.0 (inclusive) and 1.0 (exclusive). This number will then be checked against the specified chance multiplied by the looting modifier provided by the [LootContext](/vanilla/api/loot/LootContext). The condition will then pass only if the drawn number is less than the computed one. Effectively, this allows the creation of a condition that will only run a certain percentage of times, as specified by the chance value, with this percentage steadily increasing the higher the looting modifier is.

 A 'RandomChanceWithLooting' condition is well-formed if the chance is between 0.0 and 1.0 (both exclusive) and the looting modifier is different from 0.0. If that's not the case, then the 'RandomChanceWithLooting' will either always fail, if the chance is less than or equal to 0.0, always pass, if the chance is higher than or equal to 1.0, or be equivalent to a 'RandomChance' loot condition, if the looting modifier is 0.0.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.RandomChanceWithLooting;
```


## Implemented Interfaces
RandomChanceWithLooting implements the following interfaces. That means all methods defined in these interfaces are also available in RandomChanceWithLooting

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Methods

:::group{name=withChance}

Sets the chance of the loot condition successfully passing the check.

 The number is to be treated as a percentage from 0.0 to 1.0. Only values between these two extremes are to be considered valid. Any other value will cause the resulting loot condition not to be well-formed.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [RandomChanceWithLooting](/vanilla/api/loot/conditions/vanilla/RandomChanceWithLooting)

```zenscript
RandomChanceWithLooting.withChance(chance as float) as RandomChanceWithLooting
```

| Parameter | Type  | Description                        |
| --------- | ----- | ---------------------------------- |
| chance    | float | The success rate of the condition. |


:::

:::group{name=withLootingMultiplier}

Sets the looting modifier of the loot condition.

 The given number must be different from 0.0, otherwise the resulting loot condition won't be well-formed. Negative values have to be treated with care, as they cannot be heuristically proven to cause the loot table to never pass, but may lead to such scenarios.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [RandomChanceWithLooting](/vanilla/api/loot/conditions/vanilla/RandomChanceWithLooting)

```zenscript
RandomChanceWithLooting.withLootingMultiplier(lootingMultiplier as float) as RandomChanceWithLooting
```

| Parameter         | Type  | Description                            |
| ----------------- | ----- | -------------------------------------- |
| lootingMultiplier | float | The looting modifier of the condition. |


:::


