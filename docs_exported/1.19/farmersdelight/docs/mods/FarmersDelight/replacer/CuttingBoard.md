# Replacing in the Cutting Board RecipeType

The Cutting Board supports using a Replacer to decompose and replacer individual RecipeComponents from it.

The Cutting Board is broken down into the following RecipeComponents:

- `<recipecomponent:crafttweaker:input/ingredients>` : Contains the inputs of the recipe. The type of this component is [IIngredient](/vanilla/api/item/IIngredient).
- `<recipecomponent:farmersdelight:recipe_component/cutting_board_tool>` : Contains the tool used to process this recipe. The type of this component is [IIngredient](/vanilla/api/item/IIngredient). May also be a [ToolActionIngredient](/mods/FarmersDelight/ToolActionIngredient).
- `<recipecomponent:crafttweaker:metadata/group>` : Contains the recipe book group where this recipe is stored. May not be null, but can be empty (`""`) or a valid group. The type of this component is `string`.
- `<recipecomponent:crafttweaker:output/single_chanced_items>` : Contains the output of the recipes with their appropriate chances. The type of this component is [Percentaged](/vanilla/api/util/random/Percentaged)<[IItemStack](/vanilla/api/item/IItemStack)>.

- Optionally, the decomposed recipe may also have a `<recipecomponent:farmersdelight:recipe_component/sound>` component, of type string, if and only if the recipe has a valid sound id.