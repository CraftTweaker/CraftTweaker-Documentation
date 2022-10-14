# LivingEntityUseItemTickEvent

Fired every tick that a player is 'using' an item, see [LivingEntityUseItemStartEvent](/forge/api/event/entity/living/use/LivingEntityUseItemStartEvent) for info.

 Cancel the event, or set the duration or <= 0 to cause the player to stop using the item.

The event is cancelable.

If the event is canceled, the player will stop using the item.

The event does not have a result.



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.use.LivingEntityUseItemTickEvent;
```


## Extending LivingEntityUseItemEvent

LivingEntityUseItemTickEvent extends [LivingEntityUseItemEvent](/forge/api/event/entity/living/use/LivingEntityUseItemEvent). That means all methods available in [LivingEntityUseItemEvent](/forge/api/event/entity/living/use/LivingEntityUseItemEvent) are also available in LivingEntityUseItemTickEvent

