# LivingExperienceDrop

This event is fired when an entity dies and drops experience, allowing for the amount of experience to be modified. Alternately, the event can be **canceled** to prevent experience from being dropped.

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LivingExperienceDropEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
LivingExperienceDrop Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter            | ZenSetter           | Typ                                  |
| -------------------- | ------------------- | ------------------------------------ |
| `gracz`              |                     | [IPlayer](/Vanilla/Players/IPlayer/) |
| `droppedExperience`  | `droppedExperience` | odcień                               |
| `originalExperience` |                     | odcień                               |

## Uwagi

`originalExperience` contains the original Vanilla amount of experience. It is possible that `droppedExperience` when this event is fired has already been modified.
