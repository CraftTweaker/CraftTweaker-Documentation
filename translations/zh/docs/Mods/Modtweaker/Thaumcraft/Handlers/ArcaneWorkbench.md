# 奥术工作台

此软件包允许您将配方添加到或从奥术师工作台中移除。

## 导入相关包

您可以 [导入](/AdvancedFunctions/Import/) 个软件包及其方法来方便检索这些方法。

```zenscript
导入 mods.thaumcraft.ArcaneWorkbey;
```

## 添加配方

```zenscript
//mods.thaumcraft.ArcaneWorkbound.registerShapedRecipe(名称, String research, int vis, CTapertStack[……]aspectList, IItemStack output, IIngredient[] input);
mods. 奥氏体工作台 egisterShapedRecipe("test", "", 20, [<aspect:aer>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [[<minecraft:dirt>], [<minecraft:stick>], [<minecraft:grass>]);


/mods。 Haumcraft.ArcaneWorkbook.registerShapelessRecipe(名称, String research, int vis, CTAPotStack[……]aspectList, IItemStack output, IIngredient[……]输入)；
mods. haumcraft.ArcaneWorkbey.registerShapelessRecipe("tests", "", 20, [<aspect:aqua>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [<minecraft:sand>, <minecraft:stick>, <minecraft:grass>]);
```

## 删除配方

```zenscript
//mods.thaumcraft.ArcaneWorkbind.removeRecipe(String name);
mods.thaumcraft.ArcaneWorkfind.removeRecipe("recipeName");


///mods.thaumcraft.ArcaneWorkbind.removeRecipe(IItemStack output);
mods.thaumcraft.ArcaneWorkfac.removeRecipe(<thaumcraft:goggles>);
```