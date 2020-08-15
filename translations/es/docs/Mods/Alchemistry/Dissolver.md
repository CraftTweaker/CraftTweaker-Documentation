# Disolver

## Paquete
`mods.alchemistry.DissolverDisolver`

## Metodos
- **[ItemStack](/Vanilla/Items/IItemStack/) entrada** - La entrada de la receta.
- **booleano relativeProbability** - Cálculo de probabilidad Booleano
- **rollos de entera** - Posibilidad de Rol
- **probabilityGroups** - Un array de arreglos con un doble seguido por cualquier número de [ItemStack](/Vanilla/Items/IItemStack/)s. El doble se refiere a la probabilidad para su grupo.

## Adicional
```zenscript
mods.alchemistry.AtomizerDissolver.addRecipe(Entrada IIngrediente, Probabilidad relativa booleana, rollos de intención, grupo de probabilidad[][]);
mods.alchemistry.mods.alchemistry.Dissolver.addRecipe(IIngredient input, boolean relativeProbability, int rolls, Object[][] probabilityGroups);
mods.alchemistry.Dissolver.addRecipe(<minecraft:dye:9>, false, 5,
[[10, <minecraft:stone>], 
 [20, <minecraft:sand>,<minecraft:iron_ore>]]);
```

## Eliminar
```zenscript
mods.alchemistry.AtomizerDissolver.removeRecipe(IIngredient input);
mods.alchemistry.mods.alchemistry.Dissolver.removeRecipe(IIngredient input);
mods.alchemistry.Dissolver.removeRecipe(<minecraft:ender_pearl>);

mods.alchemistry.Dissolver.removeAllRecipes();Dissolver.removeAll-Recetas ();
```

# Notas
Para facilitar el desarrollo de la modificación de las recetas de disolver existentes hay un comando, simplemente /disuelver que obtendrá la receta de crafttweaker para el objeto que está sosteniendo y copiarla en el portapapeles

Si la probabilidad relativa es verdadera, entonces cada probabilidad será calculada en base a la suma de todas las probabilidades. En el ejemplo anterior esto significaría que hay un 33,3% de posibilidades de salida de piedra cada rollo y un 66. % de probabilidad de producir una arena y un mineral de hierro cada rollo.

Si la probabilidad relativa es falsa, entonces estos números son porcentajes absolutos i.e. un 10% de probabilidad de salida de piedra y un 20% de probabilidad de salida de arena y mineral de hierro (independientemente de si se ha producido o no piedra). Las probabilidades de puntos flotantes son soportadas, por lo que 4,5 significaría 4,5%

