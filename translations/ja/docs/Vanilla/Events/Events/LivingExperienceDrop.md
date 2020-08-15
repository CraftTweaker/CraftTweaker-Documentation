# LivingExperienceDrop

このイベントはエンティティが死亡し、エクスペリエンスをドロップしたときに発生します。これにより、経験値を変更することができます。 あるいは、経験のドロップを防ぐために、イベントを **キャンセル** することもできます。

## イベントクラス
関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. ivingExperienceDropEvent <br x-id="2" /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張
LivingExperienceDropイベントは、以下のインターフェースを実装し、それらのメソッド/ゲッター/セッターをすべて呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters/ZenSetters
イベント中に以下の情報を取得/設定できます:

| ZenGetter            | ZenSetter          | タイプ                                  |
| -------------------- | ------------------ | ------------------------------------ |
| `プレイヤー`              |                    | [IPlayer](/Vanilla/Players/IPlayer/) |
| `dropedExperience`   | `dropedExperience` | int型                                 |
| `originalExperience` |                    | int                                  |

## メモ

`originalExperience` にはオリジナルのバニラの経験値が含まれています。 このイベントが発生したときに `dropedExperience` が既に変更されている可能性があります。
