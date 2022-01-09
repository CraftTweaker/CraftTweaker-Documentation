# ToolType

Builder to create a 'ToolType' loot condition.

 This condition checks the tool that the [LootContext](/vanilla/api/loot/LootContext) reports as having been used to break a block or perform any other action is of the given [ToolType](/vanilla/api/tool/ToolType).

 The condition then passes if and only if a tool of the given type has been used to break the block.

 If additional properties of the tool should be checked, combine this condition with a [MatchTool](/vanilla/api/loot/conditions/vanilla/MatchTool) condition without specifying the type.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.crafttweaker.ToolType;
```


## 已实现的接口
ToolType implements the following interfaces. That means all methods defined in these interfaces are also available in ToolType

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## 使用方式

:::group{name=withToolType}

Sets the [ToolType](/vanilla/api/tool/ToolType) that will be matched against the tool.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [ToolType](/vanilla/api/loot/conditions/crafttweaker/ToolType)

```zenscript
ToolType.withToolType(type as ToolType) as ToolType
```

| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 类型 | [ToolType](/vanilla/api/tool/ToolType) | The tool type to check. |


:::


