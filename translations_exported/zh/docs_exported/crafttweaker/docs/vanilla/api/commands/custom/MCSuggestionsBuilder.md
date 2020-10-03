# MCSuggestionsBuilder

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweeper.api.commands.custom.MCSuggestionsBuilder
```

## 方法
### add

返回类型： [craftbiner.api.commands.custom.MCSuggesBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.add(其他 craftweeper.api.commands.custom.MCSuggesBuilder);
```

| 参数    | 类型                                                                                                         | 描述                      |
| ----- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| other | [crafttweeper.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


### build

返回类型： [craftbiner.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionsBuilder.build();
```

### 创建偏移

返回类型： [craftbiner.api.commands.custom.MCSuggesBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.createOffset(起点为int)；
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| 开始 | int | No description provided |


### equals #等于

Return type: boolean

```zenscript
myMCSuggestionsBuilder.equals(ao as Object);
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |


### getInput

Return type: String

```zenscript
myMCSuggestionsBuilder.getInput();
```

### 剩余时间

Return type: String

```zenscript
myMCSuggestionsBuilder.getRemaining();
```

### getStart

Return type: int

```zenscript
myMCSuggestionsBuilder.getStart();
```

### hashCode

Return type: int

```zenscript
myMCSuggestionsBuilder.hashCode();
```

### 重启

返回类型： [craftbiner.api.commands.custom.MCSuggesBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.rest();
```

### 建议

返回类型： [craftbiner.api.commands.custom.MCSuggesBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.sinest(文本作为字符串)；
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| 文本 | String | No description provided |



返回类型： [craftbiner.api.commands.custom.MCSuggesBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.sinest(值为int)；
```

| 参数    | 类型  | 描述                      |
| ----- | --- | ----------------------- |
| value | int | No description provided |



返回类型： [craftbiner.api.commands.custom.MCSuggesBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.sinest(文本作为字符串，工具提示作为字符串)；
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| 文本   | String | No description provided |
| 工具提示 | String | No description provided |



返回类型： [craftbiner.api.commands.custom.MCSuggesBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.sinest(作为整数值、工具提示作为字符串)；
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| value | int    | No description provided |
| 工具提示  | String | No description provided |


### toString

Return type: String

```zenscript
myMCSuggestionsBuilder.toString();
```


## 运算符
### EQUALS

```zenscript
myMCSuggestionsBuilder == o 为对象
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| String | true |

