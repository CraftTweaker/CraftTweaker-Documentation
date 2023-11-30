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


## Properties

|        Name         |                                           Type                                            | Has Getter | Has Setter |
|---------------------|-------------------------------------------------------------------------------------------|------------|------------|
| advancement         | **invalid**                                                                               | true       | false      |
| advancementProgress | [AdvancementProgress](/vanilla/api/advancement/AdvancementProgress)                       | true       | false      |
| criterionName       | string                                                                                    | true       | false      |
| progressType        | [AdvancementProgressEventType](/forge/api/event/advancement/AdvancementProgressEventType) | true       | false      |

