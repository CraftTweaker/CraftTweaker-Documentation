# EventPriority

Different priorities for Event listeners. NORMAL is the default level for a listener registered without a priority.

 HIGHEST is the first to execute, LOWEST is the last to execute.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.events.EventPriority;
```


## Enum Constants

EventPriority is an enum. It has 5 enum constants. They are accessible using the code below.

```zenscript
EventPriority.HIGHEST
EventPriority.HIGH
EventPriority.NORMAL
EventPriority.LOW
EventPriority.LOWEST
```
