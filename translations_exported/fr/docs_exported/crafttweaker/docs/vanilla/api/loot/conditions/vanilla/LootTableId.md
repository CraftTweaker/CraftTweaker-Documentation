# LootTableId

Builder for a 'LootTableId' loot condition.

 This condition will test the ID of the loot table currently being queried, as specified by the [LootContext](/vanilla/api/loot/LootContext). The ID is matched exactly, without any form of leeway in terms of regular expressions or prefixes.

 While this condition is provided merely as a convenience, it is suggested not to rely on this condition only. Due to backwards compatibility, some loot tables may in fact lack an ID or have overlapping ones. Other conditions should be used instead.

 The 'LootTableId' condition requires an ID to be built.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.LootTableId;
```


## Implemented Interfaces
LootTableId implements the following interfaces. That means all methods defined in these interfaces are also available in LootTableId

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Methods

:::group{name=withTableId}

Sets the ID of the loot table that should be targeted.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [LootTableId](/vanilla/api/loot/conditions/vanilla/LootTableId)

```zenscript
LootTableId.withTableId(location as MCResourceLocation) as LootTableId
```

| Parameter    | Type                                                                  | Description                                                                                            |
| ------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Localisation | [format@@0 MCRessourceLocation](/vanilla/api/util/MCResourceLocation) | The ID of the loot table to match, in [MCResourceLocation](/vanilla/api/util/MCResourceLocation) form. |


:::


