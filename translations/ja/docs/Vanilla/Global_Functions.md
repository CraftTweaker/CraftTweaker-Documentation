# グローバル関数

グローバル関数とは、[インポート](/AdvancedFunctions/Import/)なしで呼び出せる関数のことです。  
定義されているものは次のとおりです。

## print

Crafttweakerのログに文字列を出力します。

```zenscript
//print(String message);
print("Hello World!");
```

返り値なし

## totalActions

```zenscript
//totalActions();
totalActions();
```

返り値はint型、登録されたグローバル関数の個数を表します。

## enableDebug

デバッグモードを有効にします。  
但し、[デバッグプリプロセッサ](/AdvancedFunctions/Preprocessors/DebugPreprocessor/)の使用を推奨します。

```zenscript
//enableDebug();
enableDebug();
```

返り値なし

## isNull

渡されたオブジェクトがnullかをチェックします。  
プリミティブ型に対しては動作しません。

```zenscript
//isNull(Object o);
isNull(<minecraft:dirt>);
```

返り値は真偽値型です。 注意: 思ったとおりに動かない場合、次の方法で真偽値型にキャストしてみてください。`<minecraft:dirt>as bool`

## instanceof

```zenscript
entity instanceof IEntity;
```

Returns a boolean

## max

```zenscript
//max(int number1, int number2);
max(10, 11);
```

Returns the larger number

## min

```zenscript
//min(int number1, int number2);
min(10, 11);
```

Returns the lower number

## pow

```zenscript
//pow(double number1, double number2);
pow(2.0, 4.0);
```

Returns a double

## Global Fields

| フィールド      | 説明                                                                                      |
| ---------- | --------------------------------------------------------------------------------------- |
| brewing    | [Brewing Handler](/Vanilla/Recipes/Recipes_Brewing_Stand/)にアクセスするために使います                |
| client     | [client Methods](/Vanilla/Game/IClient/)にアクセスするために使います                                  |
| events     | [Event Handler](/Vanilla/Events/IEventManager/)にアクセスするために使います。                          |
| format     | [Formatting Handler](/Vanilla/Utils/IFormatter/)にアクセスするために使います                          |
| furnace    | [Furnace Handler](/Vanilla/Recipes/Furnace/Recipes_Furnace/)にアクセスするために使います。             |
| game       | [Game functions](/Vanilla/Game/IGame/)にアクセスするために使います。                                   |
| itemUtils  | [ItemUtils Handler](/Vanilla/Utils/IItemUtils/)にアクセスするために使います。                          |
| loadedMods | [loaded Mods list](/Vanilla/Game/Mods/)にアクセスするために使います。                                  |
| logger     | [logger](/Vanilla/Utils/Logger/)にアクセスするために使います。                                         |
| oreDict    | [oreDictionary Handler](/Vanilla/OreDict/IOreDict/)にアクセスするために使います。                      |
| recipes    | [Recipe Handler](/Vanilla/Recipes/Crafting/Recipes_Crafting_Table/)にアクセスするために使います。      |
| server     | [server Methods](/Vanilla/Game/IServer/)にアクセスするために使います。                                 |
| vanilla    | Vanilla Functionsにアクセスするために使います。(現在は [vanilla.seeds](/Vanilla/Recipes/Seeds/)のみしか使えません) |