# ExplosionEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.misc.ExplosionEvent;
```


## Extending Event

ExplosionEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in ExplosionEvent

## Methods

:::group{name=getExplosion}

Return Type: [Explosion](/vanilla/api/world/Explosion)

```zenscript
// ExplosionEvent.getExplosion() as Explosion

myExplosionEvent.getExplosion();
```

:::

:::group{name=getPos}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// ExplosionEvent.getPos() as Vec3

myExplosionEvent.getPos();
```

:::

:::group{name=getResult}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// ExplosionEvent.getResult() as EventResult

myExplosionEvent.getResult();
```

:::

:::group{name=getWorld}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// ExplosionEvent.getWorld() as Level

myExplosionEvent.getWorld();
```

:::


