# IEntityAttributeInstance

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaker.entity.AttributeInstance；`

## ZenGetters

| ZenGetter | 获取方法                | 返回值类型                                                              |
| --------- | ------------------- | ------------------------------------------------------------------ |
| 属性        | getAttribute()      | [IEntityAttribute](/Vanilla/Entities/Attributes/IEntityAttribute/) |
| 基本值       | getBaseValue()      | 双精度                                                                |
| 修饰符       | getModifiers()      | `列表<IEntityAttrubuteModifier>`                               |
| 属性值       | getAttributeValue() | 双精度                                                                |

## ZenSetter

| ZenSetter | 彩色方法            | 参数类型 |
| --------- | --------------- | ---- |
| 基本值       | setBaseValue(值) | 双精度  |

## 修改方法

- `列表<IEntityAttrubuteModifier>` getModifiersByOperation(int operation)
- boolean hasModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier)
- [IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) getModifier(String uuid);
- 无效的 ApplyModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- 无效去除修饰符(String uuid)；
- 无效清除所有修改器();