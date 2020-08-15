# Creación de Nuclear: Overhauled

Todas las recetas incluyen cinco conjuntos de información: entradas de objetos, entradas de líquidos, salidas de objetos, salida de líquidos e información adicional. The first four are clearly the ingredients and products involved in the recipe, and the extra info contains data such as processing time and power for machines, the base depletion time, heat gen, efficiency, criticality, and radiation level of solid fission fuels, etc.

All parts of the recipe are simply listed in the method - the internal NC code will deal with splitting it up into those five categories and packaging the information up into a recipe.


## Ingredientes de Oportunidad

Item and fluid outputs can have additional info attached to them - specifically, info that can randomise the output stack size somewhat. Esta información adicional se da usando NC 'ingredientes de casualidad'.

The size of the stack produced on each process is randomly assigned from a binomial distribution specified by the chance info. El porcentaje y el tamaño de la pila de ingredientes juegan los roles de la probabilidad y el número de ensayos, respectivamente. A minimum stack size can also be specified - without this, the minimum stack size is simply 0.

For ChanceFluidIngredients, a 'stack difference' must also be specified, which determines the difference in size between the possible stacks (for ChanceItemIngredients, this is effectively 1). For example, a ChanceFluidIngredient for an ingredient of size 500, with a stack difference of 150 and minimum stack size of 50, will produce 50, 200, 350 or 500 millibuckets of the fluid.

**Nota: `Canciller` y `Canciller FluidIngrediente` cuentan como `IIngrediente` para el propósito de las recetas en NuclearCraft: Sobretransportado**

### Canciller Ingrediente

#### Creación

```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.ChanceItemIngredient.create(IIngredient ingredient, int chancePercent, @Optional int minStackSize);
```

#### Ejemplos

```zenscript
ChanceItemIngredient.create(<minecraft:coal>*2, 25);
ChanceItemIngredient.create(<ore:dustGlowstone>*3, 60, 2);
```

#### Métodos Extra

```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getMinStackSize();
```

### Canciller de Ingrediente
Estos se pueden usar en cualquier lugar donde se utilice `ILiquidStack`.

#### Creación
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.ChanceFluidIngredient.create(IIngredient ingredient, int chancePercent, int stackDiff, @Optional int minStackSize);
```

#### Ejemplos
```zenscript
ChanceFluidIngredient.create(<liquid:water>*1500, 35, 300);
Canciller FluidIngredient.create(<liquid:oil>*1000, 80, 200, 400);
```

#### Métodos Extra
```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getStackDiff();
int getMinStackSize();
```

## Adiciones de la receta
Los métodos de receta especificarán `entrada de artículo` para entradas de artículos. <br/> Recipe Methods will specify `itemOutput` for Item Outputs. <br/> Recipe Methods will specify `fluidInput` for Fluid Inputs. <br/> Recipe Methods will specify `fluidOutput` for Fluid Outputs. <br/> Recipe Methods will specify `blockInput` for Block Inputs. <br/> Recipe Methods will specify `blockOutput` for Block Outputs. <br/> **Note: `blockInput` and `blockOutput` must be the `IItemStack`/`IIngredient` versions of blocks**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceItemIngredient`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

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
