# Soldadura del yunque

## Paquete
```zenscript
import mods.terrafirmacraft.Welding;Soldado;
```

## Adicional

```zenscript
Welding.addRecipe(String registryName, IIngredient input1, IIngredient input2, ItemStack output, int minTier);
```

## Eliminar

```zenscript
Solding.removeRecipe(salida IItemStack);
Welding.removeRecipe(String registryName);
```
- Como en el caso de las recetas de yunque, aquí se aplican las mismas reglas para los insumos. El valor de entrada debe ser forgeable (ver [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) para registrar la capacidad de forja a un artículo) y no puede ser apilado.