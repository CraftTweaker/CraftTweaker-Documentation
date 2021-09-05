# Reference

Builder for a 'Reference' loot condition.

 A Reference condition defers checking to another loot condition, identified by the given [MCResourceLocation](/vanilla/api/util/MCResourceLocation), that acts as the name of the additional condition. This allows additional conditions that may have been created in a data-pack to be referred by other conditions, created from within scripts.

 This condition acts as the vanilla counterpart of the [Delegate](/vanilla/api/loot/conditions/crafttweaker/Delegate) loot condition, providing support only for data-packs instead of scripts.

 A 'Reference' loot condition requires the name of the condition to call to be built correctly.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.Reference;
```


## Implemented Interfaces
Reference implements the following interfaces. That means all methods defined in these interfaces are also available in Reference

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Methoden

:::group{name=withName}

Sets the name of the data-pack loot condition to query.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [Reference](/vanilla/api/loot/conditions/vanilla/Reference)

```zenscript
Reference.withName(name as MCResourceLocation) as Reference
```

| Parameter | Type                                                        | Beschreibung                        |
| --------- | ----------------------------------------------------------- | ----------------------------------- |
| name      | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | The name of the predicate to query. |


:::

:::group{name=withName}

Sets the name of the data-pack loot condition to query.

 The name is treated as a [MCResourceLocation](/vanilla/api/util/MCResourceLocation), lacking the type safety of the bracket handler. For this reason, it's suggested to prefer the method with a [MCResourceLocation](/vanilla/api/util/MCResourceLocation) as parameter.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [Reference](/vanilla/api/loot/conditions/vanilla/Reference)

```zenscript
Reference.withName(name as string) as Reference
```

| Parameter | Type   | Beschreibung                                                                                            |
| --------- | ------ | ------------------------------------------------------------------------------------------------------- |
| name      | string | The name of the predicate to query, in [MCResourceLocation](/vanilla/api/util/MCResourceLocation) form. |


:::


