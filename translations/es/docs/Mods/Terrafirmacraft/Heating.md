# Calefacción

## Paquete
```zenscript
import mods.terrafirmacraft.Heating;Calentamiento;
```

## Adicional

```zenscript
Heating.addRecipe(String registryName, IItemStack entrada, IItemStack salida, transformTemp, float maxTemp);
```
- transformTemp es a qué temperatura la receta transforma completamente la entrada en la pila de salida.
- maxTemp es la temperatura a la que la entrada es destruida. Para una referencia completa, consulte [Temperaturas de calefacción](/Mods/Terrafirmacraft/HeatingTemperatures)

## Eliminar

```zenscript
Heating.removeRecipe(Salida IItemStack);
Heating.removeRecipe(String registryName);
```