# LoaderPreprocessor

Loader Preprocessor가 스크립트의 로더를 설정합니다.

## 호출

할당할 로더 스크립트 파일의 이름을 명시하여 Loader Preprocessor를 호출합니다.  
예: `#loader contenttweaker`

## 역할

Loader Preprocessor가 있는 스크립트는 지정된 로더에 의해서만 로드됩니다.  
위의 예에서, crafttweaker의 로더가 파일을 건드리지 않고, 대신 "contentTweaker"라는 로더가 해당 스크립트를 실행할 것입니다.  
만약 그 preprocessor를 지정하지 않으면, 그것은 기본적으로 "crafttweaker"가 됩니다.