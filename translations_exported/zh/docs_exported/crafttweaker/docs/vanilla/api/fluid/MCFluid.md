# MCFluid

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.fluid.MCFluid
```

## 已实现的接口
MCFluid 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 方法
### 堆栈体

使用给定的流量创建新的 [craftbiner.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)。

 返回： `新的 (不可变) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IfluidStack)`

返回类型： [craftbinstruer.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myMCFluid.makeStack(合计数量)；
myMCFluid.makeStack(1000)；
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| 金额 | 整数 | No description provided |



## 参数

| 名称                   | 类型          | 可获得  | 可设置   |
| -------------------- | ----------- | ---- | ----- |
| commandString #命令字符串 | 字符串[string] | true | false |

## 运算符
### MUL

使用给定的流量创建新的 [craftbiner.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)。

 返回： `新的 (不可变) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IfluidStack)`

```zenscript
myMCFluid * 金额为 int
myMCFluid * 1000
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| 金额 | 整数 | No description provided |

