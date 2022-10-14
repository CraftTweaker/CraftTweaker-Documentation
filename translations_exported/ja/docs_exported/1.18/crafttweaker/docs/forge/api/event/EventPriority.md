# EventPriority

Different priorities for Event listeners. NORMAL is the default level for a listener registered without a priority.

 HIGHEST is the first to execute, LOWEST is the last to execute.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.events.EventPriority;
```


## Enum Constants

EventPriority is an enum. It has 5 enum constants. They are accessible using the code below.

```zenscript
<constant:forge:event/priority:highest>
<constant:forge:event/priority:high>
<constant:forge:event/priority:normal>
<constant:forge:event/priority:low>
<constant:forge:event/priority:lowest>
```
