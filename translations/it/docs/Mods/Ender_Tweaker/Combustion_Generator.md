# Generatore Di Combustione

## Pacchetto

`import mods.enderio.CombustionGen;`

## Metodi

- **[ILiquididStack](/Vanilla/Liquids/ILiquidStack/) fuel** Il combustibile fluido da aggiungere.
- **int powerPerCycleRF** Quantità di energia creata per tick in una macchina di linea di base.
- **int totalBurnTime** Tempo di combustione totale di un secchio di carburante.
- **[ILiquididStack](/Vanilla/Liquids/ILiquidStack/) coolant** The fluid coolant to add.
- **float degreesCoolingPerMB** Quanto calore nel generatore può assorbire un mB del refrigerante aggiunto fino a quando non si riscalda tutto il modo?

## Aggiungi Carburante

```zenscript
mods.enderio.CombustionGen.addFuel(ILiquidStack fuel, int powerPerCycleRF, int totalBurnTime);

mods.enderio.CombustionGen.addFuel(<liquid:lava>, 25, 40);
```

## Aggiungi Raffreddante

```zenscript
mods.enderio.CombustionGen.addCoolant(ILiquidStack fluido refrigerante, float degreesCoolingPerMB);

mods.enderio.CombustionGen.addCoolant(<liquid:liquid_sunshine>, 100);
```

## Rimuovi Carburante

```zenscript
mods.enderio.CombustionGen.removeFuel(ILiquidStack fuel);

mods.enderio.CombustionGen.removeFuel(<liquid:fire_water>);
```

## Rimuovi Raffreddante

```zenscript
mods.enderio.AlloySmelter.removeCoolant(ILiquidStack coolant);

mods.enderio.AlloySmelter.removeCoolant(<liquid:water>);
```