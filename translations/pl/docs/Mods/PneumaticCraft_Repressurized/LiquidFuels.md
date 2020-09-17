# Paliwa ciekłe

Paliwa ciekłe są stosowane w PneumaticCraft: Ponowne ciśnienie w (zaawansowanym) sprężarce do wytwarzania sprężonego powietrza oraz (opcjonalnie) w lampie rozdzielczej do wytwarzania światła. Domyślnie ciecze produkowane w rafinerii definiuje się jako paliwo, a także wszelkie ciecze o temperaturze powyżej 305 stopni Kelvina.

## Dzwonienie

Możesz wywołać pakiet paliw ciekłych używając `mods.pneumaticcraft.płynne paliwo`.

## Usuwanie

Ta funkcja wyłącza [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `płyn` jako paliwo:

```zenscript
mods.pneumaticcraft.liquidfuel.removeFuel(ILiquidStack);
// Przykład
mods.pneumaticcraft.liquidfuel.removeFuel(<liquid:lpg>);
```

Ta funkcja wyłącza *wszystkie* zarejestrowane paliwa:

```zenscript
mods.pneumaticcraft.liquidfuel.removeAllFuels();
```

## Dodawanie

Następujące funkcje mogą być wykorzystywane do dodawania płynów do rejestru paliw:

```zenscript
// Zarejestruj pewną ciecz jako paliwo. mlPerBucket definiuje ilość sprężonego powietrza produkowanego na wiadro paliwa. Do celów odniesienia 16000 ml powietrza jest wytwarzane z kawałka węgla w kompresorze powietrza.
mods.pneumaticcraft.płynne paliwo.addFuel(ILiquidStack, podwójny mlPerBucket);

// Przykład: zarejestruj wodę jako paliwo, które wytwarza 16000 ml powietrza na wiaderkę.
mods.pneumaticcraft.liquidfuel.addFuel(<liquid:water>, 16000);
```