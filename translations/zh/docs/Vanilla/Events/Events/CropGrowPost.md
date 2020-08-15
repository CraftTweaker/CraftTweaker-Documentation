# CropGrowPPost事件

一旦一个裁剪块成功增长了 **** ，作物生长后事件就会被发射。 它不能取消，只是作为作物增长的通知。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CropGrowPostEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
CropGrowPost Events 实现了以下接口，并且能够调用他们所有的方法/getter/setter

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
以下信息可以从事件中检索：

| ZenGetter | ZenSetter | 类型                                          |
| --------- | --------- | ------------------------------------------- |
| `原始方块状态`  |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `原始块`     |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
