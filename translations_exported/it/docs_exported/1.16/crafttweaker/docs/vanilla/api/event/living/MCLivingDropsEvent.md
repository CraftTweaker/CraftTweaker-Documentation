# MCLivingDropsEvent



The event is cancelable.

If the event is canceled, the entity does not drop anything.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingDropsEvent;
```


## Extending MCLivingEvent

MCLivingDropsEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingDropsEvent

## Proprietà

| Nome         | Tipo                                                                      | Ha Getter | Ha Setter | Descrizione             |
| ------------ | ------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| drops        | Collection&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | sì        | no        | No Description Provided |
| lootingLevel | int                                                                       | sì        | no        | No Description Provided |
| recentlyHit  | boolean                                                                   | sì        | no        | No Description Provided |
| sorgente     | [DamageSource](/vanilla/api/util/DamageSource)                            | sì        | no        | No Description Provided |

