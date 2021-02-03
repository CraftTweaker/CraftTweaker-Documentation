# MCEvent

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.MCEvent;
```


## 方法

### hasResult

Return Type: boolean

```zenscript
MCEvent.hasResult() as boolean
myMCEvent.hasResult();
```

### isCancelable

Return Type: boolean

```zenscript
MCEvent.isCancelable() as boolean
myMCEvent.isCancelable();
```

### isCanceled

Return Type: boolean

```zenscript
MCEvent.isCanceled() as boolean
myMCEvent.isCanceled();
```

### setCanceled

Return Type: void

```zenscript
MCEvent.setCanceled(cancel as boolean) as void
```

| 参数     | 类型      | 描述                      |
| ------ | ------- | ----------------------- |
| cancel | boolean | No Description Provided |



## 参数

| 名称         | 类型      | 可获得  | 可设置   |
| ---------- | ------- | ---- | ----- |
| cancelable | boolean | true | false |
| canceled   | boolean | true | true  |
| hasResult  | boolean | true | false |

