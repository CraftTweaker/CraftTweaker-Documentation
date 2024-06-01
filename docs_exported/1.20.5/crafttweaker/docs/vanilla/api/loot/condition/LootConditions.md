# LootConditions

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.LootConditions;
```


## Static Methods

:::group{name=allOf}

Return Type: [LootConditions](/vanilla/api/loot/condition/LootConditions)

```zenscript
LootConditions.allOf(builders as LootConditionBuilder[]) as LootConditions
```

| Parameter |                                        Type                                        |
|-----------|------------------------------------------------------------------------------------|
| builders  | [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)[] |


:::

:::group{name=allOf}

Return Type: [LootConditions](/vanilla/api/loot/condition/LootConditions)

```zenscript
LootConditions.allOf(conditions as LootCondition[]) as LootConditions
```

| Parameter  |                             Type                             |
|------------|--------------------------------------------------------------|
| conditions | [LootCondition](/vanilla/api/loot/condition/LootCondition)[] |


:::

:::group{name=anyOf}

Return Type: [LootConditions](/vanilla/api/loot/condition/LootConditions)

```zenscript
LootConditions.anyOf(builders as LootConditionBuilder[]) as LootConditions
```

| Parameter |                                        Type                                        |
|-----------|------------------------------------------------------------------------------------|
| builders  | [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)[] |


:::

:::group{name=none}

Return Type: [LootConditions](/vanilla/api/loot/condition/LootConditions)

```zenscript
// LootConditions.none() as LootConditions

LootConditions.none();
```

:::

:::group{name=noneOf}

Return Type: [LootConditions](/vanilla/api/loot/condition/LootConditions)

```zenscript
LootConditions.noneOf(builders as LootConditionBuilder[]) as LootConditions
```

| Parameter |                                        Type                                        |
|-----------|------------------------------------------------------------------------------------|
| builders  | [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)[] |


:::

:::group{name=noneOf}

Return Type: [LootConditions](/vanilla/api/loot/condition/LootConditions)

```zenscript
LootConditions.noneOf(conditions as LootCondition[]) as LootConditions
```

| Parameter  |                             Type                             |
|------------|--------------------------------------------------------------|
| conditions | [LootCondition](/vanilla/api/loot/condition/LootCondition)[] |


:::

:::group{name=notAllOf}

Return Type: [LootConditions](/vanilla/api/loot/condition/LootConditions)

```zenscript
LootConditions.notAllOf(builders as LootConditionBuilder[]) as LootConditions
```

| Parameter |                                        Type                                        |
|-----------|------------------------------------------------------------------------------------|
| builders  | [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)[] |


:::

:::group{name=only}

Return Type: [LootConditions](/vanilla/api/loot/condition/LootConditions)

```zenscript
LootConditions.only(builder as LootConditionBuilder) as LootConditions
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| builder   | [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder) |


:::

:::group{name=only}

Return Type: [LootConditions](/vanilla/api/loot/condition/LootConditions)

```zenscript
LootConditions.only(condition as LootCondition) as LootConditions
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| condition | [LootCondition](/vanilla/api/loot/condition/LootCondition) |


:::

:::group{name=randomlyIn}

Return Type: [LootConditions](/vanilla/api/loot/condition/LootConditions)

```zenscript
LootConditions.randomlyIn(percentageChance as double) as LootConditions
```

|    Parameter     |  Type  |
|------------------|--------|
| percentageChance | double |


:::

