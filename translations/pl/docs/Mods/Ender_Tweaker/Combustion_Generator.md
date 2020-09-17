# Generator spalania

## Pakiet

`importuj mods.enderio.CombustionGen;`

## Metody

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) paliwo** Płynne paliwo do dodania.
- **int powerPerCycleRF** Ilość energii wytworzonej na tick w maszynie bazowej.
- **int totalBurnTime** Całkowity czas spalenia jednego wiadra paliwa.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) chłodzący** Ciecz do dodania.
- **float degreesCoolingPerMB** Ile ciepła w generatorze może jeden mB dodanego absorbentu czynnika chłodzącego, dopóki się nie nagrzesz?

## Dodaj paliwo

```zenscript
mods.enderio.CombustionGen.addFuel(ILiquidStack fuel, int powerPerCycleRF, int total alBurnTime);

mods.enderio.CombustionGen.addFuel(<liquid:lava>, 25, 40);
```

## Dodaj Chłodzenie

```zenscript
mods.enderio.CombustionGen.addCoolant(ILiquidStack płyn chłodzący, pływający stopniCoolingPerMB);

mods.enderio.CombustionGen.addCoolant(<liquid:liquid_sunshine>, 100);
```

## Usuń paliwo

```zenscript
mods.enderio.CombustionGen.removeFuel(ILiquidStack fuel);

mods.enderio.CombustionGen.removeFuel(<liquid:fire_water>);
```

## Usuń Chłodzenie

```zenscript
mods.enderio.AlloySmelter.removeCoolant(ILiquidStack coolant);

mods.enderio.AlloySmelter.removeCoolant(<liquid:water>);
```