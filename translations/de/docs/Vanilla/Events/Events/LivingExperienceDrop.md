# LivingExperienceDrop

This event is fired when an entity dies and drops experience, allowing for the amount of experience to be modified. Alternately, the event can be **canceled** to prevent experience from being dropped.

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LivingExperienceDropEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
LivingExperienceDrop Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetter/ZenSetter
The following information can be retrieved/set during the event:

| ZenGetter            | ZenSetter           | Type                                 |
| -------------------- | ------------------- | ------------------------------------ |
| `player`             |                     | [IPlayer](/Vanilla/Players/IPlayer/) |
| `droppedExperience`  | `droppedExperience` | int                                  |
| `originalExperience` |                     | int                                  |

## Notes

`originalExperience` contains the original Vanilla amount of experience. It is possible that `droppedExperience` when this event is fired has already been modified.
