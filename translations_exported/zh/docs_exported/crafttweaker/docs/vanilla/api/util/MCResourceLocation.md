# MCResourceLocation

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.util.MCResourceLocation
```

## 已实现的接口
MCResourceLocation 实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructor #构造函数
```zenscript
新的 craftbiner.api.util.MCResourceLocation(命名空间作为字符串，路径作为字符串)；
```
| 参数   | 类型          | 描述                      |
| ---- | ----------- | ----------------------- |
| 命名空间 | 字符串[string] | No description provided |
| 路径   | 字符串[string] | No description provided |



## 方法
### 比较到

返回类型：int

```zenscript
myMCResourceLocation.compareTo(p_comparreeTo_1_ as craftminstrer.api.util.MCResourceLocation);
```

| 参数               | 类型                                                                                | 描述                      |
| ---------------- | --------------------------------------------------------------------------------- | ----------------------- |
| p_compareTo_1_ | [craftminstrer.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No description provided |


### equals #等于

返回类型：布尔值

```zenscript
myMCResourceLocation.equals(其他作为目标)；
```

| 参数    | 类型 | 描述                      |
| ----- | -- | ----------------------- |
| other | 对象 | No description provided |


### getNamespace

返回类型：字符串

```zenscript
myMCResourceLocation.getNamespace();
```

### getPath

返回类型：字符串

```zenscript
a. myMCResourceLocation.getPath()；
```

### hashCode

返回类型：int

```zenscript
myMCResourceLocation.hashCode();
```

### toString

返回类型：字符串

```zenscript
myMCResourceLocation.toString();
```


## 参数

| 名称                   | 类型          | 可获得  | 可设置   |
| -------------------- | ----------- | ---- | ----- |
| commandString #命令字符串 | 字符串[string] | true | false |
| 命名空间                 | 字符串[string] | true | false |
| 路径                   | 字符串[string] | true | false |

