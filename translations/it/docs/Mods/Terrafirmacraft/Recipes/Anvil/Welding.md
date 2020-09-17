# Saldatura Incudine

## Pacchetto
```zenscript
import mods.terrafirmacraft.Saldatura;
```

## Addizione

```zenscript
Welding.addRecipe(String registryName, IIngredient input1, IIngredient input2, IItemStack output, int minTier);
```

## Rimozione

```zenscript
Welding.removeRecipe(IItemStack output);
Welding.removeRecipe(String registryName);
```
- Come per le ricette di incudin, qui si applicano le stesse regole per l'input. L'input deve essere forgeable(vedi [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) per registrare la capacità di forgiatura a un elemento) e non può essere impilato.