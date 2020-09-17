# `tags` Loader

`タグ` ローダーは、Minecraft の読み込みプロセスの後の段階で発生し、 [タグ](/Mods/Boson/Tags/Concept/) を操作できる特別なローダーです。 このローダーによってロードされたファイル で使用されている場合、タグブラケットハンドラは異なる意味を持ちます。詳細はタグのドキュメントを参照してください。

## このローダーを使用する
This loader can be enabled via the [`#loader` preprocessor directive](/AdvancedFunctions/Preprocessors/LoaderPreprocessor/) by specifying its name next to the declaration, as in the following example:

```zenscript
#loader tags
```

## このローダーの理由
詳細については、 [タグブラケットハンドラ](/Mods/Boson/Tags/BracketHandler/) のドキュメントと、 [実際の概念](/Mods/Boson/Tags/Concept/) に関連するページを参照してください。
