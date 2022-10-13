# 奥术世界（Arcane World）

奥术世界是一个魔法向 mod，允许通过添加材料释放奥术，以此触发各种游戏机制。

## 导入
```zenscript
import mods.ArcaneWorld;
```

## 使用方式
```zenscript
// 创建召唤奥术
ArcaneWorld.createRitualSummon(string name, string displayName, string entityID, IIngredient... inputs);

// 创建龙息奥术
ArcaneWorld.createRitualDragonBreath(String name, String displayName, IIngredient... inputs);

// 创建传送玩家至 Arcane World dungeon 维度并生成实体的奥术
ArcaneWorld.createArenaRitual(String name, String displayName, String entityID, IIngredient... inputs);

// 创建天气奥术 - 天气类别可以为 "clear"、"rain" 或 "thunder"
ArcaneWorld.createRitualWeather(String name, String displayName, String weatherType, IIngredient... inputs);

// 创建时间奥术 - 时间更改量可以为负数以使时间倒流
ArcaneWorld.createRitualTime(String name, String displayName, int timeChange, IIngredient... inputs);

// 创建物品输出奥术，类似于合成配方
ArcaneWorld.createRitualCreateItem(String name, String displayName, IItemStack result, IIngredient... inputs);

// 创建传送玩家至 Arcane World dungeon 维度的奥术
ArcaneWorld.createRitualDungeon(String name, String displayName, IIngredient... inputs);

// 创建命令奥术
ArcaneWorld.createRitualCommand(String name, String displayName, String[] commands, IIngredient... inputs);

// 通过注册名称移除奥术
// 由 CarftTweaker 添加的奥术注册名为“crafttweaker:<name>”
ArcaneWorld.remove(String registryName);

// 移除所有奥术
ArcaneWorld.removeAll();
```
