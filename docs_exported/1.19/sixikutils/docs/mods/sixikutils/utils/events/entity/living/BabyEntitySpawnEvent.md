# BabyEntitySpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.BabyEntitySpawnEvent;
```


## Extending Event

BabyEntitySpawnEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in BabyEntitySpawnEvent

## Methods

:::group{name=getCausedByPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// BabyEntitySpawnEvent.getCausedByPlayer() as Player

myBabyEntitySpawnEvent.getCausedByPlayer();
```

:::

:::group{name=getChildEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// BabyEntitySpawnEvent.getChildEntity() as Entity

myBabyEntitySpawnEvent.getChildEntity();
```

:::

:::group{name=getChildEntityAge}

Return Type: int

```zenscript
// BabyEntitySpawnEvent.getChildEntityAge() as int

myBabyEntitySpawnEvent.getChildEntityAge();
```

:::

:::group{name=getParentA}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// BabyEntitySpawnEvent.getParentA() as Entity

myBabyEntitySpawnEvent.getParentA();
```

:::

:::group{name=getParentB}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// BabyEntitySpawnEvent.getParentB() as Entity

myBabyEntitySpawnEvent.getParentB();
```

:::

:::group{name=setChildEntityBaby}

```zenscript
BabyEntitySpawnEvent.setChildEntityBaby(bool as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| bool      | boolean |


:::


