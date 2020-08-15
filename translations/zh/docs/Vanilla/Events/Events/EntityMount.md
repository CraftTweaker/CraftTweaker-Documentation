# EntityMountEvent

每当一个实体被挂载或拆卸时，都会触发该实体的事件。 如果取消，实体将被阻止挂载(或卸载)。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityMountEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
EntityMountEvents 实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter    | 返回值类型                                 |
| ------------ | ------------------------------------- |
| `世界`         | [IWorld](/Vanilla/World/IWorld/)      |
| `挂载实体`       | [IEntity](/Vanilla/Entities/IEntity/) |
| `挂载实体`       | [IEntity](/Vanilla/Entities/IEntity/) |
| `isMounting` | 布尔值                                   |
| `正在卸载`       | boolean                               |
