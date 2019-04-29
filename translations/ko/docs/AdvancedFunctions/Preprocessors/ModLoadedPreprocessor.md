# 모드로더프리프로세서

모드로더 프리프로세서는 특정 모드가 있는 경우에만 스크립트를 실행한다.

## 호출

You call the modLoaded Preprocessor by adding `#modloaded modID` to your script file, with `modID` being the modId you want to check for:  
Example: `#modloaded minecraft`

You can also provide multiple modID's:  
`#modloaded minecraft tconstruct` will only be executed if minecraft AND tconstruct are loaded.

You can also invert a mod condition so that the mod is only loaded if the mod is NOT loaded: `#modloaded !tconstruct minecraft` will only be executed if minecraft is present and tconstruct is NOT present

## What it does

If you added this preprocessor to a script, it will only be executed if the provided modID's are present, in other words if the respecting mods are loaded.