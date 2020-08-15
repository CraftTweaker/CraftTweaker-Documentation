# EntityMountEvent

The EntityMount event is fired whenever an entity is mounted or dismounted from. If canceled, the entity is prevented from mounting (or dismounting).

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityMountEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
EntityMountEvent Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter        | 返回值类型                                 |
| ---------------- | ------------------------------------- |
| `世界`             | [IWorld](/Vanilla/World/IWorld/)      |
| `mountingEntity` | [IEntity](/Vanilla/Entities/IEntity/) |
| `mountedEntity`  | [IEntity](/Vanilla/Entities/IEntity/) |
| `isMounting`     | 布尔值                                   |
| `isDismounting`  | boolean                               |
