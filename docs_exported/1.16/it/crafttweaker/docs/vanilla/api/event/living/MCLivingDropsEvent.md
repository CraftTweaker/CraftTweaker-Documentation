# MCLivingDropsEvent



The event is cancelable.

If the event is canceled, the entity does not drop anything.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingDropsEvent;
```


## Extending MCLivingEvent

MCLivingDropsEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingDropsEvent

## Properties

| Name         | Type                                                                      | Ha Getter | Ha Setter |
| ------------ | ------------------------------------------------------------------------- | --------- | --------- |
| drops        | Collection&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | true      | false     |
| lootingLevel | int                                                                       | true      | false     |
| recentlyHit  | boolean                                                                   | true      | false     |
| sorgente     | [DamageSource](/vanilla/api/util/DamageSource)                            | true      | false     |

