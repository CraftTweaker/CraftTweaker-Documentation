# Brennstoff

Das `-Kraftstoff-` Paket erlaubt Ihnen das Hinzufügen von Schmelzkraftstoffflüssigkeiten.

## Anruf

Sie können das Legierungspaket mit `mods.tconstruct.Fuel` aufrufen

## Brennstoffrezepte hinzufügen

```zenscript
//mods.tconstruct.Fuel.registerFuel(ILiquidStack Kraftstoff, int Dauern);
mods.tconstruct.Fuel.registerFuel(<liquid:water> * 2, 300);
```

Parameter:

- [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Treibstoff → Die Flüssigkeit. Der Betrag ist der minimale Zuwachs, der auf einmal verbraucht wird.
- int Dauer → Wie viele Ticks das Verbrauchsmaterial des FluidStacks dauert.

### Man bedenke Folgendes:

- Der [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Betrag ist der minimale Zuwachs, der sofort konsumiert wird (z.B. das Schmelzen verbraucht nur 2 mB gleichzeitig).
- Die Dauer ist, wie viele Ticks ein Flüssigkeitstapel dauert.
- Sie können nicht die Temperatur festlegen, die die Flüssigkeit in der Schmelze haben wird. Verwende [ILiquidDefinition's](/Vanilla/Liquids/ILiquidDefinition/) ZenSetter um die Temperatur des Flüssigkeits vorher zu ändern!