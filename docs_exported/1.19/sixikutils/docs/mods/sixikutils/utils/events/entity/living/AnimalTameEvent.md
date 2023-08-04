# AnimalTameEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.player.AnimalTameEvent;
```


## Extending LivingEvent

AnimalTameEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in AnimalTameEvent

## Methods

:::group{name=getAnimal}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// AnimalTameEvent.getAnimal() as Entity

myAnimalTameEvent.getAnimal();
```

:::

:::group{name=getLoveCause}

Return Type: [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)

```zenscript
// AnimalTameEvent.getLoveCause() as ServerPlayer

myAnimalTameEvent.getLoveCause();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// AnimalTameEvent.getPlayer() as Player

myAnimalTameEvent.getPlayer();
```

:::

:::group{name=isCancel}

Return Type: boolean

```zenscript
// AnimalTameEvent.isCancel() as boolean

myAnimalTameEvent.isCancel();
```

:::

:::group{name=setCancel}

```zenscript
AnimalTameEvent.setCancel(bool as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| bool      | boolean |


:::


