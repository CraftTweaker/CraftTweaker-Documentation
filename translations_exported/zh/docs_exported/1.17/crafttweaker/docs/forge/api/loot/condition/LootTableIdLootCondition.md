# LootTableIdLootCondition

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.LootTableIdLootCondition;
```


## 已实现的接口
LootTableIdLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in LootTableIdLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootTableIdLootConditionBuilder](/forge/api/loot/condition/builder/LootTableIdLootConditionBuilder)

```zenscript
LootTableIdLootCondition.create(id as ResourceLocation) as LootTableIdLootConditionBuilder
```

| 参数 | 类型                                             | 描述                      |
| -- | ---------------------------------------------- | ----------------------- |
| id | [资源位置](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=create}

Return Type: [LootTableIdLootConditionBuilder](/forge/api/loot/condition/builder/LootTableIdLootConditionBuilder)

```zenscript
LootTableIdLootCondition.create(id as string) as LootTableIdLootConditionBuilder
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| id | string | No Description Provided |


:::

