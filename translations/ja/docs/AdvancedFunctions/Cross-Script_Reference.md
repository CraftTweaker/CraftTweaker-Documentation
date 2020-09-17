# クロススクリプト参照

All scripts that have [static variables](/AdvancedFunctions/Global_Static_Variables/) or [custom functions](/AdvancedFunctions/Custom_Functions/) are registered to the cross-script reference.  
This allows you to access these fields/functions using the dot-notation.

## 仕様

- クロスリファレンスは `スクリプトで始まります。`
- スクリプトフォルダからの相対パスを指定します (例: `scripts.mySubfolder.a.zs`)
- [import 文](/AdvancedFunctions/Import/) の中で dot-notation を使うことができます。
- ZSは、最初に一致するディレクトリをチェックし、その後、一致するファイルまたは値をチェックします。

## 例

2つのスクリプトがあるとしましょう: `a.zs` と `b.zs`.

a.zs:

```zenscript
static myVal as string = "myVal";

function makeLine() {
    print("----------------");
}
```

b.zs

```zenscript
print(scripts.a.myVal);
scripts.a.makeLine();
```