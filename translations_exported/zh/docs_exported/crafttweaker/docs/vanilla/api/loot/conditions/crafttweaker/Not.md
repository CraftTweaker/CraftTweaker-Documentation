# 非

Builder to create a 'Not' condition.

 The sub-condition added to a 'Not' condition will be passed through the equivalent of a NOT gate, effectively inverting the result of the query. This makes this loot condition effectively a clone of [Inverted](/vanilla/api/loot/conditions/vanilla/Inverted) at the moment. This ensures a more coherent experience in case vanilla's behavior changes in the future, while also allowing the user to specify the logic gate directly.

 A 'Not' condition requires a sub-condition to be built.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.crafttweaker.Not;
```


## 已实现的接口
Not implements the following interfaces. That means all methods defined in these interfaces are also available in Not

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## 方法

:::group{name=withCondition}

Sets the negated condition to the one created with the given [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder).

 The builder must host a single loot condition. Builders with a different amount of conditions are not allowed. The builder will be used to generate a loot condition that will then be used as sub-condition.

 This parameter is <strong>required</strong>.

Return Type: [Not](/vanilla/api/loot/conditions/crafttweaker/Not)

```zenscript
Not.withCondition(builder as LootConditionBuilder) as Not
```

| 参数  | 类型                                                                        | 描述                                                                                            |
| --- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 生成器 | [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder) | The builder to create a single [ILootCondition](/vanilla/api/loot/conditions/ILootCondition). |


:::

:::group{name=withCondition}

Sets the loot condition to negate.

 This parameter is <strong>required</strong>.

Return Type: [Not](/vanilla/api/loot/conditions/crafttweaker/Not)

```zenscript
Not.withCondition(condition as ILootCondition) as Not
```

| 参数        | 类型                                                            | 描述                       |
| --------- | ------------------------------------------------------------- | ------------------------ |
| condition | [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) | The condition to negate. |


:::

:::group{name=withCondition}

Creates and builds the sub-condition that will then be negated.

Return Type: [Not](/vanilla/api/loot/conditions/crafttweaker/Not)

```zenscript
Not.withCondition<T : ILootConditionTypeBuilder>(lender as Consumer<T>) as Not
```

| 参数     | 类型                                                                                  | 描述                                                             |
| ------ | ----------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| lender | Consumer&lt;T&gt;                                                       | A consumer that allows configuration of the created condition. |
| T      | [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder) | The known type of the condition itself.                        |


:::


