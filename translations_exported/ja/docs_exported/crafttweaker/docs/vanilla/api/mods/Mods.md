# Mods

登録されているすべてのModの情報を保持します。 `loadedMods` global keyword を使ってアクセスできます

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.mods.Mods
```

## Methods
### getMod

特定のModを取得します

 戻り値: `特定の MCModInfo`

戻り値の型: [crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
loadedMods.getMod(modid as String);
loadedMods.getMod("minecraft");
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| modid     | String | No description provided |


### isModLoaded

Modがローディングされているか確認します。

 戻り値: `Modがロードされている場合は true`

Return type: boolean

```zenscript
loadedMods.isModLoaded(modied as String);
loadedModLoaded("minecraft");
```

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| modid     | String | 確認しなければならない |



## Properties

| 名称   | Type                                                                               | Has Getter | Has Setter |
| ---- | ---------------------------------------------------------------------------------- | ---------- | ---------- |
| Mod  | List&lt;[crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | true       | false      |
| size | int                                                                                | true       | false      |

