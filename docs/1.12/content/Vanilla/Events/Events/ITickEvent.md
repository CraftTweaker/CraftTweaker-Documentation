# ITickEvent
This interface is extended by all events that use ticks.  

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ITickEvent;`

## ZenGetters/ZenSetters

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `phase`         |                  | string with value of `START`or `END`             |
| `side`          |                  | string with value of `CLIENT`or `SERVER`         |
