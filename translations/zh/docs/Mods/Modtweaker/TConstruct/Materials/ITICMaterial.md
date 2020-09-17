# ITICMaterial

Tinkers构造的镜像(不要与 [ContentTweaker的镜像](/Mods/ContentTweaker/Materials/Materials/Material/)混淆)是一个Tinker构造工具可以制造的。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 modweeper.tconstruct.ITICMaterial。`

## 正在获取此对象

您可以使用 [ITICMaterial Backet Handler](/Mods/Modtweaker/TConstruct/Brackets/Bracket_Material/) 检索ITICMaterial Objects :

```zenscript
val stone = <ticmat:stone>;
```

## 字段

您可以获取/设置以下字段：

| ZenGetter         | ZenSetter         | 返回/设置类型                                                                      | 描述                   |
| ----------------- | ----------------- | ---------------------------------------------------------------------------- | -------------------- |
| getName           |                   | 字符串                                                                          | 材料名称                 |
| definition        |                   | [IMaterial定义](/Mods/Modtweaker/TConstruct/Materials/ITICMaterialDefinition/) | 材料的定义                |
| 耐久头               | 耐久头               | 整数                                                                           | 由此材料制作的工具头具有这种耐久性    |
| miningSpeedHead   | miningSpeedHead   | 浮点数                                                                          | 此材料制作的工具头具有这种开采速度    |
| 攻击头               | 攻击头               | 浮点数                                                                          | 由这种材料制成的工具头具有这种攻击伤害  |
| harvestLevelHead  | harvestLevelHead  | 整数                                                                           | 此材料制作的工具头有这个收获水平     |
| 耐久处理器             | 耐久处理器             | 整数                                                                           | 此材料制作的工具句柄具有这种耐久性    |
| 修改手势              | 修改手势              | 浮点数                                                                          | 此材料制作的工具句柄具有此耐久性修饰符  |
| 耐久加成              | 耐久加成              | 整数                                                                           | 此材料制造的额外工具部件具有此基础耐久性 |
| 箭头修改器             | 箭头修改器             | 浮点数                                                                          | 此材料制成的箭头具有此耐久性修饰符    |
| 箭头Bonusammo       | 箭头Bonusammo       | 整数                                                                           | 从这个材料制成的箭有这个额外的弹药    |
| fletchingModifier | fletchingModifier | 浮点数                                                                          | 这种材料制作的真菌具有这种耐久性修饰符  |
| 逃跑精度              | 逃跑精度              | 浮点数                                                                          | 这种材料制作的真菌提供了这种精度     |

## 方法

- 布尔运算法 (ITICMaterial other); -> 返回给定材料等于 `其他`