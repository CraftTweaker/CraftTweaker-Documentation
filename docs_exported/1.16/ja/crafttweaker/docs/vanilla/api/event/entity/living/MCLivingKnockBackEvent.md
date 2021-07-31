# MCLivingKnockBackEvent



The event is cancelable.

If the event is canceled, the entity is not knocked back.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.MCLivingKnockBackEvent;
```


## Extending MCLivingEvent

MCLivingKnockBackEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingKnockBackEvent

## Properties

| 名称             | Type   | Has Getter | Has Setter |
| -------------- | ------ | ---------- | ---------- |
| originRatioX   | double | true       | false      |
| originRatioZ   | double | true       | false      |
| originStrength | float  | true       | false      |
| ratioX         | double | true       | true       |
| ratioZ         | double | true       | true       |
| strength       | float  | true       | true       |

