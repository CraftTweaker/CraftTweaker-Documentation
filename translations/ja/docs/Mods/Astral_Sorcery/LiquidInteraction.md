# LiquidInteraction

液体相互作用パッケージは、溶岩や液体スターライトなどの液体相互作用をASのシャリックに追加するために使用されます。

## パッケージのインポート

パッケージをインポートしたい場合は、次のようにします。

```zenscript
import mods.astralsorcery.LiquidInteraction;
```

## 相互作用を削除

This function removes the first recipe it finds that uses the given [liquids](/Vanilla/Liquids/ILiquidStack/) and returns the given output [stack](/Vanilla/Items/IItemStack/).  
If you leave out the output, it will remove the first recipe that uses the two given liquids regardless of their output.

```zenscript
//LiquidInteraction.removeInteraction(ILiquidStack liquid1, ILiquidStack liquid2, @Optional IItemStack output);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>, <minecraft:obsidian>);
```

## レシピの追加

カリス相互作用に液体の相互作用を加える。

[FluidStack](/Vanilla/Liquids/ILiquidStack/) amounts count as the amount of liquid that will be consumed if an interaction occurs.  
chance1 and chance2 define the chances the input fluids input1 and input2 are consumed respectively.  
weight determines how likely this is to be selected in comparison to the other liquid interactions registered for a given pair of fluid-inputs

```zenscript
//LiquidInteraction.addInteraction(ILiquidStack liquidIn1, float chanceConsumption1, ILiquidStack liquidIn2, float chanceConsumption2, int weight, IItemStack output);
LiquidInteraction.addInteraction(<liquid:lava> * 10, 0.1, <liquid:water> * 90, 0.2, 400, <minecraft:diamond>);
```