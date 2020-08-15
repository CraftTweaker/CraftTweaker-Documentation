# Vanilla 工厂公司

Vanilla 工厂允许您创建 [块](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) [然后您可以添加到游戏中的项目](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) 和 [创意标签](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)

## 导入包

您可以在 `mods.contenttweiner.Vanilla工厂` 找到这个软件包

## 创建内容

### 创建块

```zenscript
mods.contenttweeper.VanillaFactory.createBlock(String unlocalizedName, IMaterialDefinition material);
```

参数：

- 字符串解锁名称：块的未本地化名称。
- [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) material：块形成的基础材料。

返回 [BlockRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) 对象。 检查 [块页面](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) 获取更多信息和示例脚本！

### 创建项目

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

参数：

- 字符串解锁名称：项目未本地化名称。

返回 [ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) 对象。 查看 [条目页面](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) 获取更多信息和示例脚本！

### 创建创意标签

```zenscript
mods.contenttweeper.VanillaFactory.createCreatativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweiner.VanillaFactory.createCreatativeTab(String unlocalizedName, ItemRepresentative iItem);
mods.contenttweepender.VanillaFactory.createCreatativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contentbuiler.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackSupplier supplier);
```

参数：

- 字符串解锁名称：标签未本地化的名称。
- 项目或方块表示：项目/方块将显示为标签的符号。 或者，您可以使用 [IItemStackSupplier 函数](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/)。

返回 [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) 对象。 查看 [Creative Tab 页面](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) 了解更多信息和示例脚本！

### 创建流体

```zenscript
mods.contenttweeper.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweeper.VanillaFactory.createFluid(String unlocalizedName, CTColor 颜色);
```

参数：

- 字符串解锁名称：流体未本地化名称。
- 整数型变量颜色：流量的颜色代码。
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) 颜色：流体的颜色为颜色对象。

返回 [FluidRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/) 对象。 检查 [流体页面](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/) 获取更多信息和示例脚本。

### 创建食物项

```zenscript
mods.contenttweeper.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

参数：

- 字符串解锁名称：项目未本地化名称。
- 整数治疗量：食物值

返回 [个物品代表](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) 个对象。 查看 [食品页面](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) 获取更多信息和示例脚本。