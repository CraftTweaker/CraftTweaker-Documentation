# MCLivingEntityUseItemStartEvent

Fired when a player starts 'using' an item, typically when they hold right mouse. Examples: Drawing a bow Eating Food Drinking Potions/Milk Guarding with a sword

 Cancel the event, or set the duration or <= 0 to prevent it from processing.

The event is cancelable.

If the event is canceled, it will not process.

The event does not have a result.



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingEntityUseItemStartEvent;
```


## Extending MCLivingEntityUseItemEvent

MCLivingEntityUseItemStartEvent extends [MCLivingEntityUseItemEvent](/vanilla/api/event/entity/living/MCLivingEntityUseItemEvent). That means all methods available in [MCLivingEntityUseItemEvent](/vanilla/api/event/entity/living/MCLivingEntityUseItemEvent) are also available in MCLivingEntityUseItemStartEvent

