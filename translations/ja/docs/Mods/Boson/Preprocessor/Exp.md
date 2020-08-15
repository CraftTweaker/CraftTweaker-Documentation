# 実験的なフラグプリプロセッサ指令format@@0

このプリプロセッサ指令により、特定の ZenScript 関数に対していくつかの実験的な動作が可能になります。

Being part of the ZenScriptX project, and due to the experimental nature of the project in itself, some features may require extensive testing on the compiler side or cause other unintended side effects. これらの理由から、いくつかの機能 は実験的とみなされ、スクリプトのコンパイル時にデフォルトで有効になっていません。

さらに、いくつかの実験的なフラグは完全に機能しない可能性があり、今後の機能のヒントとしてのみ提供されます。 は、特定のフラグが使用されているかどうかを知るために必ずドキュメントを参照する必要があります。 On the other hand, experimental flags will never be removed, meaning that features that are integrated into the "non-experimental" part of ZenScriptX won't have their flags disabled. これにより、スクリプトは ZenScriptX プロジェクトの新しいリリースと互換性があります。 書き直す必要はありません。

## ディレクティブの使用
Using the directive is as simple as adding `#experimental` to the beginning of the file, and specifying a list of flags that represent behavior to enable right after the declaration.

すべてのフラグは、スペースで他のフラグを区切る必要があり、 **は** `-E` で始まる必要があります。 これはフラグを 実験的なフラグとして識別します。 その宣言に従って、特定のフラグを特定する一連の文字と数字を 入力する必要があります。 利用可能なすべてのフラグを知るには、このドキュメントのリストを参照してください。

例として、 `soo` と `wd4` フラグを有効にしたいとします。 対応する行は次のようになります:
```zenscript
#experimental -Esoo -Ewd4
```

## フラグ一覧
| フラグ名   | 現在の状態 | 説明                                      |
| ------ | ----- | --------------------------------------- |
| `soo`  | 無効    | シーケンスの演算子の過負荷を有効にします                    |
| `saia` | 無効    | シーケンス内で単一のパラメータを持つ関数に自動的に `it` 引数を提供します |
| `sao`  | 有効    | 配列の引数から `シーケンス` を作成できます                 |

現在のステータスの意味は以下のとおりです。

- **無効** は存在するが、バックエンドの準備ができていないため対応するアクションがないフラグを識別します。 開発者が近い将来、どのような新機能が利用可能になるかを知ることができるようにするために、単に「ロードマップ」のために提供される です。
- **有効** は存在するフラグを識別し、ファイルに影響を及ぼす。
- **非推奨の** は、機能が満期に達し、 もはや実験的ではないことにより、もう使用されるべきではないフラグを特定している。 それにもかかわらず、後方互換性の一形態として提供されています。
