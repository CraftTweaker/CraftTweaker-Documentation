# Ejemplos

Crea lava soltando 4x de cualquier madera de madera en el criotheum.  
`mods.inworldcrafting.FluidToFluid.transform(<liquid:lava>, <liquid:cryotheum>, [<ore:logWood> * 4]);`

* * *

Crea Madera Tratada al soltar algunas abedul en Creosote. `mods.inworldcrafting.FluidToItem.transform(<immersiveengineering:treated_wood>, <liquid:creosote>, [<minecraft:planks:2>]);`

* * *

Crea una Botella de Agua soltando una Botella de Cristal en Agua, consume el bloque de Fuente de Agua.  
`mods. nworldcrafting.FluidToItem.transform(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <liquid:water>, [<minecraft:glass_bottle>], true);`

* * *

Crea acero un 15% del tiempo en que una Explosión golpee el Hierro de ingotHierro en el mundo.  
`mods. nworldcrafting.ExplosionCrafting.explodeItemRecipe(<ore:ingotSteel>.firstItem, <ore:ingotIron>, 15);`

* * *

Crea 8 palos 75% del tiempo en que las tablas de acacia colocadas en el mundo son golpeadas por una explosión. `mods.inworldcrafting.ExplosionCrafting.explodeBlockRecipe(<minecraft:stick> * 8, <minecraft:planks:4>, 75);`

* * *

Crea un Bloque de Carbón cuando 4 piezas de madera se hayan quemado durante 60 ticks. `mods.inworldcrafting.FireCrafting.addRecipe(<thermalfoundation:storage_resource>, <ore:logWood> * 4, 60);`

# Documentación

## Nota sobre la fabricación de fluidos

**No agregue el mismo ingrediente varias veces, utilice `<ingredient> * contador`. Está ahí por una razón.**  
El juego combina objetos cercanos en pilas, así que encontrar varios ingredientes del mismo tipo en un BlockSpace solo ocurre cuando el primer EntityItem obtiene una pila completa de objetos, así que la embarcación no sucederá como esperaría.

### BAAD!

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel>, <ore:ingotSteel>, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

### Adiós

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel> * 2, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

## Transformación de fluido a elemento

la importación debe ser `mods.inworldcrafting.FluidToItem`

**Uso**  
`FluidToItem.transform(Salida ItemStack, ILiquidStack inputFluid, IIngredient[] inputItems, @Consumo booleano opcional);`

El valor de consumo por defecto para este método es `verdadero`, así que si no quieres que se consuma el `inputItem` al transformar el líquido tienes que pasar `false` como el 4to parámetro.

## Transformación de fluido a fluido

la importación debe ser `mods.inworldcrafting.FluidToFluid`

**Uso**  
`FluidToFluid.transform(salida ILiquidStack, ILiquidStack inputFluid, IIngredient[] inputItems, @Consumo booleano opcional);`

El valor de consumo por defecto para este método es `verdadero`, así que si no quieres que se consuma el `inputItem` al transformar el líquido tienes que pasar `false` como el 4to parámetro.

## Elementos Quemantes

la importación debe ser `mods.inworldcrafting.FireCrafting`

**Uso**  
`FireCrafting.addRecipe(salida ItemStack, InputItem, @Optional int ticks);`

El número predeterminado de ticks para crear la salida es `40` (2 segundos)

## Elementos/Bloques Explotando

la importación debe ser `mods.inworldcrafting.ExplosionCrafting`

### Explotando objetos

**Uso**  
`ExplosionCrafting.explodeItemRecipe(Salida de ItemStack, Ingredient inputItem, @Optional int survicechance);`

La supervivencia establece la posibilidad de que la receta tenga éxito. El valor predeterminado es `100`%

### Bloques Explotadores

**Uso**  
`ExplosionCrafting.explodeBlockRecipe(Salida de ItemStack, Stack de ItemStack, @Optional int itemSpawnChance);`

`blockStack` debe ser un bloque `` en su forma de pila. Se comparará con los metadatas. `itemSpawnChance` establece la probabilidad de que el bloque aparezca la salida cuando el bloque es destruido por una explosión. El valor predeterminado es `100`%