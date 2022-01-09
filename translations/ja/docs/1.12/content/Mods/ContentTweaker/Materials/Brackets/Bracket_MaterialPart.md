# Material Part Bracket Handler

Material Part Bracket Handlerを使用すると、ゲーム内のマテリアルパーツにアクセスできます。 取得できるのはゲームに登録されているマテリアルパーツに限られているため、スクリプトを読み込む順序に注意する必要があります。 取得できるのはゲームに登録されているマテリアルパーツに限られているため、スクリプトを読み込む順序に注意する必要があります。

Material Part Bracket handlerにおいて、マテリアルパーツは次のように参照されます。

```zenscript
<materialpart:material:part>

<materialpart:platinum:gear>
```

If the Material Part is found, this will return a MaterialPartDefinition Object.  
This is an object that acts as both, an [IMaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) as well as an [IItemStack](/Vanilla/Items/IItemStack/) object, so methods of both interfaces will work on the returned definition.