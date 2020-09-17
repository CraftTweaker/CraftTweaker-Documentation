# サバイバリスト

## チョッピングブロック

### InputStack, OutputStack, {outputMultiplier}, {hitCountMultiplier}

```zenscript
gigaherz.survivalist.Choppable.addRecipe(IIngredient入力, IItemStack出力, outputMultiplier, hitCountMultiplier);
```

##### 例

```zenscript
gigaherz.survivalist.Choppable.addRecipe(<minecraft:bone>,<minecraft:dye:15>, 1.0, 1.0);
```

### OutputStack, {InputStack}

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(IIngredient出力, IIngredient入力);
```

##### 例

```zenscript
gigaherz.survivalist.Choppable.removeRecipe(<minecraft:stick>);
```

## ドライラック

### InputStack, OutputStack, Time in Tick

```zenscript
gigaherz.survivalist.Dryable.addRecipe(IIngredient input, IItemStack output, int time);
```

##### 例

```zenscript
gigaherz.survivalist.Dryable.addRecipe(<minecraft:rotten_flesh>, <minecraft:leather>, 300);
```

### OutputStack, {InputStack}

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(IIngredient出力, IIngredient入力);
```

##### 例

```zenscript
gigaherz.survivalist.Dryable.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```

#### InputStack は鉱石辞書にすることができ、{} に囲まれたものは任意です