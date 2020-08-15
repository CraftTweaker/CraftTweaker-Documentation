# ローダープリプロセッサ

ローダーのプリプロセッサーがスクリプトのローダーを設定します。

## 電話

You call the loader Preprocessor by adding `#loader loaderName` to your script file with `loaderName` being the name of the loader you want to assign the script to.  
Example: `#loader contenttweaker`

## 何をするか

Scripts with the loader Preprocessor will only be loaded by the loader specified.  
In the example above, crafttweaker's loader won't touch the file, instead the loader called "contentTweaker" will execute that script.  
If you don't specify that preprocessor, it will default to being "crafttweaker".