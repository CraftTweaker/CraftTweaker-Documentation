# Ritual des Waldes

## Paket
```zenscript
mods.naturesaura.TreeRitual
```

## Methoden
- **Zeichenkettenname**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) Setzungstyp** Die Gegenstandsdarstellung des Setzlings die platziert und zu einem Baum angebaut werden muss
- **[IItemStack](/Vanilla/Items/IItemStack) Ausgabe** Das Ergebnis der Rituale
- **Initzeit** Der Prozess dauert Ticks
- **[Zutat[]](/Vanilla/Variable_Types/IIngredient) Elemente** Die erforderlichen Elemente für das Ritual

## Addition

```zenscript
mods.naturesaura.BaumRitual.addRecipe(String name, IIngredient saplingType, IItemStack Ausgabe, Int-Zeit, IIngredient[] Artikel)
```

## Entfernen

```zenscript
mods.naturesaura.TreeRitual.removeRecipe(IItemStack output)
```