# MCResourceLocation

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.MCResourceLocation;
```


## 已实现的接口
MCResourceLocation implements the following interfaces. That means all methods defined in these interfaces are also available in MCResourceLocation

- Comparable&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt;
## Constructor #构造函数


```zenscript
new MCResourceLocation(namespace as string, path as string) as MCResourceLocation
```
| 参数   | 类型     | 描述                                                                   |
| ---- | ------ | -------------------------------------------------------------------- |
| 命名空间 | string | Usually a ModId                                                      |
| path | string | May only contain lower-cased alphanumeric values, as well as / and _ |


## Casters

| 结果类型                             | 是否隐藏 |
| -------------------------------- | ---- |
| [IData](/vanilla/api/data/IData) | true |
| string                           | true |

## 方法

### asData

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
MCResourceLocation.asData() as IData
myMCResourceLocation.asData();
```
### 比较到

Return Type: int

```zenscript
MCResourceLocation.compareTo(other as MCResourceLocation) as int
```
| 参数    | 类型                                                         | 描述                      |
| ----- | ---------------------------------------------------------- | ----------------------- |
| other | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |

### equals #等于

Return Type: boolean

```zenscript
MCResourceLocation.equals(other as Object) as boolean
```
| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| other | Object | No Description Provided |

### getNamespace

Return Type: string

```zenscript
MCResourceLocation.getNamespace() as string
myMCResourceLocation.getNamespace();
```
### getPath

Return Type: string

```zenscript
MCResourceLocation.getPath() as string
myMCResourceLocation.getPath();
```
### hashCode

Return Type: int

```zenscript
MCResourceLocation.hashCode() as int
myMCResourceLocation.hashCode();
```
### toString

Return Type: string

```zenscript
MCResourceLocation.toString() as string
myMCResourceLocation.toString();
```

## 参数

| 名称            | 类型     | 可获得  | 可设置   |
| ------------- | ------ | ---- | ----- |
| commandString | string | true | false |
| 命名空间          | string | true | false |
| path          | string | true | false |

