# AdvancementProgressEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.advancement.AdvancementProgressEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.advancement.AdvancementProgressEvent>(event => {
    println("AdvancementProgressEvent ran!");
});
```


## Properties

|        Name         |                                             Type                                             | Has Getter | Has Setter |
|---------------------|----------------------------------------------------------------------------------------------|------------|------------|
| advancement         | [AdvancementHolder](/vanilla/api/advancement/AdvancementHolder)                              | true       | false      |
| advancementProgress | [AdvancementProgress](/vanilla/api/advancement/AdvancementProgress)                          | true       | false      |
| criterionName       | string                                                                                       | true       | false      |
| progressType        | [AdvancementProgressEventType](/neoforge/api/event/advancement/AdvancementProgressEventType) | true       | false      |

