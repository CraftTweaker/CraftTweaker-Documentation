# GameStage

The GameStage is the only type of event that you need to know for gamestages integration.  
It exists in a cancelable and a noncancelable version, depending on the context of the event.

## Implementing EventClasses
The GameStage implements following EventClasses and thus is able to use all functionality they provide as well: 

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent)
- [IEventCancelable](/Vanilla/EVents/Events/IEventCancelable) (Only the cancelable ones!)

## Event Class
You will need to cast the event in the function header as one of these classes:  
```
mods.gamestages.GameStageEvent  
mods.gamestages.GameStageEventCancelable
```  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!

| ZenGetter Name | ZenSetter Name |  Type                                   |
|----------------|----------------|-----------------------------------------|
| player         |                | [IPlayer](/Vanilla/Players/IPlayer)     |
| stage          | stage          | string                                  |