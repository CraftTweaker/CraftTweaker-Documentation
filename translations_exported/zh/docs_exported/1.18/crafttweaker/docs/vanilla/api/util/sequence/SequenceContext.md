# SequenceContext&LT;T : Object, U : Object&GT;

A SequenceContext provides more data to [Sequence](/vanilla/api/util/sequence/Sequence)&lt;T,U&gt;s and allows a sequence to be stopped from inside a task.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.sequence.SequenceContext;
```


## Constructor #构造函数

No Description Provided
```zenscript
new SequenceContext<T,U>(sequence as Sequence<T,U>, data as U) as SequenceContext<T,U>
```
| 参数       | 类型                                                                     | 描述                      |
| -------- | ---------------------------------------------------------------------- | ----------------------- |
| sequence | [Sequence](/vanilla/api/util/sequence/Sequence)&lt;T,U&gt; | No Description Provided |
| data     | U                                                                      | No Description Provided |



## 使用方式

:::group{name=getData}

Gets the data provided to the sequence.

 Note, this can never return null, if the data is null then it will throw an error.

Returns: The data provided to the sequence or an error if null was provided.  
Return Type: U

```zenscript
// SequenceContext.getData() as U

mySequenceContext.getData();
```

:::

:::group{name=stop}

Stop the sequence.

Return Type: void

```zenscript
// SequenceContext.stop() as void

mySequenceContext.stop();
```

:::


## 参数

| 名称   | 类型 | 可获得  | 可设置   | 描述                                                                                                                                                     |
| ---- | -- | ---- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| data | U  | true | false | Gets the data provided to the sequence. <br />  <br />  Note, this can never return null, if the data is null then it will throw an error. |

