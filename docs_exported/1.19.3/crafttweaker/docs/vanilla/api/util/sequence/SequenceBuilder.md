# SequenceBuilder&LT;T : Object, U : Object&GT;

A builder for [Sequence](/vanilla/api/util/sequence/Sequence)&lt;T,U&gt;.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.sequence.SequenceBuilder;
```


## Methods

:::group{name=addTask}

Adds a task to the sequence.

Returns: This builder to chain calls.  
Return Type: [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt;

```zenscript
// SequenceBuilder.addTask(task as ISequenceTask<T,U>) as SequenceBuilder<T,U>

level.sequence().addTask(new SleepTask(20));
```

| Parameter |                                 Type                                 |   Description    |
|-----------|----------------------------------------------------------------------|------------------|
| task      | [ISequenceTask](/vanilla/api/sequence/task/ISequenceTask)&lt;T,U&gt; | The task to add. |


:::

:::group{name=run}

Runs the function as part of the sequence.

Returns: This builder to chain calls.  
Return Type: [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt;

```zenscript
// SequenceBuilder.run(function as BiConsumer<T,SequenceContext<T,U>>) as SequenceBuilder<T,U>

level.sequence().run((level, context) => level.setRainLevel(0.5));
```

| Parameter |                                             Type                                             |     Description      |
|-----------|----------------------------------------------------------------------------------------------|----------------------|
| function  | BiConsumer&lt;T,[SequenceContext](/vanilla/api/util/sequence/SequenceContext)&lt;T,U&gt;&gt; | The function to run. |


:::

:::group{name=run}

Runs the function as part of the sequence.

Returns: This builder to chain calls.  
Return Type: [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt;

```zenscript
// SequenceBuilder.run(function as Consumer<T>) as SequenceBuilder<T,U>

level.sequence().run((level) => level.setRainLevel(0.5));
```

| Parameter |       Type        |     Description      |
|-----------|-------------------|----------------------|
| function  | Consumer&lt;T&gt; | The function to run. |


:::

:::group{name=sleep}

Sleep (wait) for the given amount of ticks.

Returns: This builder to chain calls.  
Return Type: [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt;

```zenscript
// SequenceBuilder.sleep(ticks as long) as SequenceBuilder<T,U>

level.sequence().sleep(20);
```

| Parameter | Type |         Description          |
|-----------|------|------------------------------|
| ticks     | long | The amount of ticks to wait. |


:::

:::group{name=sleepUntil}

Sleeps until the given condition is met.

Returns: This builder to chain calls.  
Return Type: [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt;

```zenscript
// SequenceBuilder.sleepUntil(condition as BiPredicate<T,SequenceContext<T,U>>) as SequenceBuilder<T,U>

level.sequence().sleepUntil((level, context) => level.isRaining);
```

| Parameter |                                             Type                                              |        Description         |
|-----------|-----------------------------------------------------------------------------------------------|----------------------------|
| condition | BiPredicate&lt;T,[SequenceContext](/vanilla/api/util/sequence/SequenceContext)&lt;T,U&gt;&gt; | The condition to wait for. |


:::

:::group{name=sleepUntil}

Sleeps until the given condition is met.

Returns: This builder to chain calls.  
Return Type: [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt;

```zenscript
// SequenceBuilder.sleepUntil(condition as Predicate<T>) as SequenceBuilder<T,U>

level.sequence().sleepUntil((level) => level.isRaining);
```

| Parameter |        Type        |        Description         |
|-----------|--------------------|----------------------------|
| condition | Predicate&lt;T&gt; | The condition to wait for. |


:::

:::group{name=start}

Builds and starts the sequence.

Returns: The sequence that was built.  
Return Type: [Sequence](/vanilla/api/util/sequence/Sequence)&lt;T,U&gt;

```zenscript
// SequenceBuilder.start() as Sequence<T,U>

level.sequence().start();
```

:::

:::group{name=then}

Runs the function as part of the sequence.

 This method is an alias for `run`

Returns: This builder to chain calls.  
Return Type: [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt;

```zenscript
// SequenceBuilder.then(function as BiConsumer<T,SequenceContext<T,U>>) as SequenceBuilder<T,U>

level.sequence().then((level, context) => level.setRainLevel(0.5));
```

| Parameter |                                             Type                                             |     Description      |
|-----------|----------------------------------------------------------------------------------------------|----------------------|
| function  | BiConsumer&lt;T,[SequenceContext](/vanilla/api/util/sequence/SequenceContext)&lt;T,U&gt;&gt; | The function to run. |


:::

:::group{name=then}

Runs the function as part of the sequence.

 This method is an alias for `run`

Returns: This builder to chain calls.  
Return Type: [SequenceBuilder](/vanilla/api/util/sequence/SequenceBuilder)&lt;T,U&gt;

```zenscript
// SequenceBuilder.then(function as Consumer<T>) as SequenceBuilder<T,U>

level.sequence().then((level) => level.setRainLevel(0.5));
```

| Parameter |       Type        |     Description      |
|-----------|-------------------|----------------------|
| function  | Consumer&lt;T&gt; | The function to run. |


:::


