# Yunque

## Paquete

`mods.rockytweaks.Yunque`

## Adicional

### Único

Crea recetas individuales de yunque que se muestran por separado en JEI.

```zenscript
// addRecipe(Itemstack input1, Itemstack input2, Itemstack output, int exp-cost);
mods.rockytweaks.Anvil.addRecipe(<minecraft:book>, <minecraft:quartz> * 8, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}), 5);
```

### Conjunto de recetas

Crea múltiples recetas de yunque que JEI cicla a través de las opciones posibles.

```zenscript
// addRecipe(Itemstack input1, Itemstack[] input2, Itemstack[] salida, int[] exp-cost);
mods.rockytweaks.Yvil. ddReceta(<minecraft:book>,
  [
    <minecraft:quartz> * 8,
    <minecraft:quartz> * 16,
    <minecraft:quartz> * 32
  ],
  [
    <minecraft:enchanted_book>. ithTag({StoredEnchantments: [{lvl: 1 as short, id: 16 as short}]}),
    <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 2 as short, id: 16 as short}]}),
    <minecraft:enchanted_book>. ithTag({StoredEnchantments: [{lvl: 3 as short, id: 16 as short}]})
  ],
  [
    5,
    15,
    32
  ]
);
```

## Eliminar

El yunque no utiliza recetas en el sentido normal, pero todavía puede eliminar/negar entradas o salidas específicas.

```zenscript
// remove(IIngredient[] entradas)
// remove(IIngredient output) - Remove an output

// Blacklist Mending Enchant (input)
Yvil. emove([<minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: 70 as short}]})]);

// Lista negra Afiladura V en una espada de Diamante (entradas)
mods. ockytweaks.Anvil.remove([<minecraft:diamond_sword>, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short, id: 16 as short}]})]);

// Lista negra de libros encantados (salida)
mods.rockytweaks.Anvil.remove(<minecraft:enchanted_book>);
```
