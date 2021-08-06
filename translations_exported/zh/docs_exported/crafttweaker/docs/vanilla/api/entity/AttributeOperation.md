# AttributeOperation

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.AttributeOperation;
```


## Extending Enum&lt;AttributeOperation&gt;

AttributeOperation extends Enum&lt;[AttributeOperation](/vanilla/api/entity/AttributeOperation)&gt;. That means all methods available in Enum&lt;[AttributeOperation](/vanilla/api/entity/AttributeOperation)&gt; are also available in AttributeOperation

## Static Properties

| 名称             | 类型                                                           | 可获得  | 可设置   | 描述                      |
| -------------- | ------------------------------------------------------------ | ---- | ----- | ----------------------- |
| ADDITION       | [AttributeOperation](/vanilla/api/entity/AttributeOperation) | true | false | No Description Provided |
| MULTIPLY_BASE  | [AttributeOperation](/vanilla/api/entity/AttributeOperation) | true | false | No Description Provided |
| MULTIPLY_TOTAL | [AttributeOperation](/vanilla/api/entity/AttributeOperation) | true | false | No Description Provided |

## 方法

:::group{name=getId}

Gets the ID of this operation.

Returns: The ID of this operation.  
Return Type: int

```zenscript
// AttributeOperation.getId() as int

myAttributeOperation.getId();
```

:::


## 参数

| 名称 | 类型  | 可获得  | 可设置   | 描述                             |
| -- | --- | ---- | ----- | ------------------------------ |
| id | int | true | false | Gets the ID of this operation. |

