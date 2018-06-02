# SacrificialKnifeUsedEvent

The SacrificialKnifeUsedEvent is fired whenever Player tries to use a sacrificial dagger to self-sacrifice near an altar.  
It can be canceled, which will result in the player doing a simple rightclick with the dagger.

## Implementing EventClasses
The SacrificialKnifeUsedEvent implements following EventClasses and thus is able to use all functionality they provide as well: 

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable)

## Event Class
You will need to cast the event in the function header as this class:  
`mods.bloodmagic.SacrificialKnifeUsedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!

| ZenGetter Name    | ZenSetter Name    | Type                                    |
|-------------------|-------------------|-----------------------------------------|
| canceled          | canceled          | bool                                    |
| player            |                   | [IPlayer](/Vanilla/Players/IPlayer)     |
| healthDrained     |                   | int                                     |
| lpAdded           | lpAdded           | int                                     |
| shouldDrainHealth | shouldDrainHealth | bool                                    |
| shouldFillAltar   | shouldFillAltar   | bool                                    |
