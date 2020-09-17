# Knapping de arcilla de fuego

## Paquete
```zenscript
import mods.terrafirmacraft.FireClayKnapping;FireClayKnapping;
```

## Adicional

```zenscript
FireClayKnapping.addRecipe(String registryName, ItemStack output, String... patrón)
```

## Eliminar

```zenscript
FireClayKnapping.removeRecipe(salida ItemStack);
FireClayKnapping.removeRecipe(String registryName);
```

## Ejemplo
```zenscript
// añade la receta de afeitado de fireClay para el binder de conductos enderio
FireClayKnapping. ddRecipe("enderio/item_conduit_binder", <enderio:item_material:22>*2, 
" X",
" XX",
" XXX",
" XXXX",
"XXXXX");
```