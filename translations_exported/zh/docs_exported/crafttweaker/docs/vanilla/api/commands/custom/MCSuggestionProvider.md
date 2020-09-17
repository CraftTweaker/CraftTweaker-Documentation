# MCSuggestionProvider

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttbiner.api.commands.custom.MCSuggestionProvider
```

## Constructor #构造函数
```zenscript
新 craftminstrer.api.commands.custom.MCSuggestionProvider(有趣的函数。BiFunction<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCSuggestionsBuilder, crafttweaker.api.commands.custom.MCSuggestions>);
```
| 参数  | 类型                                                                                                                                                                                                                                                                                                                                            | 描述                      |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 有趣的 | 函数.BiFunction&lt;[craftmilever.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [craftmilower.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder), [craftmilower.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | No description provided |



## 方法
### equals #等于

返回类型：布尔值

```zenscript
myMCSuggestionProvider.equals(o 为对象)；
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |


### 获取建议

返回类型： [craftbiner.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionProvider.getPropositions(context as craftweer.api.commands.custom.MCCommandContext, builder as craftweener.api.commands.custom.MCSuggestionsBuilder);
```

| 参数   | 类型                                                                                                         | 描述                      |
| ---- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| 上下文： | [craftminstrer.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)        | No description provided |
| 生成器  | [crafttweeper.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


### hashCode

返回类型：int

```zenscript
myMCSuggestionProvider.hashCode();
```

### toString

返回类型：字符串

```zenscript
myMCSuggestionProvider.toString();
```


## 运算符
### EQUALS

```zenscript
myMCSuggestionProvider == o 为对象
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |

## 卡斯特尔

| 结果类型        | 是否隐藏 |
| ----------- | ---- |
| 字符串[string] | true |

