# Crafting 组件

CraftTweaker 引入 [IIngredient](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java) 作为组件接口。  
继承此超接口的接口包括：

- [IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)
- [ILiquidStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/liquid/ILiquidStack.java)
- [IOreDictEntry](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDictEntry.java)

## 选择哪一个

最好总是使用 IIngredient。 为什么？  
因为许多用户期望所有的接受 IItemStack 的配方也接受 IOreDictEntry，这就是原因。  
例如 IngredientConditions，一些方法返回 IIngredient（如 `<mincraft:grass>.onlyDamaged()` 或 `iron_ingot | gold_ingot`）。

## 如何从 ingredient 中获取物品/流体？

有许多方式可以检索您想要的类型：  
您可以使用 `ingredient.getItems()` 来获取所有匹配的物品为 `List<IItemStack>`。 但是，这意味着，如果物品有任何条件，这些条件就会丢失！ 对于液体，你可以使用 `ingredients.getFluids()` 来获取所有匹配的液体为 `List<ILiquidStack>`。 但是，这意味着，如果液体有任何条件，这些条件就会丢失！

## 如何获得实际的 ItemStack/FluidStack？

依赖：你可以使用[CraftTweakerMC](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/api/minecraft/CraftTweakerMC.java)。  
另外，如果你依赖 MTLib，你可以使用它的 [input helper](https://github.com/jaredlll08/MTLib/blob/1.12/src/main/java/com/blamejared/mtlib/helpers/InputHelper.java)。  
如果你需要依赖 ItemConditions，你始终可以使用 `ingredient.matches(IItemStack other)` 方法。