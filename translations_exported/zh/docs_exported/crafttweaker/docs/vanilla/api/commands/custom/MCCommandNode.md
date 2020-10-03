# MCCommand节点

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.commands.custom.MCCommandNode
```

## 方法
### equals #等于

Return type: boolean

```zenscript
myMCCommandNode.equals(o as Object);
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |


### hashCode

Return type: int

```zenscript
myMCCommandNode.hashCode();
```

### toString

Return type: String

```zenscript
myMCCommandNode.toString();
```


## 运算符
### EQUALS

```zenscript
myMCCommandNode == o 为对象
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| String | true |

