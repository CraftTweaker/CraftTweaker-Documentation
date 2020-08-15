# Segheria

## Pacchetto

```java
import mods.ic2.Sawmill;
```

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**

### Addizione

```zenscript
mods.ic2.Sawmill.addRecipe(IItemStack output, IIngredient input);

mods.ic2.Sawmill.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

### Rimozione

Per rimuovere una ricetta già esistente, basta disabilitare la ricetta corrispondente in `config/ic2/ic2machineRecipes.json`.