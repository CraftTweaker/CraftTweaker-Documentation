# MCParseResults

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.commands.custom.MCParseResults
```

## 方法
### equals #等于

返回类型：布尔值

```zenscript
myMCParseResults.equals(o as Object);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |


### getContext

返回类型： [craftbiner.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCParseResults.getContext();
```

### 获取异常

返回类型：异常[[craftmilower.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCParseResults.getExceptions();
```

### 获取阅读器

返回类型： [craftbiner.api.commands.custom.MCImmutableStringer](/vanilla/api/commands/custom/MCImmutableStringReader)

```zenscript
myMCParseResults.getReader();
```

### hashCode

返回类型：int

```zenscript
myMCParseResults.hashCode();
```

### toString

返回类型：字符串

```zenscript
myMCParseResults.toString();
```


## 运算符
### EQUALS

```zenscript
myMCParseResults == o 为对象
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |

## 卡斯特尔

| 结果类型        | 是否隐藏 |
| ----------- | ---- |
| 字符串[string] | true |

