# ConditionReferenceLootCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.ConditionReferenceLootCondition;
```


## Implemented Interfaces
ConditionReferenceLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in ConditionReferenceLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
ConditionReferenceLootCondition.create(name as ResourceLocation) as LootConditionBuilder
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
ConditionReferenceLootCondition.create(name as string) as LootConditionBuilder
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

