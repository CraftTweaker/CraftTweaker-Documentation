# 生物阶段

这个模组是 [GameStages API](https://minecraft.curseforge.com/projects/game-stages) 的附加值。 生物阶段允许将生物产卵配置为自定义进化系统。 关于模组如何工作的更多信息，请查看模组页面 [](https://minecraft.curseforge.com/projects/mob-stages)

## 全局选项

为生物创建一个新的手势条目。 每个生物只能有一个全局条目。

```zenscript
// mods.MobStages.addStage(String stage, String entityId);
mods.MobStages.addStage("one", "minecraft:zombie");
```

添加一个替补生物。 如果生物由于附近没有有效的玩家而无法生成，替代生物将会在它的地方生成。

```zenscript
// mods.MobStages.addReplacement(String entityId, String replementId);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:slime");
```

设置搜索有效玩家的范围。 默认范围是 512 个块，所以这是可选的。

```zenscript
// mods.MobStages.addRange(String entityId, int range);
mods.MobStages.addRange("minecraft:zombie", 32);
```

允许生成器覆盖舞台检查。 默认值为 false。 如果设置为 true，即使没有有效的玩家，也会为这个暴民工作。

```zenscript
// mods.MobStages.ggleSpawner(String entityId, boolan allow);
mods.MobStages.toggleSpawner("minecraft:zombie", true);

// mods.MobStages.ggleSpawner(String entityId, boolian allow, dimension);
mods.MobStages.ggleSpawner("minecraft:zombie", true); 

 // mods.MobStages.toggleSpawner("minecraft:zombie", true); 

 // mods.MobStages.ggleSpawner(String entityId, boolan allow, dimension); 
 mods.MobSt
```

## 尺寸特定选项

尺寸的具体选项与全局选项几乎相同。 然而，他们有另一个参数添加到结尾处，即整数尺寸 id。 维度特定条目将覆盖该维度中的全局条目。 每个生物，每个维度只能有一个条目。

## 示例脚本

```zenscript
// 爬行者需要第一阶段才能生成
mods.MobStages.addStage("one", "minecraft:creeper");

// Skeletons 需要第二阶段或任何产卵。
mods.MobStages.addStage("2", "minecraft:skeleton");
mods.MobStages.toggleSpawner("minecraft:skeleton", true);

// Spiders required stage stage in nether.
mods.MobStages.addStage("the", "minecraft:spider", -1);

// 僵尸需要在下面的第4级，如果它们不能，则由bat代替。
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.togglepawner("minecraft:zombie", true-1);
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:bat", -1);
```