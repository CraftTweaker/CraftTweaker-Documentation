# Microonda

La microonda calienta los productos alimenticios.

## Recetas de microondas por defecto

- Carne de vacuno » Carne Cocinada
- Potato » Potato Horneado

## Eliminando

## Quitar recetas de microondas coincidentes.

```zenscript
mods.cfm.Microwave.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Elimina las recetas que requieren un Potato
mods.cfm.Microwave. emove(null,<minecraft:potato>);
// Elimina las recetas que resultan en Carnes Cocinadas
mods.cfm.Microwave.remove(<minecraft:cooked_beef>);
// Elimina todas las recetas
mods.cfm.Microwave.remove();
```

## Agregando

## Añade una receta de microondas.

```zenscript
mods.cfm.Microwave.addRecipe(@Nonnull final ItemStack output, @Nonnull final ItemStack input);

// Agrega una receta que hace 4 sticks de un mod
de caña de azúcar. fm.Microwave.addRecipe(<minecraft:stick>.withAmount(4),<minecraft:reeds>);
```