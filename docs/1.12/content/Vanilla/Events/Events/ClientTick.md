# ClientTick

The ClientTick Event is fired every tick on the client.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ClientTickEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
WorldTick Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ITickEvent](/Vanilla/Events/Events/ITickEvent/)

## ZenGetters
There is no additional information besides the information mentioned in the interfaces above.

## ZenGetters/ZenSetters/ZenMethodes from extensions
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `phase`         |                 | string with value of `START`or `END`              |
| `side`          |                 | string with value of `CLIENT`or `SERVER`          |
