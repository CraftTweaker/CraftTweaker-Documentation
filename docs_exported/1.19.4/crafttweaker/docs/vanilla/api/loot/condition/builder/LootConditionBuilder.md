# LootConditionBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.LootConditionBuilder;
```


## Casters

|                        Result Type                         | Is Implicit |
|------------------------------------------------------------|-------------|
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | true        |

## Methods

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

Return Type: [AlternativeLootConditionBuilder](/vanilla/api/loot/condition/builder/AlternativeLootConditionBuilder)

```zenscript
LootConditionBuilder.or(other as LootConditionBuilder) as AlternativeLootConditionBuilder
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| other     | [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder) |


:::


