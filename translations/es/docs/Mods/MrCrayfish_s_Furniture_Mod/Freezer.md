# Congelador

El congelador es el compendio inferior del frigorífico.

Se puede utilizar para congelar objetos, pero requiere que el hielo funcione.

## Recetas por defecto de congelador

- Cubo de agua -> Hielo
- Hielo » Hielo empaquetado
- Cubo de lava -> Obsidiana
- Slimeball -> Bola de nieve
- Potato venenoso -> Potato
- Carne podrida -> Carne

## Eliminando

## Quitar recetas de congelador coincidentes.

```zenscript
mods.cfm.Freezer.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Elimina las recetas que resultan en Hielo
mods.cfm.Freezer. emove(<minecraft:ice>);
// Elimina las recetas que requieren un cubo de Lava
mods.cfm.Freezer.remove(null,<minecraft:lava_bucket>);
// Elimina todas las recetas
mods.cfm.Freezer.remove();
```

## Agregando

Añade una receta de congelador.

## Sólo soporta entradas de tamaño 1.

```zenscript
mods.cfm.Freezer.addRecipe(@Nonnull final ItemStack output, @Nonnull final ItemStack input);

// Agrega una receta que hace 16 hielos desde un cubo de Lava
mods.cfm.Freezer.addRecipe(<minecraft:ice>. ithAmount(16),<minecraft:lava_bucket>);
// Añade una receta que hace 16 Obsidianas de un cubo de agua
mods.cfm.Freezer.addRecipe(<minecraft:obsidian>. ithAmount(16),<minecraft:water_bucket>);
// Añade una receta que hace un cubo de agua de un cubo
mods.cfm.Freezer.addRecipe(<minecraft:water_bucket>,<minecraft:bucket>);
```