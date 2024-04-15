# ServerTick

The ServerTick Event is fired every tick on the server.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ServerTickEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
WorldTick Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ITickEvent](/Vanilla/Events/Events/ITickEvent/)


## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `phase`         |                  | string with value of `START`or `END`             |
| `side`          |                  | string with value of `CLIENT`or `SERVER`         |
