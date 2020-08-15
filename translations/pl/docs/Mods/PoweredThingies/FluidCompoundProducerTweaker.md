# Zasilane rzeczy: producent związków płynnych

### Importowanie

```zenscript
importuj mods.poweredthingies.Tweaker.fluidCompoundTweaker jako fct;
```

### Lista kluczy, usuwanie przepisów przez klucz, czyszczenie

```zenscript
fct().logKeys()
fct().removeRecipe('płyn:fluid_tf-molten_tesla') // sprawdź <logKeys> wyjście dla prawidłowych kluczy
fct().clear()
```

### Dodawanie przepisu

##### Podpis

```zenscript
addRecipe(output: ILiquidStack, inputA: ILiquidStack, inputB: ILiquidStack)
```

##### Przykład

```zenscript
fct().addRecipe(<liquid:tf-sewage> * 150, <liquid:water> * 300, <liquid:lava> * 100);
```

### Uwagi

Wszystkie te działania zostaną zapisane w pamięci podręcznej i uruchomione po zakończeniu rejestracji domyślnego rejestru dla tego komputera (w tym tych z niestandardowych jsonów).