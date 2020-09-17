# Manejador de recetas

## Acceder al Manejador de Pociones

Puedes acceder al Manejador de Pecheros usando la palabra clave `para preparar` [global](/Vanilla/Global_Functions/).

## Métodos de Receta

Una receta de elaboración consta de 3 partes:

1. Una entrada (Qué hay en las 3 "Espacios de botella")
2. Uno o más ingredientes posibles (Lo que puede ir a la ranura superior a donde va el infierno)
3. La salida (Lo que retorna la receta)

### Añadir recetas de Pociones

```zenscript
//brewing.addBrew(Ingredient input, IIngredient ingredient, ItemStack output, @Optional boolean hidden);
brewing. ddBrew(<ore:blockGlass>, <ore:logWood>, <minecraft:beacon>);
brewing.addBrew(<ore:ingotGold>, <minecraft:obsidian>, <minecraft:wool:3>, true);


//brewing. ddBrew(Entrada IIngrediente, IIngredient[] ingredientes, salida ItemStack, @Optional boolean hidden);
elaboración. ddBrew(<minecraft:bedrock>, [<minecraft:lapis_ore>], <minecraft:sponge:1>);
brewing.addBrew(<minecraft:gold_block>, [<minecraft:iron_block>, <minecraft:lapis_block>], <minecraft:sponge:1>, true);
```

### Quitar recetas de Pociones

Sólo funciona con JEI versión 4.15.0.275 o superior.

```zenscript
//brewing.removeRecipe(Inputación ItemStack, ingrediente ItemStack);
brewing.removeRecipe(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <minecraft:gunpowder>);
```