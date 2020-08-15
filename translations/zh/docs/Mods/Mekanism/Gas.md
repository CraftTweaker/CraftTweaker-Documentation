# 梅卡尼什语

Mekanism CraftTinventer 支持已经直接并入Mekanism ([link](https://github.com/aidancbrady/Mekanism/tree/master/src/main/java/mekanism/common/integration/crafttweaker))

Mekanism 添加了方括号处理器支持来定义 **气体** - 特殊的材料状态不同于锻造 [**液体**](/Vanilla/Liquids/ILiquidStack/)

```zenscript
<gas:oxygen>
<gas:water> *
```

*注意到 `<gas:water>` 不同于 `<liquid:water>`*

到Mekanism 9.7.0 现在可以通过命令 `/ct气体查看所有注册气体(包括来自其他模式的气体)`

从Mekanis9.7.1的情况来看，也可以用字符串获得一个气体堆栈/括号处理器。 使用 `mods.mekanism.MekanismHelper.getGas(string);`

## 例子

```zenscript
导入mod.mekanism.gas.IGasStack;

var oxygen = <gas:oxygen>.withAmount(500) as IGasStack;
var oxygen2 = <gas:oxygen> * 500;
```

## ZenGetters

像LiquidStacks一样，IGasStacks也支持一些特殊的 ZenGetters。  
你使用 `gas.Getter` (例如。 `<gas:water>.name`)

| ZenGetter  | 说明           | 返回值类型  |
| ---------- | ------------ | ------ |
| definition | 返回气体定义       | IGas定义 |
| 名称         | 返回气体名称       | string |
| 显示名称       | 返回气体显示名称     | 字符串    |
| 金额         | 返回以毫巴克计的气体数量 | 整数     |

## 设置对象的金额

您可以用两种方式设置对象的数量 (Millibuckets中的音量)，这两种方式都做到完全相同：

```zenscript
var gas_amount_mult = <gas:water> * 500;
var gas_amount_zenMethod= <gas:water>.withamount(500)；
```

## IGas定义

IGasDefine 对象包含关于气体的信息。  
您可以使用 `gasStack.definition` 获取此对象(请选中上面的表格)

| ZenGetter | 说明           | 返回值类型 |
| --------- | ------------ | ----- |
| 名称        | 返回所引用的气体名称   | 字符串   |
| 显示名称      | 返回所引用的气体显示名称 | 字符串   |

您可以乘积一个气体定义返回一个新的 IGasStack 与给定数量的毫巴克：

```zenscript
var gas_definition = <gas:water>.defination;
var gas_bucket = gas_definition * 1000;
```