# ブラケットエラーのプリプロセッサを無視

このプリプロセッサーは、スクリプトをバックセットエラーを無視するように設定します。  
これはいかなる方法でも形状や形状にもならず、あなたのスクリプトを魔法のように修正します。エラーログを抑制します。

## 電話

You can call the IgnoreBracketErrors Preprocessor by placing `#ignoreBracketErrors` inside your script file.  
This Preprocessor is file-specific, so calling it on one file doesn't affect the others (at least not for what the processor's concerned.

## 何をするか

プリプロセッサがファイル上で呼び出されると、ブラケットエラーのすべてのエラーログが抑制されます。  
これは影響を受ける行をいかなる方法でも変更しません。代わりに、唯一の変更は、ログには関連する行が含まれないということです。