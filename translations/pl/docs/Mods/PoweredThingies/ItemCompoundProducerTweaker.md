# Zasilane rzeczy :: producent produktu

### Importowanie

```zenscript
importuj mods.poweredthingies.Tweaker.itemCompoundProducerTweaker jako icp;
```

### Lista kluczy, usuwanie przepisów przez klucz, czyszczenie

```zenscript
icp().logKeys()
icp().removeRecipe('minecraft:mossy_cobblestone') // sprawdź wyjście <logKeys> dla prawidłowych kluczy 
icp().clear()
```

### Dodawanie przepisu

##### Podpis

```zenscript
addRecipe(inputStack: IItemStack, inputFluid: ILiquidStack, result: IItemStack)
```

##### Przykład

```zenscript
icp().addRecipe(<minecraft:cobblestone>, <liquid:water> * 125, <minecraft:mossy_cobblestone>);
```

### Uwagi

Wszystkie te działania zostaną zapisane w pamięci podręcznej i uruchomione po zakończeniu rejestracji domyślnego rejestru dla tego komputera (w tym tych z niestandardowych jsonów).