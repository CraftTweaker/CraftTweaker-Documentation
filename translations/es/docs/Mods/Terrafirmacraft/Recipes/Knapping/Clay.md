# Tirador de arcilla

## Paquete
```zenscript
import mods.terrafirmacraft.ClayKnapping;ClayKnapping;
```

## Adicional

```zenscript
ClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## Eliminar

```zenscript
ClayKnapping.removeRecipe(salida ItemStack);
ClayKnapping.removeRecipe(String registryName);
```

## Ejemplo
```zenscript
ClayKnapping.addRecipe("unfired_(0)[video] ", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```