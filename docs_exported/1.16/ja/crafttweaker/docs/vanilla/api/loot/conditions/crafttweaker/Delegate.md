# Delegate

Builder to create a 'Delegate' loot condition.

 A delegate loot condition defers checking to another loot condition directly, effectively acting as a simple wrapper around the delegated condition. This allows other conditions that may have been built prior to the construction of this builder to be referenced and used directly.

 A 'Delegate' loot condition requires a delegate to be built.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.crafttweaker.Delegate;
```


## Implemented Interfaces
Delegate implements the following interfaces. That means all methods defined in these interfaces are also available in Delegate

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Methods

:::group{name=withDelegate}

Sets the delegate to the loot condition created with the given [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder).

 The builder must host a single loot condition. Builders with a different amount of conditions are not allowed. The builder will be used to generate a loot condition that will then be used as a delegate.

 This parameter is <strong>required</strong>.

Return Type: [Delegate](/vanilla/api/loot/conditions/crafttweaker/Delegate)

```zenscript
Delegate.withDelegate(builder as LootConditionBuilder) as Delegate
```

| Parameter | Type                                                                      | Description                                                                                   |
| --------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ビルダー:     | [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder) | The builder to create a single [ILootCondition](/vanilla/api/loot/conditions/ILootCondition). |


:::

:::group{name=withDelegate}

Sets the delegate loot condition.

 This parameter is <strong>required</strong>.

Return Type: [Delegate](/vanilla/api/loot/conditions/crafttweaker/Delegate)

```zenscript
Delegate.withDelegate(other as ILootCondition) as Delegate
```

| Parameter | Type                                                          | Description                  |
| --------- | ------------------------------------------------------------- | ---------------------------- |
| other     | [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) | The delegate loot condition. |


:::


