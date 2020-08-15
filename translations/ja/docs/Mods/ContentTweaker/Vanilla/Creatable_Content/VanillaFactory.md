# バニラ工場

The Vanilla Factory allows you to create [Blocks](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/), [Items](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) and [Creative Tabs](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) that you can then add to the game.

## 発信中

`mods.contenttweaker.VanillaFactory`

## コンテンツの作成

### ブロックを作成

```zenscript
mods.contenttweaker.VanillaFactory.createBlock(Scring unlocalizedName, IMaterialDefinition material);
```

パラメータ:

- String unlocalizedName: ブロックのローカライズされていない名前。
- [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) material: ブロックが作られているベース材料。

[BlockRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) オブジェクトを返します。 詳細とスクリプトの例については、 [Block ページ](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) を参照してください。

### アイテムを作成

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

パラメータ:

- String unlocalizedName: 項目のローカライズされていない名前。

[ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) オブジェクトを返します。 詳細とスクリプトの例については、 [アイテム ページ](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) を確認してください!

### クリエイティブタブを作成

```zenscript
mods.contentTweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation iItem);
mods.contenttweaker.VanillaFactory.creativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackersupplier);
```

パラメータ:

- String unlocalizedName: タブのローカライズされていない名前。
- アイテムまたはブロックの表示: タブのシンボルとして表示されるアイテム/ブロック。 代わりに、 [IItemStackSupplier 関数](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/) を使用することもできます。

[ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) オブジェクトを返します。 詳細とスクリプト例については、 [Creative Tab ページ](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) を参照してください!

### 流体を作成

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

パラメータ:

- String unlocalizedName: Fluidのローカライズされていない名前。
- int color: 流体の色コード。
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color: 色オブジェクトとしての流体の色。

[FluidRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/) オブジェクトを返します。 詳細とスクリプト例については、 [流体ページ](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/) を確認してください。

### 食料品を作る

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(Scing unlocalizedName, int healAmount);
```

パラメータ:

- String unlocalizedName: 項目のローカライズされていない名前。
- int healAmount: 食品値

[ItemFoodRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) オブジェクトを返します。 詳細とスクリプトの例については、 [Food page](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) を参照してください。