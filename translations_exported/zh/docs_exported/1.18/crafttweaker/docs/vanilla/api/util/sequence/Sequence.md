# Sequence&LT;T : Object, U : Object&GT;

A sequence is a series of tasks that run after each other when the actor ticks.

 For example, when a level ticks.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.sequence.Sequence;
```


## 使用方式

:::group{name=getContext}

Gets the context for this sequence.

Returns: The context for this sequence.  
Return Type: [SequenceContext](/vanilla/api/util/sequence/SequenceContext)&lt;T,U&gt;

```zenscript
// Sequence.getContext() as SequenceContext<T,U>

mySequence.getContext();
```

:::

:::group{name=isComplete}

Checks if this sequence is complete.

Returns: true if complete, false otherwise.  
Return Type: boolean

```zenscript
// Sequence.isComplete() as boolean

mySequence.isComplete();
```

:::

:::group{name=isStopped}

Checks if this sequence is stopped or not.

Returns: true if stopped, false otherwise.  
Return Type: boolean

```zenscript
// Sequence.isStopped() as boolean

mySequence.isStopped();
```

:::

:::group{name=stop}

Stops this sequence, subsequent tasks will not be ran.

Return Type: void

```zenscript
// Sequence.stop() as void

mySequence.stop();
```

:::

:::group{name=tick}

Ticks this sequence.

Return Type: void

```zenscript
// Sequence.tick() as void

mySequence.tick();
```

:::


## 参数

| 名称         | 类型                                                                                   | 可获得  | 可设置   | 描述                                         |
| ---------- | ------------------------------------------------------------------------------------ | ---- | ----- | ------------------------------------------ |
| 上下文：       | [SequenceContext](/vanilla/api/util/sequence/SequenceContext)&lt;T,U&gt; | true | false | Gets the context for this sequence.        |
| isComplete | 布尔值                                                                                  | true | false | Checks if this sequence is complete.       |
| stopped    | 布尔值                                                                                  | true | false | Checks if this sequence is stopped or not. |

