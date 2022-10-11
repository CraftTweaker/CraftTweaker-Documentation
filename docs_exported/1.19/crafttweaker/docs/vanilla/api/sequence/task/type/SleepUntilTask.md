# SleepUntilTask&LT;T : Object, U : Object&GT;

A task that will sleep until its condition is met.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.sequence.task.type.SleepUntilTask;
```


## Implemented Interfaces
SleepUntilTask implements the following interfaces. That means all methods defined in these interfaces are also available in SleepUntilTask

- [ISequenceTask](/vanilla/api/sequence/task/ISequenceTask)&lt;T,U&gt;

## Constructors


```zenscript
new SleepUntilTask<T,U>(condition as Predicate<T>) as SleepUntilTask<T,U>
```
| Parameter |        Type        |
|-----------|--------------------|
| condition | Predicate&lt;T&gt; |



