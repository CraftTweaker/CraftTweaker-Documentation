# JEI

CraftTweaker viene con soporte para JustEnoughItems (JEI). Puede añadir u ocultar elementos o fluidos en JEI o añadir una página de descripciones para ellos.

## Eliminar

Puedes simplemente quitar el objeto del JEI o quitarlo y todas sus recetas de mesa de fabricación.

```zenscript
//hide(IItemStack item);
mods.jei.JEI.hide(<minecraft:diamond>);

//hide(ILiquidStack item);
mods.jei.JEI.hide(<liquid:water>);
mods.jei.JEI. ide(<fluid:lava>);


//removeAndHide(IIngredient output, @optional boolean NBT-Match)
mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
mods.jei.JEI.removeAndHide(<ore:planks>, false);
```

## Ocultar categorías

Puedes usar esto para ocultar categorías JEI completas (por ejemplo, recetas de fabricación, recetas de horno, recetas de máquina X, ...).  
Acepta la categoría como cadena, puedes obtener todas las categorías registradas ejecutando `/ct jeiCategories` de nombre.

```zenscript
//hideCategory(category)
mods.jei.JEI.hideCategory("minecraft.smelting");
```

## Añadir ítem

También puedes añadir un [ItemStack](/Vanilla/Items/IItemStack/) al JEI para añadir elementos que no fueron añadidos o añadir un elemento con NBT-Tag al JEI

```zenscript
//addItem(item);
mods.jei.JEI.addItem(<minecraft:stone>.withTag({display:{Name: "Escoger",Lore:["What once was stone", "Is stone no more"]}}));
```

## Añadir descripción

Una descripción de JEI es una página extra que se muestra al buscar la receta/uso de un ingrediente en JEI que contiene información sobre ese ingrediente.  
Puede añadir una descripción JEI a un [ItemStack](/Vanilla/Items/IItemStack/), un [ItemStack](/Vanilla/Items/IItemStack/)[], un [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) o un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).

Si sus cadenas son demasiado largas para ser escritas en una línea (o página) automáticamente creará saltos de línea/página.  
Cada parámetro de cadena tendrá al menos una línea y envolver alrededor del final de la ventana si es demasiado largo.

```zenscript
//addDescription(ítemStack item, cadena... desc);
mods.jei.JEI.addDescription(<minecraft:iron_ingot>,"TEST");


//addDescription(IItemStack[] item, string... desc);
mods.jei.JEI.addDescription([<minecraft:music_disc>, <minecraft:music_disc>],["Abajo","Gonna","Dir","Arriba","Gonna","Let","Tú","Abajo"]);

//addDescription(IOreDictEntry dict, cadena... desc);
mods.jei.JEI.addDescription(<ore:ingotIron>, "Puedes usarlos para crear cosas", "", "cosas como Armadura","","","Sí...","Eso también...");

//addDescription(ILiquidStack stack, string... desc);
mods.jei.JEI.addDescription(<liquid:lava>, ["LAVA"]);
```

El parámetro `desc` es un varArg, lo cual significa que puede dar una cadena[] que contenga todas las cadenas de descripción o muchas cadenas simples, lo que prefiera. ¡Simplemente no los mezcles!