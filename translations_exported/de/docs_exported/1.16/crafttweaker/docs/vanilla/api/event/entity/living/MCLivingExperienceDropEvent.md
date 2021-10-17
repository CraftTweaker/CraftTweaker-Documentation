# MCLivingExperienceDropEvent



The event is cancelable.

If the event is canceled, the experience will not drop.

The event does not have a result.



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingExperienceDropEvent;
```


## Extending MCLivingEvent

MCLivingExperienceDropEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingExperienceDropEvent

## Properties

| Name                     | Type                                                 | Has Getter | Has Setter | Beschreibung            |
| ------------------------ | ---------------------------------------------------- | ---------- | ---------- | ----------------------- |
| attackingPlayer          | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | true       | false      | No Description Provided |
| droppedExperience        | int                                                  | true       | true       | No Description Provided |
| originalExperiencePoints | int                                                  | true       | false      | No Description Provided |

