# Flüssige Brennstoffe

Flüssige Brennstoffe werden in PneumaticCraft: Repressurized in the (Advanced) Liquid Compressor, um Druckluft zu erzeugen, und (optional) in der Kerosenlampe, um Licht zu erzeugen. Standardmäßig werden die in der Raffinerie produzierten Flüssigkeiten als Kraftstoff sowie Flüssigkeiten über einer Temperatur von 305 Grad Kelvin definiert.

## Anruf

Sie können das Liquid Fuels Paket mit `mods.pneumaticcraft.liquidfuel` aufrufen.

## Entfernen

Diese Funktion dereguliert den [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `Flüssigkeit` als Brennstoff:

```zenscript
mods.pneumaticcraft.liquidfuel.removeFuel(ILiquidStack Fluid);
// Beispiel
mods.pneumaticcraft.liquidfuel.removeFuel(<liquid:lpg>);
```

Diese Funktion Dereguliert *alle* registrierten Brennstoffe:

```zenscript
mods.pneumaticcraft.liquidfuel.removeAllFuels();
```

## Hinzufügen

Die folgenden Funktionen können verwendet werden, um Flüssigkeiten zur Kraftstoffregistry hinzuzufügen:

```zenscript
// Registrieren Sie eine bestimmte Flüssigkeit als Kraftstoff. mlPerBucket definiert die Menge der Druckluft pro Eimer. 16000 mL Luft wird aus einem Stück Kohle in einem Kompressor.
mods.pneumaticcraft.liquidfuel.addFuel(ILiquidStack fluid, double mlPerBucket);

// Beispiel: Register Wasser als Brennstoff, der 16000mL Luft pro Eimer erzeugt.
mods.pneumaticcraft.liquidfuel.addFuel(<liquid:water>, 16000);
```