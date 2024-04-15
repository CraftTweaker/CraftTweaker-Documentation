# IEventCancelable

This interface is extended by all Events that can be cancelled.  
That means you can cancel them using CrT or check if they have been canceled.

Note that events that have been canceled before CrT receives them will not be checked by the handlers.  
Also, if you register multiple handlers, and one of them cancels the event, the other CrT handlers will still receive it!

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IEventCancelable;`


## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `canceled`      | `canceled`      | bool                                              |


## ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop something from happening
