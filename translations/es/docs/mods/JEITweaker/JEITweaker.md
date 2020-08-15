# JEITweaker

## Descripción

Este mod añade soporte para CraftTweaker a JEI. CraftTweaker usado para soportar JEI nativamente, pero debido a la reescritura de 1.14, el soporte JEI está siendo sacado a su propio mod.


## Paquete
`mods.jei.JEI`

## Montaje de objetos

Esto ocultará el elemento dado en JEI. El ejemplo indicado ocultará el bloque de tierra en el menú JEI.

```zenscript
//mods.jei.JEI.hideItem(IItemStack stack);
mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## Cuerpo de categorías

Esto ocultará la categoría dada en JEI. El ejemplo dado ocultará la categoría de horno cuando busque recetas en JEI.

```zenscript
//mods.jei.JEI.hideCategory(String category);
mods.jei.JEI.hideCategory("minecraft:furnace");
```

Las categorías por defecto son:
```zenscript
"minecraft:crafting"
"minecraft:furnace"
"minecraft:smoking"
"minecraft:blasting"
"minecraft:campfire"
"minecraft:fuel"
"minecraft:brewing"
"minecraft:anvil"
"jei:information"
```

¡Los cambios pueden añadir más categorías!

## Añadir Info

Esto agregará información al artículo que se mostrará al ver los usos en JEI!.

Este ejemplo exacto añadirá 3 líneas de información al elemento Diamante.

```zenscript
//mods.jei.JEI.addInfo(IItemStack stack, String[] information);
mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["¡Esta es la primera línea!", "Esta es la segunda!", "tercero"]);
```

El código anterior producirá: ![Caja de Commit](https://blamejared.com/docsImages/JEITweakerAddInfo.png)


