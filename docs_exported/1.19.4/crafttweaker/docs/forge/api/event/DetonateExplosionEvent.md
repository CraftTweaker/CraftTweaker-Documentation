# DetonateExplosionEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.DetonateExplosionEvent;
```


## Extending ExplosionEvent

DetonateExplosionEvent extends [ExplosionEvent](/forge/api/event/ExplosionEvent). That means all methods available in [ExplosionEvent](/forge/api/event/ExplosionEvent) are also available in DetonateExplosionEvent

## Properties

|       Name       |                              Type                              | Has Getter | Has Setter |
|------------------|----------------------------------------------------------------|------------|------------|
| affectedBlocks   | stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt; | true       | false      |
| affectedEntities | stdlib.List&lt;[Entity](/vanilla/api/entity/Entity)&gt;        | true       | false      |

