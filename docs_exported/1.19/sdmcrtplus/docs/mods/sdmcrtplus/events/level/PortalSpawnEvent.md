# PortalSpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.level.PortalSpawnEvent;
```


## Extending BlockEvent

PortalSpawnEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in PortalSpawnEvent

## Methods

:::group{name=getLevel}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// PortalSpawnEvent.getLevel() as Level

myPortalSpawnEvent.getLevel();
```

:::

:::group{name=getPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// PortalSpawnEvent.getPos() as BlockPos

myPortalSpawnEvent.getPos();
```

:::

:::group{name=getState}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// PortalSpawnEvent.getState() as BlockState

myPortalSpawnEvent.getState();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// PortalSpawnEvent.isCancelable() as boolean

myPortalSpawnEvent.isCancelable();
```

:::

:::group{name=isCanceled}

Return Type: boolean

```zenscript
// PortalSpawnEvent.isCanceled() as boolean

myPortalSpawnEvent.isCanceled();
```

:::

:::group{name=isComplete}

Return Type: boolean

```zenscript
// PortalSpawnEvent.isComplete() as boolean

myPortalSpawnEvent.isComplete();
```

:::

:::group{name=isValid}

Return Type: boolean

```zenscript
// PortalSpawnEvent.isValid() as boolean

myPortalSpawnEvent.isValid();
```

:::

:::group{name=setCanceled}

```zenscript
PortalSpawnEvent.setCanceled(cancel as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| cancel    | boolean |


:::


