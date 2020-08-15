# Ambossschweißen

## Paket
```zenscript
importieren Sie mods.terrafirmacraft.Schweißen;
```

## Addition

```zenscript
Schweißen.addRecipe(String RegistryName, IIngredient input1, IIngredient input2, IItemStack Output, int minTier);
```

## Entfernen

```zenscript
Schweißen.removeRecipe(IItemStack Ausgabe);
Schweißen.removeRecipe(String RegistryName);
```
- Wie bei Ambossrezepten gelten hier die gleichen Regeln für den Eingang. Der Eingabewert muss unverständlich sein (siehe [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) zum Registrieren der Schmiedefähigkeit zu einem Item) und kann nicht gestapelt werden.