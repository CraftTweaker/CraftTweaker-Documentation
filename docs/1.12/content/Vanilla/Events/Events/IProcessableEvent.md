# IProcessableEvent

This interface is extended by all events that can be processed.  
These events are to be set as processed after everything they are made for has been completed and other event handlers should not change the event any more.  
Bear in mind that they still can!


## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IPlayerEvent;`

## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `processed`     |                 | bool                                              |


## ZenMethods
- `event.process()` void, returns nothing

