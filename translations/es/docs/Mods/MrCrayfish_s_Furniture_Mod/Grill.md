# Parrilla

La parrilla cocina la comida sobre los carbones calientes.

Para cocinar ambas caras es necesario que se deslicen los alimentos.

## Recetas por defecto de parrilla

- Carne de vacuno » Carne Cocinada
- Salchicha » Salchicha cocinada
- Kebab » Kebab cocinado

## Eliminando

## Quitar recetas de parrilla coincidentes.

```zenscript
mods.cfm.Grill.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Elimina las recetas que requieren
mods.cfm.Grill. emove(null,<minecraft:beef>);
// Elimina las recetas que resultan en una Salchicha Cocinada
mods.cfm.Grill.remove(<cfm:item_sausage_cooked>);
// Elimina todas las recetas
mods.cfm.Grill.remove();
```

## Agregando

Añade una receta de parrilla.

## Sólo soporta entradas de tamaño 1.

```zenscript
mods.cfm.Grill.addRecipe(@Nonnull final ItemStack output, @Nonnull final ItemStack input);

// Agrega una receta que hace un palo a partir de un mods
de salchicha. fm.Grill.addRecipe(<minecraft:stick>,<cfm:item_sausage>);
// Añadir una receta que hace una antorcha de un palo
mods.cfm.Grill.addRecipe(<minecraft:torch>,<minecraft:stick>);
```