# EntityLivingSpawnEvent

每当一个实体试图加入或离开世界时都会触发EntityLivingSpawn 事件。  
它有一个子类，即EntityLivingExtendedSpawnEvent 也包含一个 [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) 引用。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingSpawnEvent`  
`crafttweaker.event.EntityLivingExtendedSpawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

EntityLiving出生事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter   | 类型                                                               |
| ----------- | ---------------------------------------------------------------- |
| `世界`        | [IWorld](/Vanilla/World/IWorld/)                                 |
| `x`         | 浮点数                                                              |
| `年`         | float                                                            |
| `z`         | float                                                            |
|             |                                                                  |
| `生成器` (仅扩展) | [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) |

## 事件函数

绝望事件还提供了三个函数来改变事件结果：

| ZenMethod（ZenMethod） | 说明           |
| -------------------- | ------------ |
| `允许`                 | 强制实体生成 (de)  |
| `拒绝`                 | 强制实体不生成 (de) |
| `通过`                 | 将事件结果设置为默认状态 |