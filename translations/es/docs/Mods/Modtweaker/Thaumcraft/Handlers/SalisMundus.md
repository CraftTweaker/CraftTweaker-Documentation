# Salis Mundus

Este paquete te permite añadir manejadores de conversión para el manejador salis mundus de thaumcraft.  
Estos manejadores son invocados cuando haces clic en un bloque en el mundo con la salis de Thaumcraft para cambiarlos a otra cosa.

Si ese resultado es un bloque, será colocado en el mundo, si no será soltado como objeto.

## Importar el paquete

Para acortar las llamadas a métodos puedes [importar](/AdvancedFunctions/Import/) el paquete así:

```zenscript
importar mods.thaumcraft.SalisMundus;
```

## Añadir recetas

Puede especificar un [IBlock](/Vanilla/Blocks/IBlock/) o un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).  
Si no especificas una investigación, esta receta siempre será posible, si decides especificar una cadena de investigación, necesitas desbloquear la investigación para que la conversión funcione.

```zenscript
//mods.thaumcraft.SalisMundus.addSingleConversion(IBlock in, ItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<blockstate:minecraft:dirt>.block, <minecraft:bedrock>);

//mods.thaumcraft.SalisMundus. ddSingleConversion(IOreDictEntry in, ItemStack out, @Optional String research);
mods.thaumcraft.SalisMundus.addSingleConversion(IOreDictEntry in, ItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<ore:blockIron>, <minecraft:bedrock>);
```

## Eliminar recetas

También puedes eliminar todas las recetas que devuelvan un objeto que coincida.  
Este manejador comprueba si el parámetro proporcionado coincide con el elemento de salida, así que también puedes eliminar todas las recetas usando el ingrediente comodín `<*>`.

```zenscript
mods.thaumcraft.SalisMundus.removeSingleConversion(salida IIngredient);

//Elimina TODOS los manejadores registrados
mods.thaumcraft.SalisMundus.removeSingleConversion(<*>);

//Sólo elimina el manejador crucible
mods.thaumcraft.SalisMundus.removeSingleConversion(<thaumcraft:crucible>);
```