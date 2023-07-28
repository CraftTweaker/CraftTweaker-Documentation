::since{version=11.0.0}
# EventPhase

Represents a phase in which an event is fired and can be listened to.

 Various events might have different meanings for phases, so do check the documentation. Usually, you want to use
 the `NORMAL` phase (which is specified for you automatically) to catch events occurring in the default
 phase.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.events.EventPhase;
```


## Enum Constants

EventPhase is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
<constant:eventphase:earliest>
<constant:eventphase:normal>
<constant:eventphase:latest>
```
