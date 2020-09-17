# CommandEvent

Command Eventは、コマンドが実行されるたびに発生します。 コマンドハンドラを提供することで、コマンドに反応することができます。 例については [Crafttweaker examples](https://github.com/CraftTweaker/CraftTweaker-Examples/blob/master/crafttweaker/events/commandEvent/SendMessageOnSyntaxCommand/SendMessageOnSyntaxCommand.zs) を参照してください。

## イベントクラス

You will need to cast the event in the function header as this class: `crafttweaker.event.CommandEvent`. クラスを [インポート](/AdvancedFunctions/Import/) することをお勧めします

    import crafttweaker.event.CommandEvent;
    

## イベントインターフェースの拡張

Command イベントは、以下のインターフェイスを実装します。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

イベント中に取得/設定される以下の情報

| ZenGetter       | ZenSetter | タイプ                                                 |
| --------------- | --------- | --------------------------------------------------- |
| `commandSender` | いいえ       | [ICommandSender](/Vanilla/Commands/ICommandSender/) |
| `(Command)`     | いいえ       | [ICommand](/Vanilla/Commands/ICommand/)             |
| `パラメータ`         | `パラメータ`   | 文字列配列                                               |