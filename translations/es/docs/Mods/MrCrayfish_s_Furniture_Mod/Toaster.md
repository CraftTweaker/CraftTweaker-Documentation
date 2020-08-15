# Tostadora

La tostadora agarra la comida para empezar el día.

## Recetas de tostadora por defecto

- Carne de vacuno » Carne Cocinada
- Salchicha » Salchicha cocinada
- Kebab » Kebab cocinado

## Eliminando

## Quitar recetas de tostadora similares.

```zenscript
mods.cfm.Toaster.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Elimina las recetas que hacen Toast de un trozo
mods. fm.Toaster.remove(<cfm:item_toast>,<cfm:item_bread_slice>);
// Eliminar todas las recetas
mods.cfm.Toaster.remove();
```

## Agregando

Añade una receta de tostador.

## Sólo soporta entradas de tamaño 1.

```zenscript
mods.cfm.Toaster.addRecipe(@Nonnull final ItemStack output, @Nonnull final ItemStack input);

// Agrega una receta que hace pan de trigo
mods.cfm. oaster.addRecipe(<minecraft:bread>,<minecraft:wheat>);
// Añadir una receta que hace carne cocinada de carne de vacuno
mods.cfm.Toaster.addRecipe(<minecraft:cooked_beef>,<minecraft:beef>);
```