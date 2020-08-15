# 冶金感染用户

到Mekanism 9.7.0 现在可以通过命令 `/ct mekmatteres mallurgicInfuser` 查看所有配方字符串。

## 注入类型字符串

添加和删除配方都需要一个“注入型”字符串。 Mekanis的默认例子是：

| 信息类型       | 添加者   |
| ---------- | ----- |
| "CARBON"   | 梅卡尼什语 |
| "TIN"      | 梅卡尼什语 |
| “DIAMOND”  | 梅卡尼什语 |
| “REDSTONE” | 梅卡尼什语 |
| “FUNGI”    | 梅卡尼什语 |
| “BIO”      | 梅卡尼什语 |
| "OBSIDIAN" | 梅卡尼什语 |

如果任何其他模组注册一个新的注入类型， 这种类型可以在 CraftTinventer 中使用，只要注册类型的名称被准确指定。 NOTE: It is *not* possible to define **new** infusion *types* with CraftTweaker

到Mekanism 9.7.0 现在可以通过命令 `/ct infuseTypes查看所有已注册的注入(包括来自其他模式的注入`

## 添加配方

```zenscript
mods.mekanism.infuser.addRecipe(String infusionType, int infusionConsumed, IIngredient inputStack, IItemStack outputStack);

mods.mekanism.infuser.addRecipe("OBSIDIAN", 20, <minecraft:coal_block>, <minecraft:obsidian>);
mods.mekanism.infuser.addRecipe("DIAMOND", 80, <minecraft:glowstone>, <minecraft:nether_star>);
```

由于Mekanism 9.7.0，可以使用IIngredients 作为输入堆栈，而不仅仅是IItemStack。

注意：目前所有这一切都是在java的不同可能性上循环的，而不是在ZenScript中添加。 目前，机器本身没有用于支持复合成份或修复术。

## 删除配方

```zenscript
mods.mekanism.infuser.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional String infusionType);

mods.mekanis.infuser.removeRecipe(<mekanism:enrichedalloy>, <minecraft:iron_ingot>, "REDSTONE");
mods.mekanis.infuser.removeRecipe(<minecraft:mycelium>);
```

指定输入参数只会删除使用所述输入的特定配方。 忽略输入参数将删除所有生成指定输出的配方。

## 删除所有配方

到Mekanism 9.7.0，现在可以移除所有冶金感染者配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.infuser.removeAllRecipes();
```