# IFluidStack

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## 已实现的接口
IFluidStack 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 方法
### copy #复制

复制堆栈。 只有当涉及可变堆栈时才需要。

 返回： `一个新的堆栈，包含与这个堆栈相同的信息`

返回类型： [craftbinstruer.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### 可变的

使这个堆栈变为可变的

 返回： `一个新的堆栈，是可变的。`

返回类型： [craftbinstruer.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### 设置金额

设置流体量单位为百万桶(MB)

 返回： `一个新的堆栈或这个堆栈，取决于这个堆栈是否可变`

返回类型： [craftbinstruer.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(含量)；
myIFluidStack.setAmount(1000)；
```

| 参数 | 类型 | 描述         |
| -- | -- | ---------- |
| 金额 | 整数 | 要乘积这个堆栈的金额 |



## 参数

| 名称                   | 类型                                                           | 可获得  | 可设置   |
| -------------------- | ------------------------------------------------------------ | ---- | ----- |
| commandString #命令字符串 | 字符串[string]                                                  | true | false |
| 流体                   | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid) | true | false |

## 运算符
### MUL

设置流体量单位为百万桶(MB)

 返回： `一个新的堆栈或这个堆栈，取决于这个堆栈是否可变`

```zenscript
myIFluidStack * 金额为 int
myIFluidStack * 1000
```

| 参数 | 类型 | 描述         |
| -- | -- | ---------- |
| 金额 | 整数 | 要乘积这个堆栈的金额 |

