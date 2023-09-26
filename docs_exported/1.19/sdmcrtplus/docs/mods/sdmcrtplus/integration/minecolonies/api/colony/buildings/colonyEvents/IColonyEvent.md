# IColonyEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.colonyEvents.IColonyEvent;
```


## Methods

:::group{name=getEventTypeID}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// IColonyEvent.getEventTypeID() as ResourceLocation

myIColonyEvent.getEventTypeID();
```

:::

:::group{name=getID}

Return Type: int

```zenscript
// IColonyEvent.getID() as int

myIColonyEvent.getID();
```

:::

:::group{name=getStatus}

Return Type: [EventStatus](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/colonyEvents/EventStatus)

```zenscript
// IColonyEvent.getStatus() as EventStatus

myIColonyEvent.getStatus();
```

:::

:::group{name=onFinish}

```zenscript
// IColonyEvent.onFinish()

myIColonyEvent.onFinish();
```

:::

:::group{name=onNightFall}

```zenscript
// IColonyEvent.onNightFall()

myIColonyEvent.onNightFall();
```

:::

:::group{name=onStart}

```zenscript
// IColonyEvent.onStart()

myIColonyEvent.onStart();
```

:::

:::group{name=onTileEntityBreak}

```zenscript
IColonyEvent.onTileEntityBreak(te as BlockEntity)
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| te        | [BlockEntity](/vanilla/api/block/entity/BlockEntity) |


:::

:::group{name=onUpdate}

```zenscript
// IColonyEvent.onUpdate()

myIColonyEvent.onUpdate();
```

:::

:::group{name=setColony}

```zenscript
IColonyEvent.setColony(var1 as IColony)
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::

:::group{name=setStatus}

```zenscript
IColonyEvent.setStatus(var1 as EventStatus)
```

| Parameter |                                                  Type                                                  |
|-----------|--------------------------------------------------------------------------------------------------------|
| var1      | [EventStatus](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/colonyEvents/EventStatus) |


:::


