# Zasilane rzeczy :: Złożony maker

### Importowanie

```zenscript
importuj mods.poweredthingies.Tweaker.compoundTweaker jako ct;
```

### Lista kluczy, usuwanie przepisów przez klucz, czyszczenie

```zenscript
ct().logKeys()
ct().removeRecipe('minecraft:stone') // sprawdź wyjście <logKeys> dla prawidłowych kluczy
ct().clear()
```

### Dodawanie przepisu

##### Podpis

```zenscript
addRecipe(wyjście: IItemStack, po lewej: ILiquidStack?, góra: Array<IItemStack>?, po prawej: ILiquidStack?, dół: Array<IItemStack>?)
```

##### Przykład

```zenscript
ct().addRecipe(<minecraft:obsidian>, <liquid:lava> * 250, [<minecraft:cobblestone>, <minecraft:cobblestone>], null, [<minecraft:cobblestone>, <minecraft:cobblestone>]);
```

### Uwagi

Wszystkie te działania zostaną zapisane w pamięci podręcznej i uruchomione po zakończeniu rejestracji domyślnego rejestru dla tego komputera (w tym tych z niestandardowych jsonów).