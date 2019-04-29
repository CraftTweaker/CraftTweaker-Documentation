# 스크립트로 시작하기

CraftTweaker는 `ZenScript`라는 사용자 지정 스크립팅 언어를 사용합니다. `<gamedir>/scripts` 폴더 아래에 저장되어 있는 `.zs` 파일을 말합니다.

ZenScript는 "하향식" 스크립팅 언어입니다. 즉, `imports`는 파일의 가장 위에 위치해야 하고, `변수 선언`도 파일의 상단에 위치해야 하지만, 제약은 없고 어디에서나 `변수`를 정의 할 수 있습니다. 그러나, 선언이 이루어지기 전에 해당 `변수`는 액세스 할 수 없습니다.

## 소개

이제까지 모드팩을 만들면서 그냥 여러 모드들을 던져 넣고 통합시켰던 경험이 없습니까? 각 모드들은 상대적으로 독립적으로 개발되기 때문에 특정 모드와 비교했을 때 강력함을 느낄 수도 있습니다. 또는 일부 아이템들에 대해서 더 괜찮은 제조법이 있다고 생각할 수 있겠죠. 또는 모드를 제거하지 않고 특정 아이템만 제거하고 싶은 경우도 있을 수 있습니다. 또는 일부 광석사전 항목이 너무 많거나 너무 적은 경우를 발견할 수도 있습니다. 이제는 MineWeaker를 이용한 하나의 지시로 모든 작업을 수행 할 수 있습니다.

바닐라 마인크래프트를 지원하기 위해 제공되는 핵심 기능 외에도 모드 통합 라이브러리는 모드와 함께 제공됩니다. 이에 바닐라 제조법뿐만 아니라 모드에서 제공하는 제조법 및 모드의 동작을 수정할 수 있습니다.

## 스크립트

스크립트는 `<minecraftdir>/scripts`에 저장되고 마인크래프트의 `PreInitialization`단계에서 로드됩니다. 이전 버전의 Crafttweaker와 달리 스크립트를 다시 로드 할 수 없습니다. 이는 Mojang이 1.12에서 변경한 스팩이기 때문에 해결 방안의 없습니다. 또한, 스크립트가 정상적으로 동작하려면 **서버와 클라이언트 양쪽에** 다 위치해야 합니다.

스크립트 파일은 확장자가 `.zs`이며 `.zip`으로 압축시켜도 읽을 수 있습니다.

### 첫 번째 스크립트 작성

시작은 `<minecraftdir>/scripts` 폴더에 `hello.zs`라는 아주 기본적인 파일을 만드는 것입니다.

`hello.zs` 파일에 다음 코드를 입력하세요.

    print("Hello world!");
    

이제 마인크래프트를 로드하고 `crafttweaker.log`파일을 확인하세요.

`crafttweaker.log` 파일은 `<minecraftdir>`에 위치하고 있고 일반 텍스트 파일을 읽을 수 있는 모든 프로그램에서 읽을 수 있습니다.

It is recommended to use Notepad++ or Sublime Text to edit script files, however any program will do.

### The crafttweaker.log file

The `crafttweaker.log` file uses a specific syntax in it's output, that syntax is:

    [LOADERSTAGE][SIDE][TYPE] <message>
    

Using the example above, the output would be:

    [PREINITIALIZATION][CLIENT][INFO] Hello world!
    

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumps is easier.

### Comments

Comments can be used to make your script files more readable and easier to understand!

ZenScript supports 3 types of comments, being:

Single line: `// I'm a single line comment!`

Alternate Single Line: `# I'm also a single line comment!`

Multiline:

    /* I'm 
    a
    multiline comment! */