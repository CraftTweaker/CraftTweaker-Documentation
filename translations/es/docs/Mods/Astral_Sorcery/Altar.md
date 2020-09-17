# Creación de Altar

Puede añadir y eliminar recetas de fabricación del Altar COM.

## Llamando

Puedes llamar al paquete AltarRecipe usando `mods.astralsorcery.Altar`.

## Eliminar recetas de Altar

Esta función elimina la receta con la ubicación del recurso dada.  
Puedes obtener esas ubicaciones pasando el cursor sobre la salida de la receta en JEI o el tomo astral mientras la pantalla de F3 está activa.  
Muestra una advertencia si la receta no existe.

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(string recipeLocation);
mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/lightwell");
```

<details><summary>Pre v1.10 handler</summary>

This function removes the first recipe it finds that returns provided [IItemStack](../../../Vanilla/Items/IItemStack/) `output` and uses the provided altar level.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

<table>
    <tr><th>Nivel de Altar</th><th>Nombre de nivel</th></tr>
    <tr><td>0</td><td>Mesa de fabricación luminosa</td></tr>
    <tr><td>1</td><td>Altar de artesanía de la luz estelar</td></tr>
    <tr><td>2</td><td>Altar celeste</td></tr>
</table>

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(Salida de ItemStack, int altarLevel);
mods.astralsorcery.Altar.removeAltarRecipe(<astralsorcery:blockblackmarble>, 0);
```

</details>

## Añadir recetas de Altar

Desde la versión 1.10 todas las recetas requieren una ubicación de recurso como primer parámetro.  
A diferencia de los nombres de las recetas de vainilla, no son opcionales y encontrarás errores si no la proporcionas. Si quieres anular una receta existente, puedes añadir una nueva receta con la misma ubicación.  
Puedes obtener esas ubicaciones pasando el cursor sobre la salida de la receta en JEI o el tomo astral mientras la pantalla de F3 está activa.

Todos los métodos de adición de recetas requieren estos parámetros:  
string `recipeLocation`,  
[ItemStack](/Vanilla/Items/IItemStack/) `salida`,  
int `starlightRequired`,  
int `craftingTickTime`,  
[IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] `entradas`

El parámetro `de entradas` es, a diferencia de las recetas de la tabla de fabricación, sólo una matriz dimensional.  
Puedes usar [ItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) o `null` como miembros del array

¡Estas recetas no pueden ser sin forma!

### Descubrimiento

`las entradas` de longitud *deben ser* 9

`inputs` Order:  
![Orden de entradas](/Mods/Astral_Sorcery/Assets/guialtar1.png)

```zenscript
mods.astralsorcery.Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/dirtfromstuff", <minecraft:dirt>, 200, 200, [
            <minecraft:grass>, null, <ore:treeLeaves>,
            null, <minecraft:grass>, null,
            <liquid:astralsorcery.liquidstarlight>, null, <ore:treeLeaves>]);
```

### Ataque

Añade una receta a la Mesa de Trabajo Cósmico (T2)

`las entradas` de longitud *tienen que ser* 13

`inputs` Order:  
![Orden de entradas](/Mods/Astral_Sorcery/Assets/guialtar2.png)

```zenscript
mods.astralsorcery.Altar. ddAttunementAltarRecipe("mypackname:shaped/internal/altar/iguessmarble", <minecraft:dirt>, 500, 300, [
            nulo, nulo, null,
            <ore:treeLeaves>, <astralsorcery:blockmarble:2>, <ore:treeLeaves>,
            null, <liquid:astralsorcery.liquidstarlight>, nulo,
            <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>]);
```

### Constelación

Añade una receta al Altar Celeste (T3)

`las entradas` de longitud *deben ser* 21

`inputs` Order:  
![Orden de entradas](/Mods/Astral_Sorcery/Assets/guialtar3.png)

```zenscript
mods.astralsorcery.Altar. ddConstellationAltarRecipe("mypackname:shaped/internal/altar/thisisveryexpensive", <astralsorcery:itemcraftingcomponent:2>, 2000, 10, [
            <ore:blockMarble>, <astralsorcery:blocklens>, <ore:blockMarble>,
            <ore:blockMarble>, <astralsorcery:itemcraftingcomponent:2>, <ore:blockMarble>,
            <ore:blockMarble>, <minecraft:nether_star>, <ore:blockMarble>,
            nulos, nulos, <liquid:astralsorcery.liquidstarlight>, <liquid:astralsorcery.liquidstarlight>,
            <ore:blockMarble>, <ore:blockMarble>,
            <minecraft:nether_star>, <minecraft:nether_star>,
            <minecraft:nether_star>, <minecraft:nether_star>,
            <ore:blockMarble>, <ore:blockMarble>]);
```

### Rasgo

Añade una receta al Altar de Rasgos (T4)

`Constelación` la constelación como una cadena no localizada. Este es un parámetro opcional.

`las entradas` de longitud *tienen que ser* 25 o superior. Los elementos en el índice 25 o superior se considerarán como "elementos externos" que necesitan ser puestos en repetidores alrededor del altar.

`inputs` Order:  
![Orden de entradas](/Mods/Astral_Sorcery/Assets/guialtar4.png)

```zenscript
//mods.astralsorcery.Altar.addTraitAltarRecipe(string recipeLocation, ItemStack output, int starlight, int craftTickTime, IIngredient[] entradas, @optional String iRequiredConstellationFocusName);

mods.astralsorcery.Altar. ddTraitAltarRecipe("mypackname:shaped/internal/altar/seemsalotforjusttnt", <minecraft:tnt>, 4500, 100, [
    <liquid:lava>, <liquid:lava>, <liquid:lava>, , <liquid:lava> ,<liquid:lava>, <minecraft:gunpowder>, 
    <liquid:lava>, <liquid:lava>, <liquid:lava>, <liquid:lava>, null, 
    nulos, nulos, nulos,<ore:blockMarble>, <ore:blockMarble>,
    <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>,<ore:blockMarble>, 
    <ore:blockMarble>,<minecraft:redstone>, <minecraft:redstone>,<minecraft:redstone>, <minecraft:redstone>,
    ///Ninguno de artículos, índices 25+
    <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>
],
"astralsorería. onstellation.evorsio");
```