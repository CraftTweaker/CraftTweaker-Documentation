# NumberProvider

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.NumberProvider;
```


## Static Methods

:::group{name=between}

Return Type: [NumberProvider](/vanilla/api/loot/NumberProvider)

```zenscript
NumberProvider.between(min as float, max as float) as NumberProvider
```

| 参数  | 类型    |
| --- | ----- |
| min | float |
| max | float |


:::

:::group{name=binomial}

Return Type: [NumberProvider](/vanilla/api/loot/NumberProvider)

```zenscript
NumberProvider.binomial(n as int, p as int) as NumberProvider
```

| 参数 | 类型  |
| -- | --- |
| n  | int |
| p  | int |


:::

:::group{name=exactly}

Return Type: [NumberProvider](/vanilla/api/loot/NumberProvider)

```zenscript
NumberProvider.exactly(value as float) as NumberProvider
```

| 参数    | 类型    |
| ----- | ----- |
| value | float |


:::

:::group{name=scoreboard}

Return Type: [NumberProvider](/vanilla/api/loot/NumberProvider)

```zenscript
NumberProvider.scoreboard(target as EntityTarget, score as string, scale as float) as NumberProvider
```

| 参数     | 类型                                             | 可选    | 默认值 |
| ------ | ---------------------------------------------- | ----- | --- |
| target | [EntityTarget](/vanilla/api/loot/EntityTarget) | false |     |
| score  | string                                         | false |     |
| scale  | float                                          | true  | 1.0 |


:::

