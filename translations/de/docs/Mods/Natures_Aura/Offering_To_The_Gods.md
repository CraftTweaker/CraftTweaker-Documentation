# Den Göttern anbieten

## Paket
```zenscript
mods.naturesaura.Angebot
```

## Methoden
- **Zeichenkettenname**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient) Eingabe** Das Angebot
- **int inputBetrag** Die Anzahl der Elemente, die für die Eingabe benötigt werden. Beachten Sie, dass dies bedeutet, dass die Menge der Eingabevariable ignoriert wird
- **[Ingredient](/Vanilla/Variable_Types/IIngredient) startItem** das zum Starten des Angebots erforderliche Element
- **[IItemStack](/Vanilla/Items/IItemStack) Ausgabe** Das Geschenk des Angebots

## Addition

```zenscript
mods.naturesaura.Offering.addRecipe(String name, IIngredient InputAmount, IIngredient startItem, IItemStack Ausgabe)
```

## Entfernen

```zenscript
mods.naturesaura.Offering.removeRecipe(IItemStack-Ausgabe)
```