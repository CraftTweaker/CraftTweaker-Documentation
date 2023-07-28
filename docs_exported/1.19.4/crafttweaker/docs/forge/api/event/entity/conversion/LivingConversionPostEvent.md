# LivingConversionPostEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.entity.conversion.LivingConversionPostEvent;
```


## Extending LivingConversionEvent

LivingConversionPostEvent extends [LivingConversionEvent](/forge/api/event/entity/living/conversion/LivingConversionEvent). That means all methods available in [LivingConversionEvent](/forge/api/event/entity/living/conversion/LivingConversionEvent) are also available in LivingConversionPostEvent

## Properties

|  Name   |                       Type                       | Has Getter | Has Setter |
|---------|--------------------------------------------------|------------|------------|
| outcome | [LivingEntity](/vanilla/api/entity/LivingEntity) | true       | false      |

