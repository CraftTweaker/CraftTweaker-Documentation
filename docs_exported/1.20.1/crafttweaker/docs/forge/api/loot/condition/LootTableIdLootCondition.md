# LootTableIdLootCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.LootTableIdLootCondition;
```


## Implemented Interfaces
LootTableIdLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in LootTableIdLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootTableIdConditionBuilder](/forge/api/loot/condition/builder/LootTableIdConditionBuilder)

```zenscript
LootTableIdLootCondition.create(id as ResourceLocation) as LootTableIdConditionBuilder
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=create}

Return Type: [LootTableIdConditionBuilder](/forge/api/loot/condition/builder/LootTableIdConditionBuilder)

```zenscript
LootTableIdLootCondition.create(id as string) as LootTableIdConditionBuilder
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

