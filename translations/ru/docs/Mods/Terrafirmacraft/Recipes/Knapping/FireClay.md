# Привязка к FireClay

## Пакет
```zenscript
import mods.terrafirmacraft.Огненный Клейкинг;
```

## Сложение

```zenscript
Рецепт FireClayKnapping.addRecipe(tring registryName, IItemStack, String... pattern)
```

## Удаление

```zenscript
FireClayKnapping.removeRecipe(выход IItemStack);
FireClayKnapping.removeRecipe(String registryName);
```

## Пример
```zenscript
// добавляем рецепт межсетевого связывания fireClay для enderio канала
FireClayKnapping. ddRecipe("enderio/item_conduit_binder", <enderio:item_material:22>*2, 
" X",
" XX",
" XXX",
" XXXX",
"XXXXX");
```