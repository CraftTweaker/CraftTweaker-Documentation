# AnimalTame

This event is fired to determine if an animal is going to be tamed. If canceled, **the tame does not succeed**. Otherwise, it simply serves as a notification of the tame taking place.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.AnimalTameEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
AnimalTame Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `animal`        |                 | IEntityanimal                                     |
| `animal`        |                 | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `player`        |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |
