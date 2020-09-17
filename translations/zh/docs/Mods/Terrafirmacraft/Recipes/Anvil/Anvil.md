# 铁道体

## 所属包名
```zenscript
导入 mods.terrafirmacraft。铁道；
```

## 添加配方

```zenscript
Anvil.addRecipe(String registryName, IIngreendent input, IItemStack output, inter minTier, String SkillesType, String... forgeRules);
```
- 不能堆栈输入。 每个槽位只接受一个物品。
- 输入必须是可忘却的(请参阅 [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) 来注册一个物品的容量)。
- 层次为0=石头，1=铜，2=青铜，3=青铜，3=脊椎铁， 4 = 钢，5 = 黑钢，6 = 红/蓝钢。
- 技能类型是造型应贡献的技能类别。 有效的条目是 `常规`, `工具`, `武器`, `装甲`, 或 null。 如果技能类型是 `tools`, `武器`, 或 `盔甲` 然后结果项将会获得技能加分。
- 配方必须有 1, 2 或 3 条规则。 规则由类型 (`HIT`, `DRAW`, `PUNCH`, `BEND`, `UPSET`, 或 `SHRINK`), 随后的订单(`ANY`, `NOT_LAST`, `LAST`, `SECOND_LAST`, `THIRD_LAST`), 分隔为一个下划线。 例如， `HIT_ANY`, `DRAW_SECOND_LAST`, 和 `UPSET_NOT_LAST` 是有效的规则名称。

## 删除配方

```zenscript
Anvil.removeRecipe(StemStack 输出);
Anvil.removeRecipe(String registryname);
```