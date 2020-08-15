# LoadedMods

You can use the [global keyword](/Vanilla/Global_Functions/) `loadedMods` to access all currently loaded mods.  
If needed you can import the class using `import crafttweaker.mods.ILoadedMods;`

## Modがロードされているか確認する

`関数の` を使用して、Modがロードされているかどうかを確認します。  
`contains` メソッドも使用できます。

```zenscript
//if MinecraftCoderPack is loaded
if(loadedMods in "mcp"){
    print("success!);
}

//if MinecraftCoderPack is loaded
if(loadedMods.contains("mcp")){
    print("success!!!");
}
```

## 特定のModを取得します

IDがある限り、特定のModをIModとして取得できます

```zenscript
//minecraftCoderPack mod
val mod = loadedMod["mcp"]; を取得する
```

## ModListを通して繰り返します

読み込まれた Mod のリストを以下のように反復できます：

```zenscript
//より大きなパックでは推奨されない、登録されたアイテムの定義をすべて出力します！
//the mod variable will be an IMod type
for mod in loadedMods {
    print(mod.name ~ ":");
    for item in mod.items {
        print("\t\t" ~ item.displayName);
    }
}
```

# IMod

IModインターフェースは、特定のModに関する一般的な情報を提供します。  
必要に応じて、 `import crafttweaker.mods.IMod;` を使用してインポートできます。

| Zengetter | 何をするか                     | Return Type                                | 使用法               |
| --------- | ------------------------- | ------------------------------------------ | ----------------- |
| id        | Mod の id を返します。           | 文字列                                        | `mod.id`          |
| 名前        | Modの内部名を返します              | 文字列                                        | `mod.name`        |
| バージョン     | Modのバージョンを返します            | 文字列                                        | `mod.version`     |
| 説明        | Modの説明を返します。              | 文字列                                        | `mod.description` |
| 項目        | Modによって追加されたすべてのアイテムを返します | [IItemStack](/Vanilla/Items/IItemStack/)[] | `mod.items`       |