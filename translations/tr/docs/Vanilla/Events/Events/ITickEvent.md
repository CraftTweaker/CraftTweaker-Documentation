# ITickEvent
This interface is extended by all events that use ticks.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ITickEvent;`

## ZenGetters

| name  | type                                 |
| ----- | ------------------------------------ |
| phase | string (can be "START" or "END")     |
| side  | string (can be "CLIENT" or "SERVER") |