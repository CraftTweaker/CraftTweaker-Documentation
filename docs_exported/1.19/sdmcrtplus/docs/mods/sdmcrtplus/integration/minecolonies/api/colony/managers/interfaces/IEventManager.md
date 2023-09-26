# IEventManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.managers.interfaces.IEventManager;
```


## Methods

:::group{name=addEvent}

```zenscript
IEventManager.addEvent(var1 as IColonyEvent)
```

| Parameter |                                                   Type                                                   |
|-----------|----------------------------------------------------------------------------------------------------------|
| var1      | [IColonyEvent](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/colonyEvents/IColonyEvent) |


:::

:::group{name=getAndTakeNextEventID}

Return Type: int

```zenscript
// IEventManager.getAndTakeNextEventID() as int

myIEventManager.getAndTakeNextEventID();
```

:::

:::group{name=getEventByID}

Return Type: [IColonyEvent](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/colonyEvents/IColonyEvent)

```zenscript
IEventManager.getEventByID(var1 as int) as IColonyEvent
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=getEvents}

Return Type: [IColonyEvent](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/colonyEvents/IColonyEvent)[int?]

```zenscript
// IEventManager.getEvents() as IColonyEvent[int?]

myIEventManager.getEvents();
```

:::

:::group{name=getStructureManager}

Return Type: **invalid**

```zenscript
// IEventManager.getStructureManager() as invalid

myIEventManager.getStructureManager();
```

:::

:::group{name=onColonyTick}

```zenscript
IEventManager.onColonyTick(var1 as IColony)
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::

:::group{name=onEntityDeath}

```zenscript
IEventManager.onEntityDeath(var1 as LivingEntity, var2 as int)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [LivingEntity](/vanilla/api/entity/LivingEntity) |
| var2      | int                                              |


:::

:::group{name=onNightFall}

```zenscript
// IEventManager.onNightFall()

myIEventManager.onNightFall();
```

:::

:::group{name=onTileEntityBreak}

```zenscript
IEventManager.onTileEntityBreak(var1 as int, var2 as BlockEntity)
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| var1      | int                                                  |
| var2      | [BlockEntity](/vanilla/api/block/entity/BlockEntity) |


:::

:::group{name=readFromNBT}

```zenscript
IEventManager.readFromNBT(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=registerEntity}

```zenscript
IEventManager.registerEntity(var1 as Entity, var2 as int)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| var1      | [Entity](/vanilla/api/entity/Entity) |
| var2      | int                                  |


:::

:::group{name=unregisterEntity}

```zenscript
IEventManager.unregisterEntity(var1 as Entity, var2 as int)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| var1      | [Entity](/vanilla/api/entity/Entity) |
| var2      | int                                  |


:::

:::group{name=writeToNBT}

```zenscript
IEventManager.writeToNBT(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::


