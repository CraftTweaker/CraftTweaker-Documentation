# LivingDeathEvent

This event is fired just before an entity is killed. This allows you to run additional logic or prevent the death.

The event is cancelable.

If the event is canceled, the entity does not die.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.LivingDeathEvent;
```


## Extending LivingEvent

LivingDeathEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingDeathEvent

## Methods

:::group{name=getSource}

Gets the source of the damage that killed the entity.

Returns: The source of the damage that killed the entity.  
Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// LivingDeathEvent.getSource() as DamageSource

event.getSource();
```

:::


## Properties

| 名称  | Type                                            | Has Getter | Has Setter | Description                                           |
| --- | ----------------------------------------------- | ---------- | ---------- | ----------------------------------------------------- |
| ソース | [DamageSource](/vanilla/api/world/DamageSource) | true       | false      | Gets the source of the damage that killed the entity. |

