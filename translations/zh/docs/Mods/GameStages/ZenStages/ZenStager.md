# ZenStager

此类是创建新的 [阶段](/Mods/GameStages/ZenStages/Stage/)的主要处理程序 然后你就可以构建来告诉游戏开始挂载你所做的事情。 它是预先加载的方法，以便能够通过使用 [GameStages API 轻松地与其他模组整合](https://minecraft.curseforge.com/projects/game-stages) 以及一些自定义的调整使modpack 制造者的生活更加容易。

您可以在这里找到 [类的更多信息和最新来源](https://github.com/DarkPacks/ZenStages/blob/master/src/main/java/uk/artdude/zenstages/stager/ZenStager.java)。

## 导入相关包

ZenStager : `import mods.zenstages.ZenStager;`

阶段 *(也建议导入)* : `导入mods.zenstages.Stage;`

## 方法

### 创建阶段

创建并返回新的 [阶段](/Mods/GameStages/ZenStages/Stage/)

```zenscript
// mods.zenstages.ZenStager.initStage(string stagegeName);
var TestStage = ZenStager.initStage("test");
```

当您创建了阶段后，您应该创建一个静态/全局文件，其中包含以下内容，然后您可以在其他脚本/类上访问阶段。

**注意：请不要在同一脚本中创建 `initStage` 和 `静态` 由于限制和其他问题，每次您引用静态成员时， `initStage` 将被调用。 所以将内置和静态创建分开。**

```zenscript
导入 mods.zenstages.ZenStager;

静态TestStage = ZenStager.getStage("test"); // 名称是您刚刚创建的名称。
```

### 助手方法

获取 [阶段](/Mods/GameStages/ZenStages/Stage/) *(如果找不到则返回 null )*

```zenscript
// mods.zenstages.ZenStager.getStage(string stageName);
var TestStagegeget = ZenStager.getStage("test");
```

获取创建的 [阶段](/Mods/GameStages/ZenStages/Stage/) 映射。

```zenscript
// mods.zenstages.ZenStager.getStagemap();
var StageMap as Stage[string] = ZenStager.getStageMap();
```

获取一张分级液体的地图。

```zenscript
// mods.zenstages.ZenStager.gegedLiquids();
var LiquidMap as ILiquidStack[string] = ZenStager.gegedLiquids();
```

### 待发布方法

添加软件包名称。 这需要安装 [累积阶段](/Mods/GameStages/RecipeStages/RecipeStages/)。 这与 [在这里](/Mods/GameStages/RecipeStages/RecipeStages/) 相同的逻辑。

```zenscript
// mods.zenstages.ZenStager.addPackage(string packageName , Stage[stages]stages);
ZenStager.addPackage("appeng", [TestStage]);
```

添加软件包名称。 这需要安装 [累积阶段](/Mods/GameStages/RecipeStages/RecipeStages/)。 这与 [在这里](/Mods/GameStages/RecipeStages/RecipeStages/) 相同的逻辑。

```zenscript
// mods.zenstages.ZenStager.addContainer(string packageName，Stage[stages]stages);
ZenStager.addContainer("my.awesome.container", [TestStage]);
```

获取成分级，如果分阶段完成将返回 [阶段](/Mods/GameStages/ZenStages/Stage/) ，如果找不到，则为 null 。

```zenscript
// mods.zenstages.ZenStager.getIngredientStage(IIngredient 成分)；
var StickStage as Stage = ZenStager.getIngredientStage(<minecraft:stick>)；
```

获取液体堆栈，如果它被挂到，它将返回 [阶段](/Mods/GameStages/ZenStages/Stage/) ，如果找不到则为 null 。

```zenscript
// mods.zenstages.ZenStager.getLiquidStage(ILiquidStack 液体Stack)；
var StickStage为Stager.getLiquidStage(<liquid:water>)；
```

获取配方名称阶段，如果分阶段完成将返回 [阶段](/Mods/GameStages/ZenStages/Stage/) ，如果找不到则为 null 。 需要 [累积阶段](/Mods/GameStages/RecipeStages/RecipeStages/) 安装。

```zenscript
// mods.zenstages.ZenStager.getRecipeNameStage(字符串累计名称);
var RecipeNameStage as Stage = ZenStager.getRecipeNameStage("minecraft:boat");
```

获取容器级，如果它被分阶段将返回 [阶段](/Mods/GameStages/ZenStages/Stage/) ，如果找不到则为 null 需要 [累积阶段](/Mods/GameStages/RecipeStages/RecipeStages/) 安装。

```zenscript
// mods.zenstages.ZenStager.getContainerStages(字符串容器名称)；
var ContainerStage as Stage = ZenStager.getContainerStages("my.awesome.container");
```

如果安装完毕它将返回 [阶段](/Mods/GameStages/ZenStages/Stage/) ，如果找不到则返回 null 需要 [累积阶段](/Mods/GameStages/RecipeStages/RecipeStages/) 安装。

```zenscript
// mods.zenstages.ZenStager.getPackageStages(string packageName);
var PackageStage as stage = ZenStager.getPackageStages("appeng");
```

如果未找到则获取维度阶段，将返回 [阶段](/Mods/GameStages/ZenStages/Stage/) 或null 需要安装 [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/)。

```zenscript
// mods.zenstages.ZenStager.getDimensionStage(int dimId);
var DimStage as stage = ZenStager.getDimensionStage(-1);
```

如果未找到它，将返回 [阶段](/Mods/GameStages/ZenStages/Stage/) 或null 。 需要安装 [MobStages](/Mods/GameStages/MobStages/MobStages/)。

```zenscript
// mods.zenstages.ZenStager.getMobStage(string mobName);
var MobStage as stage = ZenStager.getMobStage("minecraft:skeleton");
```

获取TiC Material stance，如果分阶段进行，它将返回 [stage](/Mods/GameStages/ZenStages/Stage/) ，如果找不到则为 null 。 需要安装 [TinkerStage](/Mods/GameStages/TinkerStages/TinkerStages/)。

```zenscript
// mods.zenstages.ZenStager.getTiCMaterialStage(字符串材料)；
var MobStage as stage = ZenStager.getTiCMaterialStage("bronze");
```

### 检查是否有待发布的内容

支持的类型：

- 容器
- 尺寸
- 成分：
- 生物组
- mod
- mulitblock
- 矿石
- 包
- 配方名称
- tinker

```zenscript
// mods.zenstages.ZenStager.isStaged(字符串类型，字符串值)；
// mods.zenstages.ZenStager.isStaged(字符串类型，int value)；
// mods.zensages.ZenStager.isStaged(字符串类型，IIngreendient value)；
ZenStaged("component"， <minecraft:stick>);
ZenStager.isStaged("container"，"my"。 Wesome.container")；
ZenStager.isStaged("mob", "minecraft:skeleton")；
ZenStager.isStaged("tinker", "bronze")；
ZenStager.isStaged("tinker", "tstruct:crobow")；
ZenStaged("tinker", "minecraft:boat")；
ZenStager.isStaged("dimension", -1)；
```

### 调试

调用此方法将使模组检查您已创建的 [阶段](/Mods/GameStages/ZenStages/Stage/)。 看看你是否错误了 *不止一次搭配了* 个东西。 如果发现有任何东西，他们将被记录到 `craftminstrer.log` 文件。 告诉你什么是重复的分阶段和它处于什么阶段。 这是一种理想的方法/工具，可以在发布更新到modpack之前使用，或者只是普遍开发modpack之前使用。

```zenscript
// mods.zenstages.ZenStager.checkConflicts();
ZenStager.checkConflicts();
```

### 构建阶段

在您完成添加条目到阶段后调用 **个重要的** 个。 这就要求所有模组都实际上进入这段条目。 不运行此方法将不会导致任何问题被分期处理！

```zenscript
// mods.zenstager.ZenStager.buildAll();
ZenStager.buildAll();
```