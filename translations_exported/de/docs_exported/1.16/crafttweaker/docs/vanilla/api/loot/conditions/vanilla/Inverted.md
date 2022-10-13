# Inverted

Builder to create an 'Inverted' loot condition.

 This loot condition tests the given sub-condition, then inverts its result, effectively passing if and only if the sub-condition does not. Effectively, this means that the sub-condition gets a 'NOT' gate prepended to it. This loot condition thus acts as the vanilla counterpart of the [Not](/vanilla/api/loot/conditions/crafttweaker/Not) loot condition. Differently from the one, though, the behavior of this loot condition may drift away from the raw 'Not' behavior if and when the base game alters its own condition.

 An 'Inverted' condition requires a sub-condition to be built.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.Inverted;
```


## Implemented Interfaces
Inverted implements the following interfaces. That means all methods defined in these interfaces are also available in Inverted

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Methoden

:::group{name=withCondition}

Sets the inverted condition to the one created with the given [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder).

 The builder must host a single loot condition. Builders with a different amount of conditions are not allowed. The builder will be used to generate a loot condition that will then be used as sub-condition.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [Inverted](/vanilla/api/loot/conditions/vanilla/Inverted)

```zenscript
Inverted.withCondition(builder as LootConditionBuilder) as Inverted
```

| Parameter | Type                                                                      | Beschreibung                                                                                  |
| --------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| bauer     | [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder) | The builder to create a single [ILootCondition](/vanilla/api/loot/conditions/ILootCondition). |


:::

:::group{name=withCondition}

Sets the loot condition to invert.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [Inverted](/vanilla/api/loot/conditions/vanilla/Inverted)

```zenscript
Inverted.withCondition(condition as ILootCondition) as Inverted
```

| Parameter | Type                                                          | Beschreibung             |
| --------- | ------------------------------------------------------------- | ------------------------ |
| condition | [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) | The condition to invert. |


:::

:::group{name=withCondition}

Creates and builds the sub-condition that will then be inverted.

Returns: This builder for chaining.  
Return Type: [Inverted](/vanilla/api/loot/conditions/vanilla/Inverted)

```zenscript
Inverted.withCondition<T : ILootConditionTypeBuilder>(lender as Consumer<T>) as Inverted
```

| Parameter | Type                                                                                | Beschreibung                                                   |
| --------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| lender    | Consumer&lt;T&gt;                                                       | A consumer that allows configuration of the created condition. |
| T         | [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder) | The known type of the condition itself.                        |


:::


