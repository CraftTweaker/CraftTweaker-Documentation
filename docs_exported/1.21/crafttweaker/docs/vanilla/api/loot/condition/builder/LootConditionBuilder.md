# LootConditionBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.LootConditionBuilder;
```


## Methods

:::group{name=and}

Return Type: [AllOfConditionBuilder](/vanilla/api/loot/condition/builder/AllOfConditionBuilder)

```zenscript
LootConditionBuilder.and(other as LootConditionBuilder) as AllOfConditionBuilder
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| other     | [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder) |


:::

:::group{name=build}

Return Type: [LootCondition](/vanilla/api/loot/condition/LootCondition)

```zenscript
// LootConditionBuilder.build() as LootCondition

myLootConditionBuilder.build();
```

:::

:::group{name=invert}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
// LootConditionBuilder.invert() as LootConditionBuilder

myLootConditionBuilder.invert();
```

:::

:::group{name=or}

Return Type: [AnyOfConditionBuilder](/vanilla/api/loot/condition/builder/AnyOfConditionBuilder)

```zenscript
LootConditionBuilder.or(other as LootConditionBuilder) as AnyOfConditionBuilder
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| other     | [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder) |


:::


