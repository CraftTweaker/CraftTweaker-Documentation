# 모드로더프리프로세서

모드로더 프리프로세서는 특정 모드가 있는 경우에만 스크립트를 실행한다.

## 호출

`#수정된 모드를 추가하여 모드로더 프리프로세서를 호출하는 경우<code>모드를 사용하여 스크립트 파일에 대한 Id `Id </code>은 확인하고자 하는 모드ID가 되는 경우:   
예: `#modloaded minecraft `

여러 모드를 제공할 수도 있다. 아이디:  
`#modloaded market construct `은 마인크래프트와 팅커스 컨스트럭트가 적재된 경우에만 실행된다.

또한 모드가 로드되지 않은 경우에만 로드되도록 모드 조건을 반전시킬 수 있다. `#modloaded !tconstruct mintcraft `은 마인크래프트가 존재하고 텅커스 컨스트럭트가 없는 경우에만 실행된다.

## 그것이 하는 일

If you added this preprocessor to a script, it will only be executed if the provided modID's are present, in other words if the respecting mods are loaded.