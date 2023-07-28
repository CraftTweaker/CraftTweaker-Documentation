# EntityMountEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.EntityMountEvent;
```


## Extending EntityEvent

EntityMountEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in EntityMountEvent

## Methods

:::group{name=getEntity}

Return Type: [Entity](/mods/sixikutils/utils/entity/ExpandEntity)

```zenscript
// EntityMountEvent.getEntity() as Entity

myEntityMountEvent.getEntity();
```

:::

:::group{name=getEntityBeingMounted}

Return Type: [Entity](/mods/sixikutils/utils/entity/ExpandEntity)

```zenscript
// EntityMountEvent.getEntityBeingMounted() as Entity

myEntityMountEvent.getEntityBeingMounted();
```

:::

:::group{name=getEntityMounting}

Return Type: [Entity](/mods/sixikutils/utils/entity/ExpandEntity)

```zenscript
// EntityMountEvent.getEntityMounting() as Entity

myEntityMountEvent.getEntityMounting();
```

:::

:::group{name=getWorld}

Return Type: [Level](/mods/sixikutils/pmmo/server/world)

```zenscript
// EntityMountEvent.getWorld() as Level

myEntityMountEvent.getWorld();
```

:::


