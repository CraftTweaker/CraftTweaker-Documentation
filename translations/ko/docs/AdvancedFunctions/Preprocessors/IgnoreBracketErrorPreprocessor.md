# Ignore Bracket Errors Preprocessor

이 Preprocessor에서는 백셋 오류무시( ignore backet errors) 를하도록 스크립트를 설정하십시오.  
이것은 당신의 스크립트를 어떤 식으로든, 모양을 만들거나 또는 마법처럼 수정하지 않습니다. 그것은 오류 로그를 압축합니다.

## 호출

스크립트 파일 안에 `#ignoreBracketErrors `을 넣어 Ignore Bracket Errors Preprocessor 무시를 호출할 수 있습니다.  
이 사전처리기는 파일마다 다르기 때문에 한 파일에 호출하는 것은 다른 파일에는 영향을 미치지 않습니다.(최소한 Preprocessor에 관한 것은 아님.)

## 역할

파일에 Preprocessor가 호출되면 bracket error에대한 모든 오류 로그가 압축됩니다.  
이것은 어떤 식으로든 영향을 받는 선을 바꾸지 않습니다. 대신, 유일한 변화는 당신의 로그에 관련된 줄이 포함되어 있지 않다는 것입니다.