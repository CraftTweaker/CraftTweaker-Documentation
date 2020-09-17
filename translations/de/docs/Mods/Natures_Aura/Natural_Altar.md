# Natürlicher Altar

## Paket
```zenscript
mods.naturesaura.Alfred
```

## Methoden
- **Zeichenkettenname**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient) Input** Die Altareingabe.
- **[IItemStack](/Vanilla/Items/IItemStack) Ausgabe** Die Altarausgabe.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) Katalysator** Der Katalysator Block, der an einem der vier Eckblöcke platziert ist, kann null sein
- **int Aura** die für die Fertigstellung des Rezeptes erforderlich ist
- **Int-Zeit** Die Zeitprozesse nehmen Ticks ein

## Addition

```zenscript
mods.naturesaura.Altar.addRecipe(String name, IIngredient Input, IItemStack Output, IIngredient catalyst, int aura, int time)
```

## Entfernen

```zenscript
mods.naturesaura.Altar.removeRecipe(IItemStack output)
```