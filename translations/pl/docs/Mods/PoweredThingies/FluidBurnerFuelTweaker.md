# Zasilane Rzeczy: Wypalacz cieczy :: Paliwo

### Importowanie

```zenscript
importowanie mods.poweredthingies.Tweaker.fluidBurnerFuelTweaker jako paliwo;
```

### Lista kluczy, usuwanie przepisów przez klucz, czyszczenie

```zenscript
paliwo().logKeys()
paliwo().removeRecipe('płyn:fluid_lava') // sprawdź <logKeys> wyjście ważnych kluczy
paliwo().clear()
```

### Dodawanie przepisu

##### Podpis

```zenscript
addFuel(płyn: ILiquidStack, ticks: Int)
```

`ticki` reprezentują liczbę ticków, na którą spali określone paliwo.

##### Przykład

```zenscript
paliwo().addFuel(<liquid:tf-sewage> * 50, 100);
```

### Uwagi

Wszystkie te działania zostaną zapisane w pamięci podręcznej i uruchomione po zakończeniu rejestracji domyślnego rejestru dla tego komputera (w tym tych z niestandardowych jsonów).