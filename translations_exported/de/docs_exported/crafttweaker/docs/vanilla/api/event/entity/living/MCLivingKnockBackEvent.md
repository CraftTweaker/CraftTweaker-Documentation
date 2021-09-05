# MCLivingKnockBackEvent



The event is cancelable.

If the event is canceled, the entity is not knocked back.

The event does not have a result.



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.MCLivingKnockBackEvent;
```


## Extending MCLivingEvent

MCLivingKnockBackEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingKnockBackEvent

## Properties

| Name           | Type   | Has Getter | Has Setter | Beschreibung            |
| -------------- | ------ | ---------- | ---------- | ----------------------- |
| originRatioX   | double | true       | false      | No Description Provided |
| originRatioZ   | double | true       | false      | No Description Provided |
| originStrength | float  | true       | false      | No Description Provided |
| ratioX         | double | true       | true       | No Description Provided |
| ratioZ         | double | true       | true       | No Description Provided |
| strength       | float  | true       | true       | No Description Provided |

