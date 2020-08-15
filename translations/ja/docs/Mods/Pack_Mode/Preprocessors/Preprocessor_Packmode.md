# Packmode プリプロセッサ

Packmode プリプロセッサーは、packmode の設定ファイルで特定の packmode が有効になっている場合にのみスクリプトを実行するように変更します。

## 電話

You call the Packmode Preprocessor by adding `#packmode mode(s)` to your script file, with `mode(s)` being the pack mode(s) you want the script to run in

## 例

`#packmode normal expert` を使用すると、通常モードとエキスパートモードでスクリプトが有効になります

```zenscript
#packmode normal
import crafttweaker.items.IItemStack;

print("If I appear on your CT-logs, packmode normal is enabled!");
```

## 何をするか

プロセッサーは、特定のパックモードが有効になっている場合にのみ、スクリプトを実行することを許可します。