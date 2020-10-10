# Material Part Bracket Handler

Material Part Bracket Handlerを使用すると、ゲーム内のマテリアルパーツにアクセスできます。 取得できるのはゲームに登録されているマテリアルパーツに限られているため、スクリプトを読み込む順序に注意する必要があります。 取得できるのはゲームに登録されているマテリアルパーツに限られているため、スクリプトを読み込む順序に注意する必要があります。

Material Part Bracket handlerにおいて、マテリアルパーツは次のように参照されます。

```zenscript
<materialpart:material:part>

<materialpart:platinum:gear>
```

マテリアルパーツが見つかった場合、オブジェクトとしてMaterialPartDefinitionを返します。  
これは [IMaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/)と[IItemStack](/Vanilla/Items/IItemStack/)の両方のオブジェクトとして機能するオブジェクトであり、したがって両方のインターフェイスのメソッドは、返された定義において動作します。