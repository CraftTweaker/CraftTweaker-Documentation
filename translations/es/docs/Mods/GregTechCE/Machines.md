# Máquinas

GTCE almacena todas las recetas en un `RecipeMap`. Para obtenerlos, necesitas importar `mods.gregtech.recipe.RecipeMap` a tu código.

Las recetas se clasifican en sus máquinas, llame a `RecipeMap.getByName(machineName)` para obtener recetas específicas y constructores.

## Lista de máquinas disponibles

- Compresor: `compresor`
- Extractor: `extractor`
- Macerator: `macerator`
- Planta de lavado de minerales: `lavavajillas de color`
- Centrifuge térmico: `thermal_centrifuge`
- Horno: `horno`
- Microonda: `microonda`
- Maquina de ensamblaje: `ensamblador`
- Pulsación de formación: `forming_press`
- Canalizador de fluidos: `fluid_canner`
- Horno de arco de plasma: `plasma_arc_furnace`
- Horno de arco: `arc_furnace`
- Maquina de tamiz: `tamizador`
- Precision laser engraver: `laser_engraver`
- Mezcladora: `mezclador`
- Autoclave: `autoclave`
- Separador electromagnético: `electromagnetic_separator`
- Polarizer: `polarizer`
- Baño químico: `químical_bath`
- Maquina de cerveza: `cerveza`
- Calentador de fluidos: `fluid_heater`
- Distillería: `destillería`
- Fermentador: `fermentador`
- Solidificador de fluidos: `fluid_solidifier`
- Extractor de fluidos: `fluid_extractor`
- Centrifuge: `centrifuge`
- Electrolizador: `electrolizador`
- Horno explosivo: `blast_furnace`
- Implo compresor: `implosion_compressor`
- Vac freezer: `vacuum_freezer`
- Reactor químico: `químico _reactor`
- Torre Disti: `distillation_tower`
- Unidad de cracker: `cracker`
- Horno de pilición: `pyro`
- Wiremill: `cableado`
- Degenador de Metal: `metal_bender`
- Fundición de Aleación: `alloy_smelter`
- Maquina de enlatado: `later`
- Lathe: `lathe`
- Maquina de corte de bloques: `corta_saw`
- Extruso: `extrusora`
- Martillo de forja: `forge_hammer`
- Maquina de empaquete: `empaquetador`
- Desempaquete: `desempaquetador`
- Diesel gen: `diesel_generator`
- Turbina de gas: `gas_turbine`
- Turbina de vapor: `steam_turbine`
- Generador de plasma: `generador plasma_generator`

**Aún no implementado:**

- Productor de uu-mater: `uuuamplifier`
- Generador térmico: `thermal_generator`
- Generador de semi-líquido: `semi_fluid_generator`
- Reactor de fusión: `fusion_reactor`

**Primitive Blast Furnace** *uses different syntax from normal recipes.* For example:

```zenscript
importar mods.gregtech.recipe.PBFRecipeBuilder;

//Primitive Blast Furnace
PBFRecipeBuilder.start()
    . nput(<ore:ingotCompressedWroughtIron> * 1)
    .output(<ore:ingotSteel>. irstItem * 1)
    .duration(250)
    . uelAmount(2)
    .buildAndRegister();

//Quitar recetas de PBF
import mods.gregtech.recipe. ecipeMaps;

para receta en RecipeMaps.getPrimitiveBlastFurnaceRecipes() {
    recipe.remove();
```

## Información del constructor

Después de obtener una instancia de `RecipeMap`, puedes definir las recetas usando su constructor.

Método constructor llamando:

```zenscript
recipeMap.recipeBuilder()
```

Es un poco como `Stream<T>` en Java, con completamente funcional para controlar el comportamiento de tu receta.

Ejemplo de EBF:

```zenscript
// Horno Explosivo eléctrico
val blast_furnace = mods.gregtech.recipe.RecipeMap.getByName("blast_furnace");
blast_furnace. ecipeBuilder()
    .inputs(<ore:ingotCompressedWroughtIron> * 1)
    . luidInputs([<liquid:oxygen> * 500])
    . utputs(<ore:ingotSteel>.firstItem * 1)
    . roperty("temperature", 1000) //esta es una temperatura mínima a la que el artículo se fundirá
    . uration(40)
    .EUt(120)
    .buildAndRegister();
```

Algunas de las propiedades asignables al método `.property()`:

| Nombre      | Descripción                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| explosivos  | Implosión Compresor, cantidad de explosivos                                 |
| circuito    | Máquinas integradas configurables por circuitos. Configuración del circuito |
| temperatura | Horno explosivo. Requisito mínimo de temperatura.                           |

Estas **NO SE IMPLEMENTAN AÑO:**

| Nombre          | Descripción                                          |
| --------------- | ---------------------------------------------------- |
| amplificador    | Amplificador UU. Cantidad de amortiguador UU salida. |
| eu_para empezar | Fusión Reactor, UE para iniciar la fusión            |

Lo usas como la "temperatura":

```zenscript
.property("circuito", X)//, donde X es la configuración integrada del circuito
.property("explosives", Y)//, donde Y es la cantidad de explosivos requeridos para hacer funcionar una receta
```

Métodos más útiles:

```zenscript
.inputs()
.fluidInputs()
.outputs()
.fluidOutputs()
. hancedOutput(<itemstack>, 0-10000, 0-10000) (10000 es 100%) // (pila de items, oportunidad de salida intial, potenciador de probabilidad de salida nivel
. uration() // en ticks
.notConsumable(X) // donde X es un id CT. Funciona como .inputs, pero el artículo no se consume
.hidden() // si la receta está oculta en el JEI
. hancedOutput(<itemstack>, 0-10000, 0-10000) (10000 es 100%) // no es válido para cada máquina. algunos de ellos utilizan ese método. El más notable es el macerador
.EUt() // EU por tick
```

## Eliminando

La eliminación de una receta se hace por la propia instancia de la receta, así que primero tienes que encontrar una receta.

Ejemplo:

```zenscript
val compressor as reccipeMap = RecipeMap.getByName("compressor");

// findRecipe(voltaje largo, ItemHandlerModifiable entradas, IMultipleTankHandler/List<FluidStack> fluidInputs)
compressor.findRecipe(2, [<minecraft:redstone>], null).remove();
```