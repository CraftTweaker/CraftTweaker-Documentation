# Fabricación nuclear

**Note:The double set of brackets in functions, `([...])` is necessary.** This is basically because all NuclearCraft CraftTweaker methods require an array of objects, be they ingredients, strings, integers or doubles.

Todas las recetas incluyen cinco conjuntos de información: entradas de objetos, entradas de líquidos, salidas de objetos, salida de líquidos e información adicional. The first four are clearly the ingredients and products involved in the recipe, and the extra info contains data such as processing time and power for machines, the base lifetime, power and heat variable of fusion combos, etc.

All parts of the recipe are simply listed in the method - the internal NuclearCraft code will deal with splitting it up into those five categories and packaging the information up into a recipe.

## Adiciones de la receta
Los métodos de receta especificarán `entrada de artículo` para entradas de artículos. <br/> Recipe Methods will specify `itemOutput` for Item Outputs. <br/> Recipe Methods will specify `fluidInput` for Fluid Inputs. <br/> Recipe Methods will specify `fluidOutput` for Fluid Outputs. <br/> Recipe Methods will specify `blockInput` for Block Inputs. <br/> Recipe Methods will specify `blockOutput` for Block Outputs. <br/> **Note: `blockInput` and `blockOutput` must be the `IItemStack`/`IIngredient` versions of blocks**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `ChanceItemStack`: `<minecraft:diamond>` * 3, 50, 1 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceIOreDictEntry`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

### Entradas fluidas
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `null`: null

### Fluid Outputs
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `ChanceLiquidStack` : `<liquid:water>` * 2000, 40, 250, 500 <br/> `null`: null

### Bloquear entradas
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

### Bloquear salidas
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

## Receta eliminada
Al especificar una receta para eliminar, todo lo que se requiere es especificar todos los ingredientes de entrada o de salida. No se requieren datos de probabilidad de ingenio. Una vez más, los elementos deben ser los primeros, seguidos por los fluidos.

También puede querer eliminar todo un cierto tipo de receta - para hacer esto, simplemente utilice el método `removeAllRecipes()`.

## Ingredientes de Oportunidad
Item and fluid outputs can have additional info attached to them - specifically, info that can randomise the output stack size somewhat. Esta información adicional es simplemente etiquetada al final del ingrediente especificado. <br/>

The size of the stack produced on each process is randomly assigned from a binomial distribution specified by the chance info. El porcentaje y el tamaño de la pila de ingredientes juegan los roles de la probabilidad y el número de ensayos, respectivamente. <br/>

For ChanceFluidStacks, a 'stack difference' must also be specified, which determines the difference in size between the possible stacks (for ChanceItemStacks and ChanceOreStacks, this is effectively 1). For example, a ChanceFluidStack for an ingredient of size 500, with a stack difference of 150 and minimum stack size of 50, will produce 50, 200, 350 or 500 millibuckets of the fluid.

### Canciller de objetos
La forma de un `ChanceItemStack` es `la producción de ItemStack, int percentage, @Optional int minimumStackSize`. <br/> The chance for the `output` to be produced is `percentage`. <br/> If not specified, `minimumStackSize` is 0.

### Número de asientos
La forma de una `entrada de Canciller` es `producción de IOreDictEntry, porcentaje de int, @minimumStackSize int opcional`. <br/> The chance for the `output` to be produced is `percentage`. <br/> The minimum stack size for the output is `minimumStackSize`. Si no se especifica, el valor predeterminado es 0.

### ChanceLiquidStack
La forma de un `Canciller LiquidStack` es `ILiquidStack, int percentage, int stackDifference, @Optional int minimumStackSize`. <br/> The chance for the output to be produced is `percentage`. <br/> The difference between possible stack sizes is `stackDifference`. El tamaño mínimo de pila para la salida es `minimumStackSize`. Si no se especifica, el valor predeterminado es 0.

- Ejemplo: ``<liquid:ethanol>` * 500, 100, 150, 50
    - La máquina producirá 50, 200, 350 o 500 millones de millones de etanol