# FeuerTon Knacken

## Paket
```zenscript
importieren Sie mods.terrafirmacraft.Feuer-Klayknapping,
```

## Addition

```zenscript
FireClayKnapping.addRecipe(String RegistryName, IItemStack Ausgabe, String... Muster)
```

## Entfernen

```zenscript
FireClayKnapping.removeRecipe(IItemStack Ausgabe);
FireClayKnapping.removeRecipe(String RegistryName);
```

## Beispiel
```zenscript
// Füge ein FireClayknapp-Rezept für den Enderio-Schlauchbinder
FireClayKnapping. ddRecipe("enderio/item_conduit_binder", <enderio:item_material:22>*2, 
" X",
" XX",
" XXX",
" XXXXXX",
"XXXXX");
```