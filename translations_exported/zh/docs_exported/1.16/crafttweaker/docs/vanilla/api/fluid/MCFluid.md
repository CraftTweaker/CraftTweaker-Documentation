# MCFluid

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.MCFluid;
```


## 使用方式

:::group{name=makeStack}

Creates a new [IFluidStack](/vanilla/api/fluid/IFluidStack) with the given amount of fluid.

Returns: a new (immutable) [IFluidStack](/vanilla/api/fluid/IFluidStack)  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// MCFluid.makeStack(amount as int) as IFluidStack

myMCFluid.makeStack(1000);
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| amount | int | No Description Provided |


:::


## 参数

| 名称                   | 类型     | 可获得  | 可设置   | 描述                      |
| -------------------- | ------ | ---- | ----- | ----------------------- |
| commandString #命令字符串 | string | true | false | No Description Provided |

