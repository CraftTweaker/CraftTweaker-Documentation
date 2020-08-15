# Altar of Birthing

## Pacchetto
```zenscript
mods.naturesaura.AnimalSpawner
```

## Metodi
- **String Name**
- **String Entity** Name of the entitiy to spawn
- **int aura** The amount of Aura required for the completion of the recipe
- **int time** The time processes take in ticks
- **[IIngredient[]](/Vanilla/Variable_Types/IIngredient) ingredients** The inputs

## Addizione

```zenscript
mods.naturesaura.AnimalSpawner.addRecipe(String name, String entity, int aura, int time, IIngredient[] ingredients)
```

## Rimozione

```zenscript
mods.naturesaura.AnimalSpawner.removeRecipe(String name)
```