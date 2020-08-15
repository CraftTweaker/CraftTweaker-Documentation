# Płyny XP

Płyny XP są używane w PneumaticCraft: Ponownie pod ciśnieniem przez Aerial Interface, potężny blok, który może zdalnie łączyć się z połączonym graczem. Płyny XP pompowane do interfejsu antenowego są przekształcane na poziomy doświadczenia gracza, a płyny XP wypompowane są z doświadczenia gracza.

Domyślnie następujące płyny są rozpoznawane przez interfejs lotniczy:

* Sok XP (EnderIO, Cyclic, Openblocks)
* Esencja wiedzy (rozwój termiczny)
* Esencja mobów (Foregoing Industrial Foregoing)

Pakiet ten umożliwia korzystanie z innych arbitralnych płynów przez interfejs antenowy jako płynów XP lub wyrejestrowanie istniejących płynów XP.

## Dzwonienie

Możesz wywołać pakiet płynów XP używając `mods.pneumaticcraft.xpflu`.

## Usuwanie

Ta funkcja wyłącza [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `płyn`:

```zenscript
mods.pneumaticcraft.xpfluid.removeXPFluid(ILiquidStack);
// Przykład
mods.pneumaticcraft.xpfluid.removeXPFluid(<liquid:xpjuice>);
```

Ta funkcja wyłącza *wszystkie* znane płyny XP:

```zenscript
mods.pneumaticcraft.xpfluid.removeAllXPFluids();
```

## Dodawanie

Ta funkcja może być używana do rejestrowania płynów jako płynów XP:

```zenscript
// Zarejestruj ciecz jako płyn PD. xpRatio definiuje ilość PD gracza na milibukiet płynu.
mods.pneumaticcraft.xpfluid.addXPFluid(ILiquidStack płyn, podwójny stosunek);

// Przykład: zarejestruj LPG jako płyn XP o wartości 10 XP na mB
mods.pneumaticcraft.xpfluid.addXPFluid(<liquid:lpg>, 10);
```