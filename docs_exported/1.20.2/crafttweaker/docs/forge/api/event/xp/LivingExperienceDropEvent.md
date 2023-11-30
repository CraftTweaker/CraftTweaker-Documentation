# LivingExperienceDropEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.xp.LivingExperienceDropEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.xp.LivingExperienceDropEvent>(event => {
    println("LivingExperienceDropEvent ran!");
});
```


## Supertype

LivingExperienceDropEvent extends [LivingEvent](/forge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/living/LivingEvent) are also available in LivingExperienceDropEvent

## Properties

|        Name        |                       Type                        | Has Getter | Has Setter |
|--------------------|---------------------------------------------------|------------|------------|
| attackingPlayer    | [Player](/vanilla/api/entity/type/player/Player)? | true       | false      |
| droppedExperience  | int                                               | true       | true       |
| originalExperience | int                                               | true       | false      |

