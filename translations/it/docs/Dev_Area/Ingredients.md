# Crafting Ingredients

CraftTweaker introduces [IIngredient](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java) as ingredient interface.  
Interfaces extending this super interface include:

- [IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)
- [ILiquidStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/liquid/ILiquidStack.java)
- [IOreDictEntry](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDictEntry.java)

## Which to choose

Preferably, you always use IIngredient. Why?  
Because a lot of users expect all recipes that accept an IItemStack to also accept an IOreDictEntry, that's why.  
Also, some functions like IngredientConditions return an IIngredient (e.g. `<mincraft:grass>.onlyDamaged()` or `iron_ingot | gold_ingot`).

## How to get the items/fluids from the ingredient?

There are many ways to retrieve your wanted type:  
You can use `ingredient.getItems()` to get all matching items as `List<IItemStack>`. This means however, that the item would lose its Conditions, if it had any! For fluids, you can use `ingredients.getFluids()` to get all matching fluids as `List<ILiquidStack>`. This means however, that the fluid would lose its Conditions, if it had any!

## How to get the actual ItemStack/FluidStack?

Depends: You could use [CraftTweakerMC](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/api/minecraft/CraftTweakerMC.java).  
Alternatively, if you depend on MTLib, you can use its [input helper](https://github.com/jaredlll08/MTLib/blob/1.12/src/main/java/com/blamejared/mtlib/helpers/InputHelper.java).  
If you need to rely on ItemConditions, you can always use the `ingredient.matches(IItemStack other)` method.