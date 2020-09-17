# Lehmknabe

## Paket
```zenscript
importieren Sie mods.terrafirmacraft.ClayKnapping;
```

## Addition

```zenscript
ClayKnapping.addRecipe(String RegistryName, IItemStack Ausgabe, String... Muster);
```

## Entfernen

```zenscript
ClayKnapping.removeRecipe(IItemStack Ausgabe);
ClayKnapping.removeRecipe(String RegistryName);
```

## Beispiel
```zenscript
ClayKnapping.addRecipe("unfired_vessel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```