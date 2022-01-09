# ILootConditionTypeBuilder

Manages the configuration and creation of a particular condition.

 You should never need to reference this type. Refer to [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder) for more information.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.ILootConditionTypeBuilder;
```


## 使用方式

:::group{name=finish}

Terminates the configuration of the loot condition and uses the current status to create a specific instance of [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) that matches the parameters.

 If some mandatory values are needed, then the method may throw an exception.

 If some values may lead to a not well-formed or not well-behaved condition, the method may log some warnings or throw an exception.

 You should never need to call this method. Refer to [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder) for more information.

Returns: The built [ILootCondition](/vanilla/api/loot/conditions/ILootCondition).  
Return Type: [ILootCondition](/vanilla/api/loot/conditions/ILootCondition)

```zenscript
// ILootConditionTypeBuilder.finish() as ILootCondition

myILootConditionTypeBuilder.finish();
```

:::


