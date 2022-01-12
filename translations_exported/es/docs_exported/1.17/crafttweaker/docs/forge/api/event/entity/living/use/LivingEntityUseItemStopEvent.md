# LivingEntityUseItemStopEvent

Fired when a player stops using an item without the use duration timing out. Example: Stop eating 1/2 way through Stop defending with sword Stop drawing bow. This case would fire the arrow

 Duration on this event is how long the item had left in it's count down before 'finishing'

The event is cancelable.

If the event is canceled, will prevent the Item from being notified that it has stopped being used. The only vanilla item this would effect are bows, and it would cause them NOT to fire their arrow.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.use.LivingEntityUseItemStopEvent;
```


## Extending LivingEntityUseItemEvent

LivingEntityUseItemStopEvent extends [LivingEntityUseItemEvent](/forge/api/event/entity/living/use/LivingEntityUseItemEvent). That means all methods available in [LivingEntityUseItemEvent](/forge/api/event/entity/living/use/LivingEntityUseItemEvent) are also available in LivingEntityUseItemStopEvent

