# AdvancementProgressEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.advancement.AdvancementProgressEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.advancement.AdvancementProgressEvent>(event => {
    println("AdvancementProgressEvent ran!");
});
```


## Supertype

AdvancementProgressEvent extends [AdvancementEvent](/forge/api/event/advancement/AdvancementEvent). That means all methods available in [AdvancementEvent](/forge/api/event/advancement/AdvancementEvent) are also available in AdvancementProgressEvent

## Properties

|        Name         |                                           Type                                            | Has Getter | Has Setter |
|---------------------|-------------------------------------------------------------------------------------------|------------|------------|
| advancement         | [Advancement](/vanilla/api/advancement/Advancement)                                       | true       | false      |
| advancementProgress | [AdvancementProgress](/vanilla/api/advancement/AdvancementProgress)                       | true       | false      |
| criterionName       | string                                                                                    | true       | false      |
| progressType        | [AdvancementProgressEventType](/forge/api/event/advancement/AdvancementProgressEventType) | true       | false      |

