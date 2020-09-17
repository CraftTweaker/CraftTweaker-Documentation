# BracketHandler

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.BracketHandlers
```

## メソッド
### getBlockMaterial

指定された [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) を取得します。 例外が見つからない場合はスローします。

 戻り値: ` [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)`

戻り値の型: [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

crafttweaker.api.BracketHandlers.getBlockMaterial(tokens as String);
crafttweaker.api.BracketHandlers.getBlockMaterial("earth");
```

| パラメータ | タイプ  | 説明             |
| ----- | ---- | -------------- |
| トークン  | 文字列型 | BEP呼び出しで何を書くか。 |


### getBlockState

指定された入力に基づいてブロック状態を作成します。 戻り値 `null` ブロックが見つからない場合は、無効なバリエーションは無視されました

 戻り値: `見つかったBlockState`

戻り値の型: [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

crafttweaker.api.BracketHandlers.getBlockState(tokens as String);
crafttweaker.api.BracketHandlers.getBlockState("minecraft:acia_planks");
```

| パラメータ | タイプ  | 説明                   |
| ----- | ---- | -------------------- |
| トークン  | 文字列型 | ブロックのリソースの場所とバリエーション |


### getDirectionAxis

名前に基づいて方向軸を取得します。 軸方向が見つからない場合はエラーをスローします。

 戻り値: `見つかった方向軸`

戻り値の型: [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

crafttweaker.api.BracketHandlers.getDirectionAxis(tokens as String);
crafttweaker.api.BracketHandlers.getDirectionAxis("x");
```

| パラメータ | タイプ  | 説明        |
| ----- | ---- | --------- |
| トークン  | 文字列型 | 軸のリソースの場所 |


### getEffect

レジストリ名に基づいて効果を取得します。 効果が見つからない場合はエラーをスローします。

 戻り値: `発見された効果`

戻り値の型: [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

crafttweaker.api.BracketHandlers.getEffect(tokens as String);
crafttweaker.api.BracketHandlers.getEffect("minecraft:haste");
```

| パラメータ | タイプ  | 説明         |
| ----- | ---- | ---------- |
| トークン  | 文字列型 | 効果のリソースの場所 |


### getEntityClassification

レジストリ名に基づいてエンティティ分類を取得します。 エラーをログに記録し、entityClassificationが見つからない場合は `null` を返します。

 戻り値: `見つかったentityClassification`

戻り値の型: [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
<entityclassification:monster>

crafttweaker.api.BracketHandlers.getEntityClassification(tokens as String);
crafttweaker.api.BracketHandlers.getEntityClassification("monster');
```

| パラメータ | タイプ  | 説明                           |
| ----- | ---- | ---------------------------- |
| トークン  | 文字列型 | entityClassificationのリソースの場所 |


### getEntityType

レジストリ名に基づいて entityType を取得します。 エラーをログに記録し、entityType が見つからない場合は `null` を返します。

 戻り値: `見つかったエンティティタイプ`

戻り値の型: [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

crafttweaker.api.BracketHandlers.getEntityType(tokens as String);
crafttweaker.api.BracketHandlers.getEntityType("minecraft:pig');
```

| パラメータ | タイプ  | 説明                |
| ----- | ---- | ----------------- |
| トークン  | 文字列型 | エンティティタイプのリソースの場所 |


### getFluidStack

レジストリ名に基づいて流体スタックを取得します。 流体が見つからない場合はエラーをスローします。

 戻り値: `a stack of the liquid with amount == 1mb`

戻り値の型: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

crafttweaker.api.BracketHandlers.getFluidStack(tokens as String);
crafttweaker.api.BracketHandlers.getFluidStack("minecraft:water");
```

| パラメータ | タイプ  | 説明            |
| ----- | ---- | ------------- |
| トークン  | 文字列型 | Fluidのリソースの場所 |


### getItem

レジストリ名に基づいてアイテムを取得します。 アイテムが見つからない場合はエラーをスローします。

 戻り値: `見つかった項目`

戻り値の型: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

crafttweaker.api.BracketHandlers.getItem(token as String);
crafttweaker.api.BracketHandlers.getItem("minecraft:dirt");
```

| パラメータ | タイプ  | 説明          |
| ----- | ---- | ----------- |
| トークン  | 文字列型 | アイテムのリソース位置 |


### getPotion

戻り値の型: [crafttweaker.api.potion.MCPotion](/vanilla/api/potions/MCPotion)

```zenscript
<potion:tokens>
crafttweaker.api.BracketHandlers.getPotion(tokens as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| トークン  | 文字列型 | 説明が提供されていません |


### getRecipeManager

レジストリ名に基づいてrecipeManagerを取得します。 レシピマネージャが見つからない場合はエラーをスローします。 指定されたレシピタイプが見つからない場合は、促進をスローします。 <p> これは常にIRecipeManagerを返します。<br> BEPもありますが、動作が異なるため、ここでは自動的にドキュメントに追加することはできません。 しかし、BEPは他のBEPと同じに見えます: `<recipetype:minecraft:crafting>`

 戻り値: `見つかったrecipeManager`

戻り値の型: [crafttweaker.api.registrries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
crafttweaker.api.BracketHandlers.getRecipeManager(tokens as String);
crafttweaker.api.BracketHandlers.getRecipeManager("minecraft:craft");
```

| パラメータ | タイプ  | 説明             |
| ----- | ---- | -------------- |
| トークン  | 文字列型 | レシピ管理者のリソースの場所 |


### getResourceLocation

トークンに基づいてリソースの場所を作成します。 トークンが有効な場所でない場合はエラーをスローします。

 戻り値: `場所`

戻り値の型: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

crafttweaker.api.BracketHandlers.getResourceLocation(token as String);
crafttweaker.api.BracketHandlers.getResourceLocation("minecraft:dirt");
```

| パラメータ | タイプ  | 説明      |
| ----- | ---- | ------- |
| トークン  | 文字列型 | リソースの場所 |


### getTag

レジストリ名に基づいてタグを取得します。 何も見つからない場合、空のタグが作成されます。<br> ただし、そのような場合は、そのタグを適切なタイプとして登録する必要があります。

 戻り値: `見つかったタグ、または新しく作成されたタグ`

戻り値の型: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
<tag:tag:minecraft:wool>

crafttweaker.api.BracketHandlers.getTag(tokens as String);
craftweaker.api.BracketHandlers.getTag("tag:minecraft:wool");
```

| パラメータ | タイプ  | 説明         |
| ----- | ---- | ---------- |
| トークン  | 文字列型 | タグのリソースの場所 |


### getTextFormatting

戻り値の型: [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting)

```zenscript
<formatting:tokens>
crafttweaker.api.BracketHandlers.getTextFormating(tokens as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| トークン  | 文字列型 | 説明が提供されていません |



