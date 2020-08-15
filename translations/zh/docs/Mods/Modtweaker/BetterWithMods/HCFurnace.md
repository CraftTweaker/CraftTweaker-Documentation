# HCFurnace

HCFurnace特性使得熔炉配方可能需要不同的时间，这取决于熔炼中的物项。 这不会影响燃料的运转，意味着某些配方或多或少需要燃料。

允许设置工单中的时间，它需要特定的炉配方根据其输入项熔炼。

```zenscript
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(IIngredient component, int time)

  //Make a potato take 大约83分钟来熔炼, 因为为为什么不是
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(<minecraft:potato>100000)； 
```