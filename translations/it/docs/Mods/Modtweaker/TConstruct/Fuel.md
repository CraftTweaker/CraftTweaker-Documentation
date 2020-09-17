# Carburante

Il pacchetto `Fuel` consente di aggiungere fluidi di combustibile Smeltery.

## Chiamata

Puoi chiamare il pacchetto Lega usando `mods.tconstruct.Fuel`

## Aggiungi Ricette Carburante

```zenscript
//mods.tconstruct.Fuel.registerFuel(ILiquidStack fuel, int duration);
mods.tconstruct.Fuel.registerFuel(<liquid:water> * 2, 300);
```

Parametri:

- [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) carburante → Il fluido. La quantità è l'incremento minimo che viene consumato contemporaneamente.
- int durata → Quante zecche il consumo del fluidoStack dura.

### Considera questo:

- La quantità [di ILiquidStack](/Vanilla/Liquids/ILiquidStack/) è l'incremento minimo che viene consumato contemporaneamente (ad esempio la fonderia consuma solo 2 mB contemporaneamente).
- La durata è di quante zecche una pila fluida dura.
- Non è possibile impostare la temperatura che il fluido sta per avere nella fonderia. Usa un [ILiquidDefinizione](/Vanilla/Liquids/ILiquidDefinition/) ZenSetter per cambiare prima la temperatura del fluido!