# TableBonus

Builder for the 'TableBonus' loot condition.

 This condition can be used to draw a random number between 0.0 (inclusive) and 1.0 (exclusive). This number will then be checked against an enchantment level-specific chance and the condition will pass only if the drawn number is less than the given one. Effectively, this allows the creation of a condition that will only pass a certain number of times, as specified by the percentage value.

 Specifying more chances than the maximum level of an enchantment will simply ignore the values that are too high for the current enchantment. On the contrary, specifying less values will effectively duplicate the last value across all remaining levels.

 A 'TableBonus' condition requires an enchantment and a set of chances to be built. Moreover, a well-formed 'TableBonus' condition has at least one of the various chances set to a value between 0.0 and 1.0 (both exclusive). If that's not the case, the 'TableBonus' will either always pass no matter the enchantment level, if the value is equal to or higher than 1.0, or always fail no matter the enchantment level, if the value is equal to or less than 0.0.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.TableBonus;
```


## Implemented Interfaces
TableBonus implements the following interfaces. That means all methods defined in these interfaces are also available in TableBonus

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Методы

:::group{name=withChances}

Sets the array of chances, which will be queried according to the level.

 Note that it is not required, although advised, to have enough elements to cover all possible levels of the enchantment. The condition will automatically readjust the array as needed.

 A well-formed condition also requires that at least one of the values of the array be between 0.0 and 1.0, excluding extremes, to ensure at least one level has a chance to match.

 This parameter is required.

Returns: This builder for chaining.  
Return Type: [TableBonus](/vanilla/api/loot/conditions/vanilla/TableBonus)

```zenscript
TableBonus.withChances(chances as float[]) as TableBonus
```

| Параметр | Тип     | Описание                               |
| -------- | ------- | -------------------------------------- |
| chances  | float[] | The chances to use depending on level. |


:::

:::group{name=withEnchantment}

Sets the enchantment that should be checked on the tool.

 This parameter is required.

Returns: This builder for chaining.  
Return Type: [TableBonus](/vanilla/api/loot/conditions/vanilla/TableBonus)

```zenscript
TableBonus.withEnchantment(enchantment as MCEnchantment) as TableBonus
```

| Параметр    | Тип                                                     | Описание                  |
| ----------- | ------------------------------------------------------- | ------------------------- |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) | The enchantment to check. |


:::


