# Replacing in the Cooking Pot RecipeType

The Cooking Pot supports using a Replacer to decompose and replacer individual RecipeComponents from it.

The Cooking Pot is broken down into the following RecipeComponents:

- `<recipecomponent:crafttweaker:output/items>` : Contains the output of the recipe. The type of this component is [IItemStack](/vanilla/api/item/IItemStack).
- `<recipecomponent:crafttweaker:input/ingredients>` : Contains the inputs of the recipe. The type of this component is [IIngredient](/vanilla/api/item/IIngredient).
- `<recipecomponent:crafttweaker:processing/time>` : Contains the amount of time the recipe takes to process. The type of this component is `int`.
- `<recipecomponent:crafttweaker:metadata/group>` : Contains the recipe book group where this recipe is stored. May not be null, but can be empty (`""`) or a valid group. The type of this component is `string`.
- `<recipecomponent:farmersdelight:recipe_component/cooking_pot_container>` : Contains the Cooking Pot container. The type of this component is [IItemStack](/vanilla/api/item/IItemStack).
- `<recipecomponent:crafttweaker:output/experience>`:  Contains the experience this recipe gives when crafted. The type of this component is `float`.

- Optionally, the decomposed recipe may also have a `<recipetype:farmersdelight:recipe_component/cooking_tab>` component, of type [CookingPotRecipeBookTab](/mods/FarmersDelight/CookingPotRecipeBookTab), if the recipe has a non null book tab.