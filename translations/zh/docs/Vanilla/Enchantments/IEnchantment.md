# IEnchantage

IEnchante 基本上是一个 [IEnchantment定义](/Vanilla/Enchantments/IEnchantmentDefinition/) 和附属级别。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaper.enchantments.IEnchanting.`

## ZenGetters/ZenSetters

| ZenGetter  | ZenSetter | 类型                                                              |
| ---------- | --------- | --------------------------------------------------------------- |
| definition |           | [IEnchantment定义](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| 关卡         |           | int                                                             |
| 显示名称       | 显示名称      | 字符串                                                             |

## ZenMethods

### 以NBT形式检索附魔方

您可能想要获取附魔公司的 NBT-标签。  
您可以用 [IData](/Vanilla/Data/IData/) 或使用方法进行投射：

```zenscript
ench.makeTag();
以 crafttweeper.data.IData;
```