# DetonateExplosionEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.DetonateExplosionEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.DetonateExplosionEvent>(event => {
    println("DetonateExplosionEvent ran!");
});
```


## Supertype

DetonateExplosionEvent extends [ExplosionEvent](/neoforge/api/event/ExplosionEvent). That means all methods available in [ExplosionEvent](/neoforge/api/event/ExplosionEvent) are also available in DetonateExplosionEvent

## Properties

|       Name       |                              Type                              | Has Getter | Has Setter |
|------------------|----------------------------------------------------------------|------------|------------|
| affectedBlocks   | stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt; | true       | false      |
| affectedEntities | stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;        | true       | false      |

