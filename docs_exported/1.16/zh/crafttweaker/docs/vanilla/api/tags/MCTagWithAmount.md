# MCTagWithAmount&LT;T : Object&GT;

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.MCTagWithAmount;
```


## 已实现的接口
MCTagWithAmount implements the following interfaces. That means all methods defined in these interfaces are also available in MCTagWithAmount

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)

## 方法

### getAmount

Return Type: int

```zenscript
MCTagWithAmount.getAmount() as int
myMCTagWithAmount.getAmount();
```

### 获取标签

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
MCTagWithAmount.getTag() as MCTag<T>
myMCTagWithAmount.getTag();
```

### setAmount

Return Type: [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt;

```zenscript
MCTagWithAmount.setAmount(amount as int) as MCTagWithAmount<T>
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| amount | int | No Description Provided |



## 参数

| 名称     | 类型                                                    | 可获得  | 可设置   |
| ------ | ----------------------------------------------------- | ---- | ----- |
| amount | int                                                   | true | true  |
| tag    | [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; | true | false |

