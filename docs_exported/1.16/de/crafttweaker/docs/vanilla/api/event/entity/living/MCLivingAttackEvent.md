# MCLivingAttackEvent

LivingAttackEvent is fired when a living Entity is attacked.

The event is cancelable.

If the event is canceled, the entity does not take attack damage.

The event does not have a result.



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingAttackEvent;
```


## Extending MCLivingEvent

MCLivingAttackEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingAttackEvent

## Properties

| Name   | Type                                           | Has Getter | Has Setter |
| ------ | ---------------------------------------------- | ---------- | ---------- |
| amount | float                                          | true       | false      |
| quell  | [DamageSource](/vanilla/api/util/DamageSource) | true       | false      |

