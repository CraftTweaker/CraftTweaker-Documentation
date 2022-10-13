# MatchTool

Builder for the 'MatchTool' loot condition.

 This condition checks the tool that the [LootContext](/vanilla/api/loot/LootContext) reports as having been used to break a block or perform any other action, leveraging the provided [ItemPredicate](/vanilla/api/predicate/ItemPredicate).

 The condition then passes if and only if the predicate used to build the condition reports the tool as valid.

 If no predicate is specified, then the condition simply acts as a check of presence for the tool.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.MatchTool;
```


## Interfacce Implementate
MatchTool implements the following interfaces. That means all methods defined in these interfaces are also available in MatchTool

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Metodi

:::group{name=matching}

Sets the tool that should be matched by this loot condition.

 The check will ignore any damage, amount, and NBT data that may be attached to the tool.

 This acts as a helper method that allows a more streamlined configuration of the condition instead of having to manually build the predicate.

 If a tool has already been specified, then the newly given one will overwrite the previous check.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [MatchTool](/vanilla/api/loot/conditions/vanilla/MatchTool)

```zenscript
MatchTool.matching(tool as IItemStack) as MatchTool
```

| Parametro | Tipo                                        | Descrizione                      |
| --------- | ------------------------------------------- | -------------------------------- |
| tool      | [IItemStack](/vanilla/api/items/IItemStack) | The tool that should be matched. |


:::

:::group{name=matching}

Sets the tool that should be matched by this loot condition, optionally ignoring damage.

 The check will ignore any amount and NBT data that may be attached to the tool.

 This acts as a helper method that allows a more streamlined configuration of the condition instead of having to manually build the predicate.

 If a tool has already been specified, then the newly given one will overwrite the previous check.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [MatchTool](/vanilla/api/loot/conditions/vanilla/MatchTool)

```zenscript
MatchTool.matching(tool as IItemStack, matchDamage as boolean) as MatchTool
```

| Parametro   | Tipo                                        | Descrizione                                                |
| ----------- | ------------------------------------------- | ---------------------------------------------------------- |
| tool        | [IItemStack](/vanilla/api/items/IItemStack) | The tool that should be matched.                           |
| matchDamage | boolean                                     | Whether damage should be taken into account when matching. |


:::

:::group{name=matching}

Sets the tool that should be matched by this loot condition, optionally ignoring damage or count.

 The check will ignore any NBT data that may be attached to the tool.

 This acts as a helper method that allows a more streamlined configuration of the condition instead of having to manually build the predicate.

 If a tool has already been specified, then the newly given one will overwrite the previous check.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [MatchTool](/vanilla/api/loot/conditions/vanilla/MatchTool)

```zenscript
MatchTool.matching(tool as IItemStack, matchDamage as boolean, matchCount as boolean) as MatchTool
```

| Parametro   | Tipo                                        | Descrizione                                                    |
| ----------- | ------------------------------------------- | -------------------------------------------------------------- |
| tool        | [IItemStack](/vanilla/api/items/IItemStack) | The tool that should be matched                                |
| matchDamage | boolean                                     | Whether damage should be taken into account when matching.     |
| matchCount  | boolean                                     | Whether the amount should be taken into account when matching. |


:::

:::group{name=matching}

Sets the tool that should be matched by this loot condition, optionally ignoring damage, count, or NBT data.

 This acts as a helper method that allows a more streamlined configuration of the condition instead of having to manually build the predicate.

 If a tool has already been specified, then the newly given one will overwrite the previous check.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [MatchTool](/vanilla/api/loot/conditions/vanilla/MatchTool)

```zenscript
MatchTool.matching(tool as IItemStack, matchDamage as boolean, matchCount as boolean, matchNbt as boolean) as MatchTool
```

| Parametro   | Tipo                                        | Descrizione                                                      |
| ----------- | ------------------------------------------- | ---------------------------------------------------------------- |
| tool        | [IItemStack](/vanilla/api/items/IItemStack) | The tool that should be matched                                  |
| matchDamage | boolean                                     | Whether damage should be taken into account when matching.       |
| matchCount  | boolean                                     | Whether the amount should be taken into account when matching.   |
| matchNbt    | boolean                                     | Whether the NBT data should be taken into account when matching. |


:::

:::group{name=withPredicate}

Creates and sets the [ItemPredicate](/vanilla/api/predicate/ItemPredicate) that will be matched against the tool.

 Any changes that have already been made to the predicate will be overwritten, effectively replacing the previous predicate, if any.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [MatchTool](/vanilla/api/loot/conditions/vanilla/MatchTool)

```zenscript
MatchTool.withPredicate(builder as Consumer<ItemPredicate>) as MatchTool
```

| Parametro   | Tipo                                                                              | Descrizione                                                                                          |
| ----------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| costruttore | Consumer&lt;[ItemPredicate](/vanilla/api/predicate/ItemPredicate)&gt; | A consumer that will be used to configure the [ItemPredicate](/vanilla/api/predicate/ItemPredicate). |


:::


