# Anvil

## Package

`mods.rockytweaks.Anvil`

## Addition

### Basic

Creates an anvil recipe that is displayed separately in JEI.

```zenscript
// addRecipe(IIngredient left, IIngredient right, IItemStack output, int expCost);
Anvil.addRecipe(<minecraft:book>, <minecraft:quartz> * 8, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}), 5);
```

### With Function

Creates an anvil recipe that determines its output based on a [Recipe Function](/Vanilla/Recipes/Crafting/Recipe_Functions#irecipefunction) passed into it.

```zenscript
// addRecipe(IIngredient left, IIngredient right, IItemStack output, int expCost, IRecipeFunction function);
Anvil.addRecipe(<minecraft:dirt>, <minecraft:sand>, <minecraft:gravel>, 1,
    function(output, input, craftinginfo) {
        if (!isNull(input.right.tag.display)
        && !isNull(input.right.tag.display.Name)
        && input.right.tag.display.Name == "Good Taco Seasoning") {
            return <minecraft:cooked_porkchop>;
        }
        return output;
    }
);
```

## Removal

The anvil does not use recipes in the normal sense but you are still able to remove/blacklist specific inputs or outputs.

```zenscript
// Remove input(s) - remove(IIngredient[] inputs)
// Remove output   - remove(IIngredient output)
// Remove all vanilla recipes - removeAll()

// Blacklist Mending Enchant (input)
Anvil.remove([<minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 70 as short}]})]);

// Blacklist Sharpness V on a Diamond Sword (inputs)
Anvil.remove([<minecraft:diamond_sword>, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short, id: 16 as short}]})]);

// Blacklist Enchanted Books (output)
Anvil.remove(<minecraft:enchanted_book>);
```
