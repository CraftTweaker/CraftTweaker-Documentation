# AnimalTame

This event is fired to determine if an animal is going to be tamed. If canceled, **the tame does not succeed**. Otherwise, it simply serves as a notification of the tame taking place.

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.AnimalTameEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
AnimalTame Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetter/ZenSetter
The following information can be retrieved/set during the event:

| ZenGetter | ZenSetter | Type                                              |
| --------- | --------- | ------------------------------------------------- |
| `animal`  |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `animal`  |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `player`  |           | [IPlayer](/Vanilla/Players/IPlayer/)              |
