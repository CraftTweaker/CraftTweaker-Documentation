# 모드로더프리프로세서

모드로더 프리프로세서는 특정 모드가 있는 경우에만 스크립트를 실행한다.

## 호출

`#수정된 모드를 추가하여 모드로더 프리프로세서를 호출하는 경우<code>모드를 사용하여 스크립트 파일에 대한 Id `Id </code>은 확인하고자 하는 모드ID가 되는 경우:   
예: `#modloaded minecraft `

여러 모드를 제공할 수도 있다. 아이디:  
`#modloaded market construct `은 마인크래프트와 T컨스트럭트가 적재된 경우에만 실행된다.

You can also invert a mod condition so that the mod is only loaded if the mod is NOT loaded: `#modloaded !tconstruct minecraft` will only be executed if minecraft is present and tconstruct is NOT present

## What it does

If you added this preprocessor to a script, it will only be executed if the provided modID's are present, in other words if the respecting mods are loaded.