# コンセプト

リフレクションは英語の単語で、多くの意味があります。 しかし、特に「鏡で 画像の制作」([出典:Merriam-Webster Dictionary](https://www.merriam-webster.com/dictionary/reflection))があります。 同じ 概念がプログラミングに適用されます。

リフレクションは、実際には、プログラムが鏡の中で自分自身を見て、いくつかのイントロスペクションを実行することができるツールです。 例えば、 がオブジェクトの型を分析し、プログラムが公開したメソッドやプライベート変数などを呼び出します。 This is obviously a very powerful tool, but at the same time it is also extremely dangerous since reflection provides access to almost anything that is currently running inside a program.

ZenScriptXプロジェクトは、「リフレクション」の可能性の一部をZenScriptにもたらすことを目指しています。 スクリプトユーザが ZenScript サンドボックスを回避することができません。 特に、ZenScriptXトーンダウンリフレクション の実装により、ユーザーは以下のことができます:

- 任意のオブジェクトの型を調べます。変数または括弧ハンドラであれば;
- ZenScriptサンドボックス内のクラスの単純で完全な修飾名を取得します。
- ZenScriptサンドボックス外のクラスの単純で完全な修飾名を取得します。
- ZenScriptクラスとネイティブ対応の間で変換する (例 `crafttweaker.item.IItemStack` は `crafttweaker.api.item.IItemStack` になります)。

スクリプトユーザーがクラスによって提供されるすべてのメソッドをリストしたり、ZenScriptによって課された 制限をこの反映で回避する方法はありません。 それは実際には、 CraftTweaker統合によって公開されている 型がスクリプトと実際のバックエンドの間で正しく変換されるようにするための、より便利な開発ツールです。

始めるには、 [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) または [`Class`](/Mods/Boson/Reflection/Class/) のドキュメントを参照してください。
