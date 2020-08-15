# Altar der Geburt

## Paket
```zenscript
mods.naturesaura.Tierspawner
```

## Methoden
- **Zeichenkettenname**
- **Zeichenkette** Name der zu spawnenden Entität
- **int Aura** die für die Fertigstellung des Rezeptes erforderlich ist
- **Int-Zeit** Die Zeitprozesse nehmen Ticks ein
- **[Zutat[]](/Vanilla/Variable_Types/IIngredient) Zutaten** Die Eingänge

## Addition

```zenscript
mods.naturesaura.AnimalSpawner.addRecipe(String Name, String Entity, int aura, int time, IZutaten[] Zutaten)
```

## Entfernen

```zenscript
mods.naturesaura.AnimalSpawner.removeRecipe(String-Name)
```