# Zasilane rzeczy :: Płynny produkt

### Importowanie

```zenscript
importuj mods.poweredthingies.Tweaker.itemLiquefierTweaker jako ilt;
```

### Lista kluczy, usuwanie przepisów przez klucz, czyszczenie

```zenscript
ilt().logKeys()
ilt().removeRecipe('płyn:fluid_lava') // sprawdź wyjście <logKeys> dla prawidłowych kluczy
ilt().clear()
```

### Dodawanie przepisu

##### Podpis

```zenscript
addRecipe(input: IItemStack, output: ILiquidStack)
```

##### Przykład

```zenscript
ilt().addRecipe(<minecraft:bucket>, <liquid:lava> * 125);
```

### Uwagi

Wszystkie te działania zostaną zapisane w pamięci podręcznej i uruchomione po zakończeniu rejestracji domyślnego rejestru dla tego komputera (w tym tych z niestandardowych jsonów).