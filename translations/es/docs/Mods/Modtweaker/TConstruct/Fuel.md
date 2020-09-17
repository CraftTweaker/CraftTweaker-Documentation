# Combustible

El paquete de `Petróleo` le permite añadir fluidos de combustible de Fundición.

## Llamando

Puedes llamar al paquete de Aleación usando `mods.tconstruct.Fuel`

## Añadir recetas de Petróleo

```zenscript
//mods.tconstruct.Fuel.registerFuel(combustible ILiquidStack, duración de int));
mods.tconstruct.Fuel.registerFuel(<liquid:water> * 2, 300);
```

Parámetros:

- [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) combustible → El fluido. La cantidad es el incremento mínimo que se consume a la vez.
- duración del int → Cuántos ticks dura el consumidor de fluidStack.

### Consideremos esto:

- La cantidad de [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) es el incremento mínimo que se consume a la vez (por ejemplo, la fundición solo consume 2 mB a la vez).
- La duración es cuántos ticks dura una pila de fluidos.
- No se puede fijar la temperatura que el fluido va a tener en la fundición. Usa un ZenSetter de [ILiquidDefinición](/Vanilla/Liquids/ILiquidDefinition/) para cambiar la temperatura del fluido de antemano!