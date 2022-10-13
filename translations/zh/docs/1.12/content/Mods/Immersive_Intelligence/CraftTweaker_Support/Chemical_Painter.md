::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Chemical Painter

The `ChemicalPainter` package can be used to modify the Immersive Intelligence Chemical Painter recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.ChemicalPainter;
```

## Adding Recipes

### Parameters

| 类型                                                      | 名称           | Required |
| ------------------------------------------------------- | ------------ | -------- |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | Item Input   | Yes      |
| [IItemstack](/Vanilla/Items/IItemStack/)                | Item Output  | Yes      |
| int                                                     | Paint Amount | Yes      |
| int                                                     | Energy       | Yes      |
| int                                                     | Time         | Yes      |

Paint amount is the total amount of ink in mB used for a single process.  
Amounts of specific ink are based on their percentage in the [CMYK](https://en.wikipedia.org/wiki/CMYK_color_model) color model.

### 语句

```zenscript
mods.immersiveintelligence.ChemicalPainter.addRecipe(IIngredient itemInput, IChemicalPainterFunction function, int paintAmount, int energy, int time);
```

### IChemicalPainterFunction

IChemicalPainterFunction is a function used to determine the output item of a recipe based on the stack and selected paint color.    
For example, it can be used to get the core NBT tag or merge the core and casing's NBT tags.

| 类型                                       | 名称            |
| ---------------------------------------- | ------------- |
| [IItemstack](/Vanilla/Items/IItemStack/) | 输入            |
| int                                      | RGB Int Color |
| int                                      | Vanilla Color |

The Vanilla Color is a number 0-15 and represents a dye color based on damage value.

Returns: [IItemStack](/Vanilla/Items/IItemStack/)

### 例子

```zenscript
mods.immersiveintelligence.ChemicalPainter.addRecipe(
    <ore:ingotIron>, 
    function(input, color, baseColor) {
        val nbt as IData = {key1 : color};
            return input.withTag(input.tag+nbt);
        }, 
    100, 2000, 200
);
```

## Adding Washing Recipes

Washing recipes are functionally the same as regular recipes, but are placed in a different category in JEI.

### Parameters

| 类型                                                      | 名称          | Required |
| ------------------------------------------------------- | ----------- | -------- |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | Item Input  | Yes      |
| [IItemstack](/Vanilla/Items/IItemStack/)                | Item Output | Yes      |
| [ILiquidStack](/Vanilla/Liquids/ILiquidstack/)          | Fluid Input | Yes      |
| int                                                     | Energy      | Yes      |
| int                                                     | Time        | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.ChemicalPainter.addWashingRecipe(IIngredient itemInput, IItemStack itemOutput, ILiquidStack fluidInput, int energy, int time);
```

### 例子

```zenscript
mods.immersiveintelligence.ChemicalPainter.addWashingRecipe(<ore:ingotIron>, <minecraft:diamond>, <liquid:water>, 2000, 200);
```

## Removing Recipes

### Parameters

| 类型                                       | 名称 | Required |
| ---------------------------------------- | -- | -------- |
| [IItemstack](/Vanilla/Items/IItemStack/) | 输出 | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.ChemicalPainter.removeRecipe(IItemStack output);
```

### 例子

```zenscript
mods.immersiveintelligence.ChemicalPainter.removeRecipe(<minecraft:diamond>);
```