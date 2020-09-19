# Mods

登録されているすべてのModの情報を保持します。 `loadedMods` global keyword を使ってアクセスできます

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.mods.Mods
```

## メソッド
### getMod

特定のModを取得します

 戻り値: `特定の MCModInfo`

戻り値の型: [crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
loadedMods.getMod(modid as String);
loadedMods.getMod("minecraft");
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| modid | 文字列型 | 説明が提供されていません |


### isModLoaded

Modがローディングされているか確認します。

 戻り値: `Modがロードされている場合は true`

戻り値の型: boolean

```zenscript
loadedMods.isModLoaded(modied as String);
loadedModLoaded("minecraft");
```

| パラメータ | タイプ  | 説明          |
| ----- | ---- | ----------- |
| modid | 文字列型 | 確認しなければならない |



## プロパティー

| 名称  | タイプ                                                                                | ゲッターあり | セッターあり |
| --- | ---------------------------------------------------------------------------------- | ------ | ------ |
| Mod | List&lt;[crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | true   | false  |
| サイズ | int                                                                                | true   | false  |

