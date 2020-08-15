# Microonda

La microonda calienta los productos alimenticios.

## Recetas de microondas por defecto

- Carne de vacuno » Carne Cocinada
- Porkchop -> Porkchop cocinado
- Potato » Potato Horneado
- Pollo » Pollo cocinado
- Pescado » Pescado cocinado
- Salmón » Salmón cocinado
- Carne » Carne Cocinada

## Eliminando

## Quitar recetas de horno coincidentes.

```zenscript
mods.cfm.Oven.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Elimina las recetas que resultan en carne cocinada
mods.cfm.Oven. emove(<cfm:item_flesh_cooked>);
// Elimina las recetas que requieren Potato
mods.cfm.Oven.remove(null,<minecraft:potato>);
// Elimina todas las recetas
mods.cfm.Oven.remove();
```

## Agregando

## Añade una receta de horno.

```zenscript
mods.cfm.Oven.addRecipe(@Nonnull final ItemStack salida, @Nonnull entrada final de ItemStack);

// Agrega una receta que hace dos manzanas de un solo palo
mods. fm.Oven.addRecipe(<minecraft:apple>.withAmount(2),<minecraft:stick>);
```