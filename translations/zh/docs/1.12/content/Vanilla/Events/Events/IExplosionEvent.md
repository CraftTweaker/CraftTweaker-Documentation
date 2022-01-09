# IExplosionEvent

This interface is extended by all explosion events. That means you can use the getters below to access the position details.

## 导入类
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IExplosionEvent;`

## ZenGetters

| name（名称）  | 类型                                      |
| --------- | --------------------------------------- |
| world     | [IWorld](/Vanilla/World/IWorld/)        |
| explosion | [IExplosion](/Vanilla/World/IExplosion) |
| position  | [IBlockPos](/Vanilla/World/IBlockPos/)  |
| x         | 双精度                                     |
| y         | 双精度                                     |
| z         | 双精度                                     |
