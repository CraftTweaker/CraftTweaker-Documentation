# 矿物组合

## 导入相关包

如果遇到任何问题 (比如投射数组) ，可能需要导入包裹。 所以比抱歉，添加导入 `导入mods.immersiveengineering.MineralMix;`

## 失败的机会

您可以获得并设置矿物混合的失败概率使用该对象上的失败概率[ZenSetter/Getter]。

## 获取矿石

| 必填 | 类型 | 数据类型 |
| -- | -- | ---- |
| 必要 | 名称 | 字符串  |

```zenscript
//例如:
Excavator.getMineral(String name);

var Iron = Excavator.getMineral(“IRon_Ore”);
```

## 添加矿石

| 必填 | 类型  | 数据类型 |
| -- | --- | ---- |
| 必填 | 矿石  | 字符串  |
| 必填 | 可能的 | 字符串  |

```zenscript
mineralMixObject.addOre("oreIron", 0.5)；
```

您将需要使用oredict名称。

## 删除矿石

| 必填 | 返回值类型 | 数据类型 |
| -- | ----- | ---- |
| 必填 | 矿石    | 字符串  |

```zenscript
a. mineralMixObject.removeOre("oreIron")；
```

## 失败的几率Getter/setter

### 例子

```zenscript
//Getter
mineralMixObject.failchance;

//Setter
mineralMixObject.failchance = 0.5;
```

## 完整示例

```zenscript
//示例：
导入 mods.immersiveengineering.Excavator;
immersiveengineering.MineralMix;

/Get The Mineral Mix
mods.immersiveengineering. xcavator.addMineral(“IRon_Ore”、50,0.005、["oreIRon"、"oreDiamond"]、[0.005、0.01]、[1、0-1])；

var Iron = Excavator.getMineral(“IRon_Ore”)；

IRon.addOre("oreIRon", 0). );

//打印 Initial Fail Chance
print(Iron.failChance);

///set The Fail Chance to 25%
Iron. ailChance = 0.25;

/打印出故障概率
打印(伊伦)。 Iron.failChance);

///set The Fail Chance to 50%
Iron.failChance = 0.5;

/print/print Finail Chance
print(Iron.failChance);
```