# MCLivingConversionEvent

This event is the parent event for [MCLivingConversionPreEvent](/vanilla/api/event/entity/living/MCLivingConversionPreEvent) and [MCLivingConversionPostEvent](/vanilla/api/event/entity/living/MCLivingConversionPostEvent).
 It is only registered so that these two events work, you should never have to listen to this one directly.

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingConversionEvent;
```


## Extending MCLivingEvent

MCLivingConversionEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingConversionEvent

