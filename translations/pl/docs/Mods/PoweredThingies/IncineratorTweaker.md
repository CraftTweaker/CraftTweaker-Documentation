# Zasilane rzeczy :: Spalarnia

### Importowanie

```zenscript
importuj mods.poweredthingies.Tweaker.incineratorTweaker jako ten;
```

### Lista kluczy, usuwanie przepisów przez klucz, czyszczenie

```zenscript
it().logKeys()
it().removeRecipe('minecraft:log') // sprawdź wyjście <logKeys> dla prawidłowych kluczy
it().clear()
```

### Dodawanie przepisu

##### Podpis

```zenscript
addRecipe(wejście: IItemStack, power: Long, wyjście: Array<WeightedItemStack>)
```

`moc` reprezentuje całkowitą liczbę jednostek mocy (RF, T lub FE), które element wejściowy będzie generował.

##### Przykład

```zenscript
it().addRecipe(<minecraft:bucket>, 3600, [<minecraft:iron_ingot> % 15]);
```

### Uwagi

Wszystkie te działania zostaną zapisane w pamięci podręcznej i uruchomione po zakończeniu rejestracji domyślnego rejestru dla tego komputera (w tym tych z niestandardowych jsonów).