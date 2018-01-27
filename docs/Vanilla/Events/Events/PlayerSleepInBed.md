# PlayerSleepInBed

The PlayerSleepInBed Event is fired whenever a player sleeps.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter   | Return Type                               |
|-------------|-------------------------------------------|
| `x`         | int                                       |
| `y`         | int                                       |
| `z`         | int                                       |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer)       |
