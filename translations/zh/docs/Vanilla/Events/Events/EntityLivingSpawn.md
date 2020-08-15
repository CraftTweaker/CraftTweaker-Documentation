# EntityLivingSpawnEvent

The EntityLivingSpawn Event is fired whenever an entity tries to join or leave a world.  
It has one subclass, the EntityLivingExtendedSpawnEvent that also contains an [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) reference.

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingSpawnEvent`  
`crafttweaker.event.EntityLivingExtendedSpawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

EntityLivingSpawn Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter                 | 类型                                                               |
| ------------------------- | ---------------------------------------------------------------- |
| `世界`                      | [IWorld](/Vanilla/World/IWorld/)                                 |
| `x`                       | 浮点数                                                              |
| `年`                       | float                                                            |
| `z`                       | float                                                            |
|                           |                                                                  |
| `spawner` (Extended Only) | [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) |

## Event functions

The despawn event also offers three functions to change the event outcome:

| ZenMethod（ZenMethod） | 说明                                         |
| -------------------- | ------------------------------------------ |
| `allow`              | Forces the entity to (de)spawn             |
| `deny`               | Forces the entity not to (de)spawn         |
| `通过`                 | Sets the event result to the default state |