# IProcessableEvent

This interface is extended by all events that can be processed.  
These events are to be set as processed after everything they are made for has been completed and other event handlers should not change the event any more.  
Bear in mind that they still can!


## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IPlayerEvent;`

## What can be done with these

- `event.process();` method, returns void (nothing)
- `event.processed;` getter, returns a bool