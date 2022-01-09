# Alternative

Builder to create an 'Alternative' loot condition.

 This loot condition tests all sub-conditions alternatively, passing as soon as one of the sub-condition passes. Effectively, this means that all sub-conditions get merged with an 'OR' connector between them. This loot condition thus acts as the vanilla counterpart of the [Or](/vanilla/api/loot/conditions/crafttweaker/Or) loot condition. Differently from the one, though, the behavior of this loot condition may drift away from the raw 'Or' behavior if and when the base game alters its own condition.

 This loot condition should have two or more sub-conditions. An 'Alternative' loot condition with a single element behaves as if it were replaced with the sub-condition itself. An 'Alternative' loot condition without any sub-condition always fails.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.Alternative;
```


## 已实现的接口
Alternative implements the following interfaces. That means all methods defined in these interfaces are also available in Alternative

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## 使用方式

:::group{name=add}

Adds a new condition to the list of sub-conditions that will get merged together into an the alternatives.

 At least two sub-conditions should be added to obtain a well-built and well-behaved 'Alternative' loot condition.

Returns: This condition for chaining.  
Return Type: [Alternative](/vanilla/api/loot/conditions/vanilla/Alternative)

```zenscript
Alternative.add<T : ILootConditionTypeBuilder>(lender as Consumer<T>) as Alternative
```

| 参数     | 类型                                                                                  | 描述                                                           |
| ------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| lender | Consumer&lt;T&gt;                                                       | A consumer that allows configuration of the given condition. |
| T      | [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder) | The known type of the condition itself.                      |


:::


