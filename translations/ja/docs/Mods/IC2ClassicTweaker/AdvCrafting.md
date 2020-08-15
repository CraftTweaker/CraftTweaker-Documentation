# 高度なレシピ

## パッケージ

```zenscript
import mods.ic2.AdvRecipes;
```

## レシピタイプ
レシピにはいくつかのタイプがあります:

### 形状のレシピ
形をしたレシピはレシピで、どのアイテムがどのスロットに入るかが重要です。 たとえば、鉄のレギンスを作成するために、7つの異なるサイズの鉄インゴットを単に配置することはできません。 形状が重要なので、形状のレシピです。

### 形のないレシピ
シェイプレスレシピはレシピであり、クラフトグリッドに入れたアイテムだけがレシピであり、形状は重要ではありません。 例えば、青と黄色の染料は緑色の染料を作ります。 このレシピは、どのアイテムをどこに置くかは気にしません。

## レシピを追加

### addShaped
```zenscript
mods.ic2.AdvRecipes.addShaped(output,inputs);
```

`入力` を原材料として使用して `出力` のための形状のレシピを作成します。

`output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[\\] (see below)

`inputs` is a 2 Dimensional [IIngredient](/Vanilla/Variable_Types/IIngredient/) Array.  
So the recipe for Iron Leggings would be written as `[[iron,iron,iron],[iron,null,iron],[iron,null,iron]]`  
If that looks to confusing, try splitting the arrays up into one array per line
```zenscript
val iron = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

AdvRecipes.addShaped(leggings,
 [[iron * 5,iron * 7,iron * 5],
  [iron * 3,null,iron * 3],
  [iron,null,iron]]);
```

### addShapeless
```zenscript
mods.ic2.AdvRecipes.addShapeless(output,inputs)
```

`入力` を原材料として使用して `出力` のシェイプレス積み上げレシピを作成します。

`出力` は [IItemStack](/Vanilla/Items/IItemStack/) です  
`入力` は [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] (例 [<minecraft:dye:1>,<minecraft:dye:2>])

### addHidden
```zenscript
mods.ic2.AdvRecipes.addHiddenShapeless(IItemStack output, IIngredient[] foodents);
mods.ic2.AdvRecipes.addHiddenShaped(IItemStack output, IIngredient[][] foodents);
```

`入力` を非表示の材料として使用して `出力` の形状または形状のない積み重ねレシピを作成します。 
