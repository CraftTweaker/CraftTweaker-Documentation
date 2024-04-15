# WorldTick

The WorldTick Event is fired each tick for each world on both client and server.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.WorldTickEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
WorldTick Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ITickEvent](/Vanilla/Events/Events/ITickEvent/)

## ZenGetters/ZenSetters
The following additional information can be retrieved from the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `world`         |                 | [IWorld](/Vanilla/World/IWorld/)                  |


## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `phase`         |                  | string with value of `START`or `END`             |
| `side`          |                  | string with value of `CLIENT`or `SERVER`         |
