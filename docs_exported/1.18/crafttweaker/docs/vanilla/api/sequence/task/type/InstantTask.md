# InstantTask&LT;T : Object, U : Object&GT;

A task that will run immediately.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.sequence.task.type.InstantTask;
```


## Implemented Interfaces
InstantTask implements the following interfaces. That means all methods defined in these interfaces are also available in InstantTask

- [ISequenceTask](/vanilla/api/sequence/task/ISequenceTask)&lt;T,U&gt;

## Constructors


```zenscript
new InstantTask<T,U>(actorConsumer as Consumer<T>) as InstantTask<T,U>
```
|   Parameter   |       Type        |
|---------------|-------------------|
| actorConsumer | Consumer&lt;T&gt; |



