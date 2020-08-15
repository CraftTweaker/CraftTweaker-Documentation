# Wykrywanie FireClay

## Pakiet
```zenscript
importuj mods.terrafirmacraft.Pieczenie FireClayKpieping;
```

## Dodanie

```zenscript
FireClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern)
```

## Usuwanie

```zenscript
FireClayKnapping.removeRecipe(wyjście IItemStack);
FireClayKnapping.removeRecipe(Rejestr string);
```

## Przykład
```zenscript
// dodaj przepis na glinianą glinianą receptę na spoiwo przewodnika enderio
FireClayKnapping. ddRecipe("enderio/item_conduit_binder", <enderio:item_material:22>*2, 
" X",
" XX",
" XXX",
" XXXX",
"XXXXX");
```