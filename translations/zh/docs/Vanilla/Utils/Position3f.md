# 位置 3f

Minecraft中的位置包含三个值：x、y和z。  
一个位置3f 对象存储了一个使用这三个值的位置。

## 导入相关包

如果遇到任何问题，您可能需要 [导入](/AdvancedFunctions/Import/) 软件包(例如铸造 [数组](/AdvancedFunctions/Arrays_and_Loops/))， 这样比抱歉更安全并添加导入。  
`导入craftweaper.util.position3f;`

## 正在获取位置3f 对象

您可以使用以下方式获得这样一个对象：

- `位置` ZenGetter 在 [IPlayer](/Vanilla/Players/IPlayer/) 对象
- 下方位置3f 构造函数
- [IBlockPos](/Vanilla/World/IBlockPos/) 位置3f caster。

## 位置3f 构造函数

您可以使用以下方法创建您自己的位置3f对象：

```zenscript
craftbinefer.util.Position3f.create(float x, float y, float z);
```

第一个方法允许您在给定坐标处创建一个位置。

## ZenGetters 和 ZenSettters

| ZenGetter | ZenSetter | 描述        |
| --------- | --------- | --------- |
| x         | x         | 返回位置的x值   |
| 年         | 年         | 返回位置的 y 值 |
| z         | z         | 返回位置的 z 值 |

## 以 IBlockPos 投射中

You can use the two ways below to cast a Position3f Object to an [IBlockPos](/Vanilla/World/IBlockPos/) Object: Remember, for casting you need to [import](/AdvancedFunctions/Import/) the type you want to cast to unless you use the full name.

```zenscript
posThree.asBlockPos();
posthree as IBlockPos;
```