# ISoundEventDefinition

ISoundEventDefinition オブジェクトは、ゲーム内のサウンドイベントを表します。 サウンドが再生されようとすると、サウンドイベントがトリガーされます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.SoundEvent;`

## ISoundEventDefinition オブジェクトの呼び出し

[Sound Event Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Event/):  
`<soundevent:ambient.cave>` を使用してこのようなオブジェクトを取得できます。

## パラメータのないZenMethods

| ZenMethod      | 戻り値の種類 | 定義               |
| -------------- | ------ | ---------------- |
| getSoundName() | 文字列型   | イベントのサウンド名を返します。 |