# ModLoaderPreprocessor

ModLoaderPreprocessor는 특정 모드가 있는 경우에만 스크립트를 실행합니다.

## 호출
You call the modLoaded Preprocessor by adding `#modloaded modID` to your script file, with `modID` being the modId you want to check for:  
Example: `#modloaded minecraft`

You can also provide multiple modID's:  
`#modloaded minecraft tconstruct` will only be executed if minecraft AND tconstruct are loaded.

또한 모드가 로드되지 않은 경우에만 로드되도록 반대의 조건을 설정할 수도 있습니다. `#modloaded !tconstruct mintcraft `는 minecraft는 로드되었고 tconstruct는 로드되지 않았을 경우에 실행됩니다.

## 역할
스크립트에 이 preprocessor를 추가한 경우, modID가 있을 경우에만, 다시 말해서 종속된 모드들이 로드된 경우에만, 실행합니다.