# ModLoaderPreprocessor

ModLoaderPreprocessor는 특정 모드가 있는 경우에만 스크립트를 실행합니다.

## 호출

`#수정된 모드ID`를 추가하여 ModLoaderPreprocessor를 호출하는 경우`모드를 사용하여 스크립트 파일에 대한 `Id </code>은 확인하고자 하는 모드ID가 되는 경우:   
예: `#modloaded minecraft </0></p>

<p>여러 모드를 제공할 수도 있습니다. 모드아이디들:<br />
<code>#modloaded market construct `은 마인크래프트와 팅커스 컨스트럭트(tconstruct) 가 로드된 경우에만 실행됩니다.

또한 모드가 로드되지 않은 경우에만 로드되도록 모드 조건을 반전시킬 수 있습니다. `#modloaded !tconstruct mintcraft `은 마인크래프트가 존재하고 텅커스 컨스트럭트(tconstruct)가 없는 경우에만 실행됩니다.

## 그것이 하는 일

이 사전 처리기를 스크립트에 추가한 경우 제공된 모드가 실행될 때만 모드ID가 존재하며, 다시 말해서 종속된 모드들이 로드된 경우.