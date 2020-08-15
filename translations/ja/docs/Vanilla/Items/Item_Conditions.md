# アイテム条件

通常のアイテムがカットされない場合があります。

時々、入力項目が条件を満たすときにのみ機能するレシピを指定したいと思うことがあります。

NBT-Tagやダメージ値などの特殊なアイテムを作るレシピを指定したい場合もあります。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IItemCondition;`

## 入力条件

これらは、結果として得られるアイテムを作成するために使用できるアイテムに影響します。 修飾キーを組み合わせてダメージとNBTタグを組み合わせることができます

```zenscript
<minecraft:iron_pickaxe>.onlyDamaged().withTag({display: {Lore: "We all butterflies?"}});
```

### ダメージ

#### anyDamage

入力アイテムのダメージ値はレシピには関係ありません

```zenscript
item.anyDamage()
```

#### のみ破損しました

入力アイテムが破損している必要があります

```zenscript
item.onlyDamaged();
```

#### 少なくとも破損しています

入力項目のダメージ値は、指定された `値`  
`値` は int である必要があります

```zenscript
item.onlyDamageAtLeast(value);
```

#### 最大ダメージ

入力項目のダメージ値は、指定された `値`  
`値` は、int である必要があります

```zenscript
item.onlyDamageAtMost(value);
```

#### ダメージ間隔

Input item's damage value needs to be between the speciefied `value1` and `value2`  
`Value1` is an int  
`Value2` is an int

```zenscript
item.onlyDamageBetween(value1, value2);
```

### アイテムを取り戻す、またはアイテムの再利用を明示的に禁止する

時々、入力項目の一部を取り戻すレシピが必要になることがあります。  
`transformDamage(int)` を適用することで、そのようなレシピを作成できます。

#### transformDamage

The input item will receive `value` damage points and you will get it back, unless it breaks during the crafting process.  
`Value` is an int

```zenscript
item.transformDamage(value);
```

### NBTタグ

時には、特定のNBTタグが必要になることがあります。 レシピは指定されたもの以外のNBTタグがあるかどうかは気にしません だから、特定の伝承を持つつるはしも魅了されるかもしれません!

`withTag` jei を使用すると、 `onlyWithTag`を使用すると、jei はタグなしのアイテムのみを表示します!

`NBTTag` は NBT データです。

```zenscript
item.withTag(NBTData);
item.onlyWithTag(NBTTag);

<minecraft.iron_pickaxe>.onlyWithTag({display: {Name: "Pickle the Pickleberry"}});
<minecraft.iron_pickaxe>.withTag({display: {Name: "Pickle the Pickleberry"}});
```

## 出力の変更

入力条件を指定できる場合、出力条件を定義したり、出力修飾子を定義したりすることはそれほど難しくありません。

### ダメージ

出力アイテムには `値の` ダメージポイントがあります。  
値の`値の` はintです。

```zenscript
item.withDamage(value);
```

### NBTタグ

あなたの出力アイテムは `NBTTag` を NBT-Tag.  
`NBTTag` は NBT データです。

```zenscript
item.withTag(NBTTag);

<minecraft:iron_pickaxe>.withTag({display: {Name: "Pickle the Pickleberry"}})
```

## 自分のアイテム条件を登録

独自のアイテム条件を追加することもできます。 これらは、 [項目](/Vanilla/Items/IItemStack/) 自体を単一のパラメータとして受け入れる特別な関数です。

```zenscript
conditionedItem = item.only(function(item) {return true;});
```

この関数は、項目が条件に一致した場合、true の bool を返す必要があります。