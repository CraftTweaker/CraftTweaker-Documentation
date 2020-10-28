# TextFormatting

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
文本格式
```

## 已实现的接口
TextFormatting implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 参数

| 名称            | 类型      | 可获得  | 可设置   |
| ------------- | ------- | ---- | ----- |
| colorIndex    | int     | true | false |
| commandString | String  | true | false |
| fancyStyling  | boolean | true | false |
| friendlyName  | String  | true | false |
| isColor       | boolean | true | false |

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| String | true |

