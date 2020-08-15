# Altar of Birthing

## Pakiet
```zenscript
mods.naturesaura.AnimalSpawner
```

## Metody
- **String Name**
- **String Entity** Name of the entitiy to spawn
- **int aura** The amount of Aura required for the completion of the recipe
- **int time** The time processes take in ticks
- **[IIngredient[]](/Vanilla/Variable_Types/IIngredient) ingredients** The inputs

## Dodanie

```zenscript
mods.naturesaura.AnimalSpawner.addRecipe(String name, String entity, int aura, int time, IIngredient[] ingredients)
```

## Usuwanie

```zenscript
mods.naturesaura.AnimalSpawner.removeRecipe(String name)
```