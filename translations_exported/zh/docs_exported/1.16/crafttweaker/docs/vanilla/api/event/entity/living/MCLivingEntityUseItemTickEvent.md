# MCLivingEntityUseItemTickEvent

Fired every tick that a player is 'using' an item, see [MCLivingEntityUseItemStartEvent](/vanilla/api/event/entity/living/MCLivingEntityUseItemStartEvent) for info.

 Cancel the event, or set the duration or <= 0 to cause the player to stop using the item.

The event is cancelable.

If the event is canceled, the player will stop using the item.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingEntityUseItemTickEvent;
```


## Extending MCLivingEntityUseItemEvent

MCLivingEntityUseItemTickEvent extends [MCLivingEntityUseItemEvent](/vanilla/api/event/entity/living/MCLivingEntityUseItemEvent). That means all methods available in [MCLivingEntityUseItemEvent](/vanilla/api/event/entity/living/MCLivingEntityUseItemEvent) are also available in MCLivingEntityUseItemTickEvent

