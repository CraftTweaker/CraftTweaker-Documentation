# FireClay Knapping

## Pacchetto
```zenscript
import mods.terrafirmacraft.FireClayKnapping;
```

## Addizione

```zenscript
FireClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern)
```

## Rimozione

```zenscript
FireClayKnapping.removeRecipe(IItemStack output);
FireClayKnapping.removeRecipe(String registryName);
```

## Esempio
```zenscript
// aggiungi la ricetta per il raccoglitore per conduit enderio
FireClayKnapping. ddRecipe("enderio/item_conduit_binder", <enderio:item_material:22>*2, 
" X",
" XX",
" XXX",
" XXXX",
"XXXXX");
```