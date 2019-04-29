# LoaderPreprocessor

Loader Preprocessor가 스크립트의 로더를 설정합니다.

## 호출

스크립트를 할당할 로더의 이름이 `loaderName `인 스크립트 파일에 `loaderName `을 추가하여 Loader Preprocessor를 호출하십시오.  
예: `#loader contenttweaker`

## 역할

Loader Preprocessor가 있는 스크립트는 지정된 로더에 의해서만 로드됩니다.  
위의 예에서, crafttweaker's loader는 파일을 건드리지 않고, 대신 "contentTweaker"라고 불리는 로더가 그 스크립트를 실행할 것입니다.  
만약 당신이 그 preprocessor를 지정하지 않는다면, 그것은 기본적으로 "crafttweaker"가 될 것입니다.