# HCFurnace

HCFurnace機能により、炉のレシピは製錬中のアイテムに応じて様々な時間を要することができます。 これは、燃料がどのように働くかに影響しません、つまり、いくつかのレシピは、多かれ少なかれ燃料を取ることを意味します。

指定した炉のレシピを入力項目に基づいて精錬する時間を設定できます。

```zenscript
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(IIngredient 食材, int time)

  //ジャガイモを製錬するには約83分かかります。なぜなら、なぜ
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(<minecraft:potato>,100000); 
```