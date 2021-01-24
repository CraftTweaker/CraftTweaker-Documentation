::requiredMod[Create]{buildIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Sand Paper Polishing

The Sand Paper Polishing mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## 方法

#### 添加配方

The following script will add a recipe that will output a Diamond when a piece of Glass is Polished.

```zenscript
// <recipetype:create:sandpaper_polishing>.addRecipe(String name, IItemStack output, IIngredient input)
<recipetype:create:sandpaper_polishing>.addRecipe("sand_paper_polishing_test", <item:minecraft:diamond>, <item:minecraft:glass>);
```

#### Remove Recipes

The follow script will remove all Sand Paper Polishing recipes that output Polished Rose Quartz.

```zenscript
// <recipetype:create:pressing>.removeRecipe(IItemStack output);
<recipetype:create:sandpaper_polishing>.removeRecipe(<item:create:polished_rose_quartz>);
```


