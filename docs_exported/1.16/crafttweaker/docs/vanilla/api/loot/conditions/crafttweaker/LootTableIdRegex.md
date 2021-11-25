# LootTableIdRegex

Builder for a 'LootTableIdRegex' loot condition.

 This condition will pass if and only if the ID of the loot table currently being queried matches the target regex.

 While this condition is provided merely as a convenience, it is suggested not to rely on this condition only. Due to
 backwards compatibility, some loot tables may in fact lack an ID or have overlapping ones. Other conditions should be
 used instead.

 The 'LootTableIdRegex' condition requires a regex to be built.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.crafttweaker.LootTableIdRegex;
```


## Implemented Interfaces
LootTableIdRegex implements the following interfaces. That means all methods defined in these interfaces are also available in LootTableIdRegex

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Methods

:::group{name=withRegex}

Sets the regex of the loot table that should be targeted.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [LootTableIdRegex](/vanilla/api/loot/conditions/crafttweaker/LootTableIdRegex)

```zenscript
LootTableIdRegex.withRegex(regex as string) as LootTableIdRegex
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | The regex of the loot table to match. |


:::


