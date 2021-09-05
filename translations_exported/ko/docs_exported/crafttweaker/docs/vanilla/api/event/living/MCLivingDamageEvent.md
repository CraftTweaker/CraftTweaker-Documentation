# MCLivingDamageEvent



The event is cancelable.

If the event is canceled, the Entity is not hurt. Used resources WILL NOT be restored.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.MCLivingDamageEvent;
```


## Extending MCLivingEvent

MCLivingDamageEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingDamageEvent

## Properties

| 이름     | Type                                           | Has Getter | Has Setter | Description             |
| ------ | ---------------------------------------------- | ---------- | ---------- | ----------------------- |
| amount | float                                          | true       | true       | No Description Provided |
| source | [DamageSource](/vanilla/api/util/DamageSource) | true       | false      | No Description Provided |

