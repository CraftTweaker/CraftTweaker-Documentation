# Zasilane rzeczy :: Piec napędzany

### Importowanie

```zenscript
importuj mods.poweredthingies.Tweaker.poweredKilnTweaker jako pkt;
```

### Lista kluczy, usuwanie przepisów przez klucz, czyszczenie

```zenscript
pkt().logKeys()
pkt().removeRecipe('minecraft:planks') // sprawdź <logKeys> wyjście dla prawidłowych kluczy
pkt().clear()
```

### Dodawanie przepisu

##### Podpis

```zenscript
addRecipe(input: IItemStack, output: IItemStack)
```

##### Przykład

```zenscript
pkt().addRecipe(<minecraft:bucket>, <minecraft:iron_ingot>);
```

### Uwagi

Wszystkie te działania zostaną zapisane w pamięci podręcznej i uruchomione po zakończeniu rejestracji domyślnego rejestru dla tego komputera (w tym tych z niestandardowych jsonów).