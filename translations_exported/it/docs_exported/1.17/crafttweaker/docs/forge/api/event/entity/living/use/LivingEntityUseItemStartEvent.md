# LivingEntityUseItemStartEvent

Fired when a player starts 'using' an item, typically when they hold right mouse. Examples: Drawing a bow Eating Food Drinking Potions/Milk Guarding with a sword

 Cancel the event, or set the duration or <= 0 to prevent it from processing.

The event is cancelable.

If the event is canceled, it will not process.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.use.LivingEntityUseItemStartEvent;
```


## Extending LivingEntityUseItemEvent

LivingEntityUseItemStartEvent extends [LivingEntityUseItemEvent](/forge/api/event/entity/living/use/LivingEntityUseItemEvent). That means all methods available in [LivingEntityUseItemEvent](/forge/api/event/entity/living/use/LivingEntityUseItemEvent) are also available in LivingEntityUseItemStartEvent

