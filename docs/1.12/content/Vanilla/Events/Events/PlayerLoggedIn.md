# PlayerLoggedIn

The PlayerLoggedIn Event is fired whenever a player logs in.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerLoggedInEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerLoggedIn Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters/ZenSetters from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `player`         |                 | [IPlayer](/Vanilla/Players/IPlayer/)             |

## Extension from extension
The following information can be retrieved/set during the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)   |
