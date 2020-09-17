# Pomocnik Diesla

Pakiet dotyczący obsługi silników wysokoprężnych może być wykorzystywany do zmiany paliwa IE.

## Wezwanie do pakietu

Możesz wywołać pakiet DieselHandler używając `mods.immersiveengineering.DieselHandler`.

## Dodaj paliwo

| Wymagane | Typ     | Typ danych                                   |
| -------- | ------- | -------------------------------------------- |
| Wymagane | Wyjście | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Wymagane | Input   | Liczba całkowita                             |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.DieselHandler.addFuel(ILiquidStack fuel, int time);

mods.immersiveengineering.DieselHandler.addFuel(<liquid:water>, 2000);
```

## Usuń paliwo

| Wymagane | Typ     | Typ danych                                   |
| -------- | ------- | -------------------------------------------- |
| Wymagane | Wyjście | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.DieselHandler.removeFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeFuel(<liquid:water>);
```

## Dodaj paliwo wiertnicze

| Wymagane | Typ     | Typ danych                                   |
| -------- | ------- | -------------------------------------------- |
| Wymagane | Wyjście | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.DieselHandler.addDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.addDrillFuel(<liquid:water>);
```

## Usuń paliwo wiertnicze

| Wymagane | Typ     | Typ danych                                   |
| -------- | ------- | -------------------------------------------- |
| Wymagane | Wyjście | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.DieselHandler.removeDrillFuel(ILiquidStack);

mods.immersiveengineering.DieselHandler.removeDrillFuel(<liquid:water>);
```