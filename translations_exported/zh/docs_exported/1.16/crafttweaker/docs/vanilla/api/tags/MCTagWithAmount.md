# MCTagWithAmount&LT;T : Object&GT;

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.MCTagWithAmount;
```


## 已实现的接口
MCTagWithAmount implements the following interfaces. That means all methods defined in these interfaces are also available in MCTagWithAmount

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)

## 使用方式

:::group{name=getAmount}

Return Type: int

```zenscript
// MCTagWithAmount.getAmount() as int

myMCTagWithAmount.getAmount();
```

:::

:::group{name=getTag}

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
// MCTagWithAmount.getTag() as MCTag<T>

myMCTagWithAmount.getTag();
```

:::

:::group{name=setAmount}

Return Type: [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt;

```zenscript
MCTagWithAmount.setAmount(amount as int) as MCTagWithAmount<T>
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| amount | int | No Description Provided |


:::


## 参数

| 名称      | 类型                                                    | 可获得  | 可设置   | 描述                      |
| ------- | ----------------------------------------------------- | ---- | ----- | ----------------------- |
| amount  | int                                                   | true | true  | No Description Provided |
| tag #标签 | [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; | true | false | No Description Provided |

