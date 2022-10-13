# BlockState

Builder to create a 'BlockState' loot condition.

 The condition compares the block state obtained from the [LootContext](/vanilla/api/loot/LootContext) with the given one, passing only if they are exactly the same state.

 A 'BlockState' loot condition requires a block state to be built.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.crafttweaker.BlockState;
```


## 已实现的接口
BlockState implements the following interfaces. That means all methods defined in these interfaces are also available in BlockState

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## 使用方式

:::group{name=withState}

Sets the state that the condition must check.

 The state will be matched exactly.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [BlockState](/vanilla/api/loot/conditions/crafttweaker/BlockState)

```zenscript
BlockState.withState(state as MCBlockState) as BlockState
```

| 参数    | 类型                                                      | 描述                  |
| ----- | ------------------------------------------------------- | ------------------- |
| state | [MCBlockState #MC方块状态](/vanilla/api/block/MCBlockState) | The state to check. |


:::


