# MCSuggestion

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttbiner.api.commands.custom.MCSuggestion
```

## 方法
### 应用

返回类型：字符串

```zenscript
myMCSuggestion.apply(输入为字符串)；
```

| 参数        | 类型          | 描述                      |
| --------- | ----------- | ----------------------- |
| input（输入） | 字符串[string] | No description provided |


### 比较到

返回类型：int

```zenscript
myMCSuggestion.compareTo(o as craftwiner.api.commands.custom.MCSuggestion);
```

| 参数 | 类型                                                                                        | 描述                      |
| -- | ----------------------------------------------------------------------------------------- | ----------------------- |
| o  | [crafttbiner.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No description provided |


### 对比的 ToIgnoreCase

返回类型：int

```zenscript
myMCSuggestion.compareToIgnoreCase(Bb as craftbiner.api.commands.custom.MCSuggestion);
```

| 参数 | 类型                                                                                        | 描述                      |
| -- | ----------------------------------------------------------------------------------------- | ----------------------- |
| b  | [crafttbiner.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No description provided |


### equals #等于

返回类型：布尔值

```zenscript
myMCSuggestion.equals(o as Object);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |


### 扩展

返回类型： [craftbiner.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
myMCSuggestion.extension (命令字符串，范围为 craftbiner.api.commands.custom.MCStringRange);
```

| 参数    | 类型                                                                                            | 描述                      |
| ----- | --------------------------------------------------------------------------------------------- | ----------------------- |
| 命令    | 字符串[string]                                                                                   | No description provided |
| range | [craftminstrer.api.commands.custom.MCStringrange](/vanilla/api/commands/custom/MCStringRange) | No description provided |


### getRange

返回类型： [craftbiner.api.commands.custom.MCStringrange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestion.getRange();
```

### getText

返回类型：字符串

```zenscript
myMCSuggestion.getText();
```

### 获取工具提示

返回类型：字符串

```zenscript
myMCSuggestion.getTooltip();
```

### hashCode

返回类型：int

```zenscript
myMCSuggestion.hashCode();
```

### toString

返回类型：字符串

```zenscript
myMCSuggestion.toString();
```


## 运算符
### EQUALS

```zenscript
myMCSuggestion == o 为对象
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |

## 卡斯特尔

| 结果类型        | 是否隐藏 |
| ----------- | ---- |
| 字符串[string] | true |

