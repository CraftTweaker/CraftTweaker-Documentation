# Pérdida

## Paquete
```zenscript
import mods.terrafirmacraft.Loom;Acero;
```

## Adicional

```zenscript
Loom.addRecipe(String registryName, IIngredient entrada, IItemStack salida, int steps, String loomTexture);
```
- los pasos son el número de pasos necesarios para completar la receta. Es el número de veces que el jugador tiene que hacer clic en el telar, cada movimiento del ciclo avanza un paso. Dentro de TFC, esto es lo mismo que el número de artículos necesarios para la receta, pero no es necesario que lo sea.
- loomTexture is a path (`ResourceLocation`) to a texture file, to be used to display on the loom in the world. (For example, "minecraft:textures/blocks/wool_colored_white.png" references the vanilla texture for white wool). Si estás usando texturas personalizadas necesitas alguna forma de carga de datos/recursos (léase: un paquete de recurso) para que esto pueda referenciar tu textura correctamente.

## Eliminar

```zenscript
Loom.removeRecipe(salida IItemStack);
Loom.removeRecipe(String registryName);
```

## Ejemplo
```zenscript
Loom.addRecipe("burlap_cloth", <tfc:crop/product/jute_disc>, <tfc:crop/product/burlap_cloth>, "tfc:textures/blocks/devices/loom/product/burlap.png");
```