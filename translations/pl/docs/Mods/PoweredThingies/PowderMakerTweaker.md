# Zasilane rzeczy :: Wytwórca proszków

### Importowanie

```zenscript
importuj mods.poweredthingies.Tweaker.powderMakerTweaker w pmt;
```

### Lista kluczy, usuwanie przepisów przez klucz, czyszczenie

```zenscript
pmt().logKeys()
pmt().removeRecipe('minecraft:gravel') // sprawdź wyjście <logKeys> dla prawidłowych kluczy
pmt().clear()
```

### Dodawanie przepisu

##### Podpis

```zenscript
addRecipe(input: IItemStack, outputs: Array<WeightedItemStack>)
```

##### Przykład

```zenscript
pmt().addRecipe(<minecraft:bucket>, [<minecraft:iron_ingot> % 100, <minecraft:iron_ingot> % 12, <minecraft:iron_ingot> % 12]);
```

### Uwagi

Wszystkie te działania zostaną zapisane w pamięci podręcznej i uruchomione po zakończeniu rejestracji domyślnego rejestru dla tego komputera (w tym tych z niestandardowych jsonów).