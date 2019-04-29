# 브래킷 오류 사전 프로세서 무시

이 사전 프로세서에서는 백셋 오류를 무시하도록 스크립트를 설정하십시오.  
이것은 당신의 스크립트를 어떤 식으로든, 모양을 만들거나 또는 마법처럼 수정하지 않는다. 그것은 오류 로그를 압축한다.

## 호출

You can call the IgnoreBracketErrors Preprocessor by placing `#ignoreBracketErrors` inside your script file.  
This Preprocessor is file-specific, so calling it on one file doesn't affect the others (at least not for what the processor's concerned.

## What it does

When the preprocessor is called on a file, all error logging on bracket errors will be supressed.  
This doesn't change the affected lines in any way, instead the only change is that your log won't contain the regarding lines.