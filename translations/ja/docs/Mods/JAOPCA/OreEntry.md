# OreEntry

鉱石侵入は、金、ダイヤモンド、石炭、レッドストーンなどのような材料です。  
複数の [OreDictEntity](/Vanilla/OreDict/IOreDictEntry/), [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) を取得するために使用できます。

## メソッド

In general, the methods take a string parameter that is a prefix to be used.  
For example, an OreEntry for `"Gold"`, called with the prefix `"dust"` will return Gold Dust.  
For these examples, we will assume this was declared:  
The comments after the example calls will state what the method call can return (unless in the extra category).

```zenscript
val oreEntry = mods.jaopca.JAOPCA.getOre("Gold");
```

### エントリーのプロパティを取得する

以下のプロパティを取得できます。

```zenscript
oreEntry.energyModifier; //1.0 を double
oreEntry.rarity; //1.0 を double
oreEntry.oreType; //"INGOT" を string として
```

### OreName または OreNameSynonyms を取得

鉱石名は、それがどのように登録されているか、あなたがそれを取得するためにgetOreで何を使用するかが不可欠です。  
鉱石名の同義語は、modまたはパック作者が2つ以上の鉱石エントリを結合するために登録できる同義語です(e. を選択します。 "アルミ" と "アルミ") ほとんどの鉱山は登録されていないと思われます。 同義語の getter は、すべての同義語を文字列として含むリストを返します。

```zenscript
oreEntry.oreName; //"Gold"
oreEntry.oreNameSynonyms; //[]
```

### IOreDictEntry を取得

指定されたプレフィックスを持つ新しい [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) を返します。

```zenscript
oreEntry.getOreDictEntry("dust"); //<ore:dustGold>
```

### Get IItemStack

Returns a new [IItemStacks](/Vanilla/Items/IItemStack/) that matches the given prefix.  
You can provide an alternate fallback prefix to be used if no matching Item is found.

一致する項目が見つからず、(指定されている場合) フォールバックプレフィックスを使用して一致する項目が見つからない場合、それは `null` を返します。

```zenscript
//oreEntry.getItemStack(prefix);
oreEntry.getItemStack("coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid"); ///null

/oreEntry.getItemStack(prefix, fallback);
oreEntry.getItemStack("invalid", "coin"); //<jaopca:item_coingold>
ore.EntrgetItemStack("invalid", "faulty"); ///null
```

### Get ILiquidStack

Returns a new [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) that matches the given prefix.  
You can provide an alternate fallback prefix to be used if no matching Liquid is found.

一致する液体が見つからず、一致する液体が(指定されていれば)フォールバックプレフィックスを使用して見つからない場合、それは `null` を返します。

```zenscript
//oreEntry.getLiquidStack(prefix);
oreEntry.getLiquidStack("molt"); //<liquid:gold>
oreEntry.getLiquidStack("invalid"); ///null

/oreEntry.getLiquidStack(prefix, fallback);
oreEntry.getLiquidStack("invalid", "morten"); //<liquid:gold>
Entrorey.getLiquidStack("invalid", "faulty"); ///null
```

### 追加を取得

エントリには追加の登録が可能です。 例えば、一致する鉱石を粉砕するときに、追加の出力をすることができます。

You can either check if an entry has an extra, get the extra (or `null` if not present) or the extraName.  
You can also use the same methods as above (`getOreDictEntry`, `getLiquidStack` and `getItemStack`).

登録できる追加は3つまでです。 簡潔さのために、同等の方法についての例はありません。それらは以下のように述べられます。

```zenscript
//First extra
oreEntry.hasExtra; //true or false
oreEntry.extra; //matching oreEntry or null
oreEntry.extraName; //the name or null

//Methods for first extra
oreEntry.getOreDictEntryExtra(prefix);
oreEntry.getItemStackExtra(prefix);
oreEntry.getItemStackExtra(prefix, fallback);
oreEntry.getLiquidStackExtra(prefix);
oreEntry.getLiquidStackExtra(prefix, fallback);



//Second extra
oreEntry.hasSecondExtra; //true or false
oreEntry.secondExtra; //matching oreEntry or null
oreEntry.secondExtraName; //the name or null

//Methods for second extra
oreEntry.getOreDictEntrySecondExtra(prefix);
oreEntry.getItemStackSecondExtra(prefix);
oreEntry.getItemStackSecondExtra(prefix, fallback);
oreEntry.getLiquidStackSecondExtra(prefix);
oreEntry.getLiquidStackSecondExtra(prefix, fallback);



//Third extra
oreEntry.hasThirdExtra; //true or false
oreEntry.thirdExtra; //matching oreEntry or null
oreEntry.thirdExtraName; //the name or null

//Methods for third extra
oreEntry.getOreDictEntryThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix, fallback);
oreEntry.getLiquidStackThirdExtra(prefix);
oreEntry.getLiquidStackThirdExtra(prefix, fallback);
```