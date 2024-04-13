# IEventHasResult

This interface is extended by all Events that has a result that is used by the event.
An event's result can be one of three values:

- allow
- deny
- default

The meaning of these is dependent on context. Generally, denying an event prevents a specific event-related action from taking place (even if it wasn't guaranteed to take place). Likewise, allowing an event will force a behaviour to take place (even if it wasn't guaranteed). Default simply causes the event to continue with its normal logic. Not all events use every result.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IEventHasResult;`

## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `result`        |                 | string with value of `default`, `deny` or `allow` |


## ZenMethodes
- `event.deny()` Method, sets the event's result to `deny`
- `event.allow()` Method, sets the event's result to `allow`
- `event.default()` Method, sets the event's result to `default`
