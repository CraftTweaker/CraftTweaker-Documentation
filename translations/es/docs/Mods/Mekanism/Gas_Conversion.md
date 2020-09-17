# Conversión de Objeto a Gas

A partir del Mekanism 9.7.5 ahora es posible tener un elemento personalizado a la conversión de gas en varias máquinas.

Si desea cambiar cualquiera de los valores de las conversiones incorporadas se recomienda que primero elimine la conversión y luego la añada de nuevo en lugar de sobrescribirla. Esto garantiza que elimina correctamente todos los datos como en el 9,7. no tiene una salida/manejo especificada de lo que sucede cuando un elemento se enumera dos veces.

## Adicional

```zenscript
mods.mekanism.GasConversion.register(ingrediente IIngredient, gas IGasStack);

mods.mekanism.GasConversion.register(<ore:sand>, <gas:liquidosmium> * 100);
```

## Eliminar

```zenscript
mods.mekanism.GasConversion.unregister(ingrediente IIngredient, gas IGasStack);

mods.mekanism.GasConversion.unregister(<ore:ingotOsmium>, <gas:liquidosmium>);
```

## Eliminando todas las conversiones

```zenscript
mods.mekanism.GasConversion.unregisterAll();
```