# FireClay Knapping

## 所属包名
```zenscript
import mods.terrafirmacraft.FireClayKnapping;
```

## 添加配方

```zenscript
FireClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern)
```

## 删除配方

```zenscript
FireClayKnapping.removeRecipe(IItemStack output);
FireClayKnapping.removeRecipe(String registryName);
```

## 例子
```zenscript
// add fireClay knapping recipe for enderio conduit binder
FireClayKnapping.addRecipe("enderio/item_conduit_binder", <enderio:item_material:22>*2, 
"    X",
"   XX",
"  XXX",
" XXXX",
"XXXXX");
```