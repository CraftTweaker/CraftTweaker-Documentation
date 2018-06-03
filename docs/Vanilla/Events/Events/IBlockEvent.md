# 方块事件（IBlockEvent）

这个接口被所有拥有有生命实体的事件所继承。

## 导入相关类
最好在使用前 [导入](/AdvancedFunctions/Import) 类来避免错误。   
`import crafttweaker.event.IBlockEvent;`

## 继承自实体可获取位置接口
这个接口继承了 [实体可获取位置](IEventPositionable) 接口，这意味着实体可获取位置接口的所有功能都可以在这里使用。

## ZenGetters

| name             | type                                                     |
|------------------|----------------------------------------------------------|
| world            | [IWorld](/Vanilla/World/IWorld)                          |
| blockState       | [IBlockState](/Vanilla/Blocks/IBlockState)               |
| block            | [IBlock](/Vanilla/Blocks/IBlock)                         |
