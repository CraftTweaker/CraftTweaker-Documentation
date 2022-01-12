# IntRange

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.IntRange;
```


## Static Methods

:::group{name=atLeast}

Return Type: [IntRange](/vanilla/api/loot/IntRange)

```zenscript
IntRange.atLeast(min as int) as IntRange
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| min | int | No Description Provided |


:::

:::group{name=atMost}

Return Type: [IntRange](/vanilla/api/loot/IntRange)

```zenscript
IntRange.atMost(max as int) as IntRange
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| max | int | No Description Provided |


:::

:::group{name=between}

Return Type: [IntRange](/vanilla/api/loot/IntRange)

```zenscript
IntRange.between(min as int, max as int) as IntRange
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| min | int | No Description Provided |
| max | int | No Description Provided |


:::

:::group{name=exactly}

Return Type: [IntRange](/vanilla/api/loot/IntRange)

```zenscript
IntRange.exactly(value as int) as IntRange
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| 值  | int | No Description Provided |


:::

