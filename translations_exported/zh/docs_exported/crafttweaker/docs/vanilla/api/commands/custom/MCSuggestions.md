# MCSuggestions

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftbiner.api.commands.custom.MCSuggestions
```

## 方法
### 创建

返回类型： [craftbiner.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttbiner.api.commands.custom.MCSuggestions.create(命令作为字符串，建议作为收藏集<crafttweaker.api.commands.custom.MCSuggestion>)；
```

| 参数      | 类型                                                                                                               | 描述                      |
| ------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------- |
| command | String                                                                                                           | No description provided |
| 建议      | 收藏&lt;[craftmiliter.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | No description provided |


### empty

返回类型： [craftbiner.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttbiner.api.commands.custom.MCSuggestions.empty();
```

### equals #等于

Return type: boolean

```zenscript
myMCSuggestions.equals(o as Object);
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |


### getList

Return type: List&lt;[crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt;

```zenscript
myMCSuggestions.getList();
```

### getRange

返回类型： [craftbiner.api.commands.custom.MCStringrange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestions.getRange();
```

### hashCode

Return type: int

```zenscript
myMCSuggestions.hashCode();
```

### isEmpty

Return type: boolean

```zenscript
myMCSuggestions.isEmpty();
```

### merge #合并

返回类型： [craftbiner.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttbiner.api.commands.custom.MCSuggestions.merge(命令字符串，输入为收藏<crafttweaker.api.commands.custom.MCSuggestions>)；
```

| 参数        | 类型                                                                                                                 | 描述                      |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | String                                                                                                             | No description provided |
| input（输入） | 收藏&lt;[craftmiliter.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | No description provided |


### toString

Return type: String

```zenscript
myMCSuggestions.toString();
```


## 运算符
### EQUALS

```zenscript
myMCSuggestions == o 为对象
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| String | true |

