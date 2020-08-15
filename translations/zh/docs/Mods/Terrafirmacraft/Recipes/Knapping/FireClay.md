# FireClay Knapping

## 所属包名
```zenscript
导入 mods.terrafirmacraft。FireClayKnapping;
```

## 添加配方

```zenscript
FireClayKnapping.addRecipe(String registryName, IItemStack 输出, String... pattern)
```

## 删除配方

```zenscript
FireClayKnapping.removeRecipe(IItemStack 输出);
FireClayKnapping.removeRecipe(注册表名称);
```

## 例子
```zenscript
// 为enderio 管道添加FireClay knapping 配方
FireClayKnapping。 ddRecipe("enderio/item_conduit_binder", <enderio:item_material:22>*2, 
" X",
" XX",
" XX",
" XX",
"XXX");
```