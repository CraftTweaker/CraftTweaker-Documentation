# Zasilane rzeczy :: Spalacz płynny :: Chłodzenie

### Importowanie

```zenscript
importuj mods.poweredthingies.Tweaker.fluidBurnerCoolantTweaker jako czynnik chłodzący;
```

### Lista kluczy, usuwanie przepisów przez klucz, czyszczenie

```zenscript
chłodziwa().logKeys()
coolant().removeRecipe('teslathingies:fluid_tf-molten_tesla') // sprawdź <logKeys> wyjście dla ważnych klawiszy
chłodziwa().clear()
```

### Dodawanie przepisu

##### Podpis

```zenscript
addCoolant(płyn: ILiquidStack, timeMultiplier: Float)
```

`Mnożnik czasowy` to wartość, która zostanie użyta do zwiększenia (lub zmniejszenia) liczby ticków, na które paliwo zostanie spalone.

##### Przykład

```zenscript
chłodziwa().addCoolant(<liquid:tf-sewage> * 50, 1.1);
```

### Uwagi

Wszystkie te działania zostaną zapisane w pamięci podręcznej i uruchomione po zakończeniu rejestracji domyślnego rejestru dla tego komputera (w tym tych z niestandardowych jsonów).