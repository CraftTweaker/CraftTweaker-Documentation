# Ropa de cuero

## Paquete
```zenscript
importar mods.terrafirmacraft.leatherKnapping;
```

## Adicional

```zenscript
leatherKnapping.addRecipe(String registryName, ItemStack output, String... pattern);
```

## Eliminar

```zenscript
leatherKnapping.removeRecipe(salida ItemStack);
leatherKnapping.removeRecipe(String registryName);
```

## Ejemplo
```zenscript
// quiver receta
leatherKnapping.addRecipe("recipe", <tfc:quiver>, " XXXX", "X XXX", "X XXX", "X XXX", "X XXX", " XXXX");
```