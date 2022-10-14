# 资源位置

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.resource.ResourceLocation;
```


## 已实现的接口
ResourceLocation implements the following interfaces. That means all methods defined in these interfaces are also available in ResourceLocation

- Comparable&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

## Constructor #构造函数


```zenscript
new ResourceLocation(namespace as string, path as string) as ResourceLocation
```
| 参数   | 类型     | 描述                                                                   |
| ---- | ------ | -------------------------------------------------------------------- |
| 命名空间 | string | Usually a ModId                                                      |
| path | string | May only contain lower-cased alphanumeric values, as well as / and _ |



## Casters

| 结果类型                                 | 是否隐藏 |
| ------------------------------------ | ---- |
| [IData #数据](/vanilla/api/data/IData) | true |
| string                               | true |

## 使用方式

:::group{name=asData}

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ResourceLocation.asData() as IData

myResourceLocation.asData();
```

:::

:::group{name=compareTo}

Return Type: int

```zenscript
ResourceLocation.compareTo(other as ResourceLocation) as int
```

| 参数    | 类型                                             | 描述                      |
| ----- | ---------------------------------------------- | ----------------------- |
| other | [资源位置](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
ResourceLocation.equals(other as Object) as boolean
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| other | Object | No Description Provided |


:::

:::group{name=getNamespace}

Return Type: string

```zenscript
// ResourceLocation.getNamespace() as string

myResourceLocation.getNamespace();
```

:::

:::group{name=getPath}

Return Type: string

```zenscript
// ResourceLocation.getPath() as string

myResourceLocation.getPath();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
// ResourceLocation.hashCode() as int

myResourceLocation.hashCode();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
// ResourceLocation.toString() as string

myResourceLocation.toString();
```

:::


## 参数

| 名称                   | 类型     | 可获得  | 可设置   | 描述                      |
| -------------------- | ------ | ---- | ----- | ----------------------- |
| commandString #命令字符串 | string | true | false | No Description Provided |
| 命名空间                 | string | true | false | No Description Provided |
| path                 | string | true | false | No Description Provided |

