# LootTableIdRegexLootCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.LootTableIdRegexLootCondition;
```


## Extending Record

LootTableIdRegexLootCondition extends Record. That means all methods available in Record are also available in LootTableIdRegexLootCondition

## Implemented Interfaces
LootTableIdRegexLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in LootTableIdRegexLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
LootTableIdRegexLootCondition.create(regex as string) as LootConditionBuilder
```

| Parameter |  Type  |
|-----------|--------|
| regex     | string |


:::

