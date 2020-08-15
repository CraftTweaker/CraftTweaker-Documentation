# FireClay Knapping

## Пакет
```zenscript
import mods.terrafirmacraft.FireClayKnapping;
```

## Сложение

```zenscript
FireClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern)
```

## Удаление

```zenscript
FireClayKnapping.removeRecipe(IItemStack output);
FireClayKnapping.removeRecipe(String registryName);
```

## Пример
```zenscript
// add fireClay knapping recipe for enderio conduit binder
FireClayKnapping.addRecipe("enderio/item_conduit_binder", <enderio:item_material:22>*2, 
"    X",
"   XX",
"  XXX",
" XXXX",
"XXXXX");
```