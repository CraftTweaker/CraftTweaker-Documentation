# 项目注册表

## 所属包名
```zenscript
// 将项目注册表方法导入到您的脚本
导入mods.terrafirmacraft。物品登记处；
```

## 注册项目大小
- 注册项目大小和重量。 这会改变一个堆栈的容量。
- 缩放[TINY, VERY_SMALL, SMALL, NORMAL, LARGE, VERY_LARGE, HUGE]
- 权重 [VERY_LIGHT, LIGHT, MEDIUM, HEAVY, VERY_HEAVY]
```zenscript
ItemRegistry.registerItemSize(I成分输入，字符串大小，字符串重量)；
```

## 注册物品热量
- 注册物品的热能，且如果该物品是可锻造的(例如：可以在室内使用)。
- 热能决定物品冷却/加热的速度。 被烧铁为0.35。
- 熔化温度为熔化物件的温度。 干燥铁是1535美丽的白色，而青铜是950橙色。 完整的参考，请检查 [加热温度](/Mods/Terrafirmacraft/HeatingTemperatures)
```zenscript
ItemRegistry.registerItemHeat(Ingredient input, float heatCapacity, float meltTemp, bool forgeable);
```

## 注册元件
- 将物品登记为金属物品。 请注意，这会自动增加加热和伪造能力。 如果canMelt 是假的，该物品将不会直接承担输出(例如铁矿需要大量/高炉)
- 注册的金属导体项目不是自动注册为有效的工具输入(e.g: 来自注册的其他模组的钢材。金属元件方法对TFC钢铁选择轴头来说不会自动可行)
```zenscript
ItemRegistry.registerItemMetal(Ingredient input, String metal, int unity, bool canMelt);
```

## 注册Ê³ÎïÏûºÄÊ³Îï²úÁ¿µÄÊ³Îï²úÁ¿£¬²úÁ¿É»ñµÃÊ³Îï²úÁ¿£¬ÇëµÄÊ±µÄÊ±µÄÊ±µÄÊ³Îï²úÁ¿£¬²ú²úÁ¿£¡
- 注册物品的食物统计(不适用于过渡食品)，优先于现有的价值。 设置衰变为0停止衰变。
```zenscript
ItemRegistry.registerFood(IIngredient input, int funger, float saturation, float decay, float grain, float veg, float float, float meat, float may);
```

## 注册装甲
- 注册装甲状态
```zenscript
ItemRegistry.registerArmor(Ingredient input, float crushingModifier, float 穿透Modifier, float slashingModifier);
```

## 注册燃料
- 注册物品作为火坑、熔炉或血流的燃料
```zenscript
ItemRegistry.registerFuel(IItemStack 项目Stack, int burning Ticks, float temperature, bool forgeFuel, bool bloomeryFuel)；
```
