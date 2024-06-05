# ISequenceTask&LT;T : Object, U : Object&GT;

A task in a [Sequence](/vanilla/api/util/sequence/Sequence)&lt;T,U&gt;.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.sequence.task.ISequenceTask;
```


## Methods

:::group{name=isComplete}

Checks if this task is complete.

Return Type: boolean

```zenscript
ISequenceTask.isComplete(actor as T, context as SequenceContext<T,U>) as boolean
```

| Parameter |                                   Type                                   |            Description             |
|-----------|--------------------------------------------------------------------------|------------------------------------|
| actor     | T                                                                        | The actor that is being sequenced. |
| context   | [SequenceContext](/vanilla/api/util/sequence/SequenceContext)&lt;T,U&gt; | The context for the sequence.      |


:::

:::group{name=tick}

Ticks this task.

 A check to `isComplete` should be done before ticking!.

```zenscript
// ISequenceTask.tick(actor as T, context as SequenceContext<T,U>)

new SleepTask(20).tick(level, new crafttweaker.api.util.sequence.SequenceContext(sequence, new crafttweaker.api.data.MapData()));
```

| Parameter |                                   Type                                   |            Description             |
|-----------|--------------------------------------------------------------------------|------------------------------------|
| actor     | T                                                                        | The actor that is being sequenced. |
| context   | [SequenceContext](/vanilla/api/util/sequence/SequenceContext)&lt;T,U&gt; | The context for the sequence.      |


:::


