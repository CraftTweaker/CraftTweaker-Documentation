# ModLoaderPreprocessor

modLoaded Preprocessorは、特定のModが存在する場合にのみスクリプトを実行します。

## 電話

You call the modLoaded Preprocessor by adding `#modloaded modID` to your script file, with `modID` being the modId you want to check for:  
Example: `#modloaded minecraft`

You can also provide multiple modID's:  
`#modloaded minecraft tconstruct` will only be executed if minecraft AND tconstruct are loaded.

You can also invert a mod condition so that the mod is only loaded if the mod is NOT loaded: `#modloaded !tconstruct minecraft` will only be executed if minecraft is present and tconstruct is NOT present

## 何をするか

このプリプロセッサをスクリプトに追加した場合、与えられたmodIDが存在する場合にのみ実行されます。 言い換えれば尊重されるモッドがロードされれば