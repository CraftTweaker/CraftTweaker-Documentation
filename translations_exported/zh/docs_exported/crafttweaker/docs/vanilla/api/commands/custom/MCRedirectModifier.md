# MC重定向修改器

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCRedirectModifier;
```


## Constructor #构造函数

No Description Provided
```zenscript
new MCRedirectModifier(fun as Function<MCCommandContext,Collection<MCCommandSource>>) as MCRedirectModifier
```

| 参数  | 类型                                                                                                                                                                                          | 描述                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 有趣的 | Function&lt;[MCCommandContext](/vanilla/api/commands/custom/MCCommandContext),Collection&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;&gt; | No Description Provided |



## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

### 应用

Return Type: Collection&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCRedirectModifier.apply(context as MCCommandContext) as Collection<MCCommandSource>
```

| 参数   | 类型                                                                | 描述                      |
| ---- | ----------------------------------------------------------------- | ----------------------- |
| 上下文： | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |


### equals #等于

Return Type: boolean

```zenscript
MCRedirectModifier.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


### hashCode

Return Type: int

```zenscript
MCRedirectModifier.hashCode() as int
myMCRedirectModifier.hashCode();
```

### toString

Return Type: string

```zenscript
MCRedirectModifier.toString() as string
myMCRedirectModifier.toString();
```


## 运算符

### EQUALS

```zenscript
myMCRedctModifier == o 为对象
```




