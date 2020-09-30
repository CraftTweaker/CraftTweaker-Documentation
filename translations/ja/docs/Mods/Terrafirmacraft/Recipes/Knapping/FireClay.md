# FireClay Knapping

## Package
```zenscript
import mods.terrafirmacraft.FireClayKnapping;FireClayKnapping;
```

## 追加

```zenscript
FireClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern)
```

## 削除

```zenscript
FireClayKnapping.removeRecipe(IItemStack output);
FireClayKnapping.removeRecipe(String registryName);
```

## 例
```zenscript
// add fireClay knapping recipe for enderio conduit binder
FireClayKnapping.addRecipe("enderio/item_conduit_binder", <enderio:item_material:22>*2, 
"    X",
"   XX",
"  XXX",
" XXXX",
"XXXXX");
```