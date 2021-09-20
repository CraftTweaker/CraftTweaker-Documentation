# Crafting 组件

CraftTweaker introduces [IIngredient](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java) as ingredient interface.  
Interfaces extending this super interface include:

- [IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)
- [ILiquidStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/liquid/ILiquidStack.java)
- [IOreDictEntry](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDictEntry.java)

## 选择哪一个

最好总是使用 IIngredient。 Why?  
Because a lot of users expect all recipes that accept an IItemStack to also accept an IOreDictEntry, that's why.  
Also, some functions like IngredientConditions return an IIngredient (e.g. `<mincraft:grass>.onlyDamaged()` or `iron_ingot | gold_ingot`).

## 如何从 ingredient 中获取物品/流体？

There are many ways to retrieve your wanted type:  
You can use `ingredient.getItems()` to get all matching items as `List<IItemStack>`. 但是，这意味着，如果物品有任何条件，这些条件就会丢失！ 对于液体，你可以使用 `ingredients.getFluids()` 来获取所有匹配的液体为 `List<ILiquidStack>`。 但是，这意味着，如果液体有任何条件，这些条件就会丢失！

## 如何获得实际的 ItemStack/FluidStack？

Depends: You could use [CraftTweakerMC](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/api/minecraft/CraftTweakerMC.java).  
Alternatively, if you depend on MTLib, you can use its [input helper](https://github.com/jaredlll08/MTLib/blob/1.12/src/main/java/com/blamejared/mtlib/helpers/InputHelper.java).  
If you need to rely on ItemConditions, you can always use the `ingredient.matches(IItemStack other)` method.