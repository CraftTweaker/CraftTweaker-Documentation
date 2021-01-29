# MCSingleRirectModifier

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSingleRedirectModifier;
```


## Constructor #构造函数

No Description Provided
```zenscript
new MCSingleRedirectModifier(fun as Function<MCCommandContext,MCCommandSource>) as MCSingleRedirectModifier
```
| 参数  | 类型                                                                                                                                                            | 描述                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 有趣的 | Function&lt;[MCCommandContext](/vanilla/api/commands/custom/MCCommandContext),[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |


## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

### 应用

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCSingleRedirectModifier.apply(context as MCCommandContext) as MCCommandSource
```
| 参数   | 类型                                                                | 描述                      |
| ---- | ----------------------------------------------------------------- | ----------------------- |
| 上下文： | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |

### equals #等于

Return Type: boolean

```zenscript
MCSingleRedirectModifier.equals(o as Object) as boolean
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |

### hashCode

Return Type: int

```zenscript
MCSingleRedirectModifier.hashCode() as int
myMCSingleRedirectModifier.hashCode();
```
### toString

Return Type: string

```zenscript
MCSingleRedirectModifier.toString() as string
myMCSingleRedirectModifier.toString();
```

## 运算符

### EQUALS

```zenscript
myMCSingleRedirectModifier == o 为对象
```



