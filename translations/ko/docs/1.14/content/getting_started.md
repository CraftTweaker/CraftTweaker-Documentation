# 스크립트로 시작하기

CraftTweaker uses a custom scripting Language called `ZenScript`, ZenScript is read from `.zs` files that are stored in the `<gamedir>/scripts` folder, if you aren't sure where this folder is, just run `/ct scripts` when in the game and the folder will open.

ZenScript는 "하향식" 스크립팅 언어입니다. 즉, `imports`는 파일의 가장 위에 위치해야 하고, `변수 선언`도 파일의 상단에 위치해야 하지만, 제약은 없고 어디에서나 `변수`를 정의 할 수 있습니다. 그러나, 선언이 이루어지기 전에 해당 `변수`는 액세스 할 수 없습니다.


Script files have the `.zs` prefix, make sure that it isn't `.zs.txt`!

## What are scripts

Scripts are stored in `<gamedir>/scripts` and are loaded when the player joins a world, much like previous versions of CraftTweaker (excluding 1.12), Scripts CAN be reloaded, just run `/reload`.

Scripts are loaded twice when entering a single player world, once on the `Server` side, and then on the `Client` side, if you have a `println()` in your script, you will see it twice, since it is running twice.

This does not mean that changes are applied twice however, changes made by scripts can be sided, so some changes, such as setting localization, only run on the client side, but adding recipes is only done on the server side.

When joining a server, the server sends their scripts to the client, and the client runs those scripts. This does mean that a client without any scripts, can join a server and get the changes (useful if you need to disable an item on the server but don't want to force clients to download extra files!)


### 첫 번째 스크립트 작성

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<gamedir>/scripts>` folder; If you aren't sure where the folder is, just run `/ct scripts` and it should open!

`hello.zs` 파일에 다음 코드를 입력하세요.

```zenscript
println("Hello world!");
```

Now load up Minecraft and and take a look at the `<gamedir>/logs/crafttweaker.log` file (or run `/ct log` to have the file open in your default text editor).

The `crafttweaker.log` file is located in `<gamedir>/logs` and can be read by any program that can read plaintext files.

It is recommended to use Notepad++, Sublime Text or VSCode to edit script files, however any program will do.

When choosing a program to use to edit scripts, take a look at what Syntax highlighters are available, most common text editors have ZenScript highlighting support through the use of a plugin.



### craftweaker.log 파일

`crafttweaker.log` 파일의 출력내용에는 다음과 같은 특정 구문을 사용합니다.

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

위이 구문을 이용한 예제의 출력은 다음과 같습니다.

```
[14:58:06.697][DONE][SERVER][INFO] Hello world!
```

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumped information is easier.

### 주석

주석은 스크립트 파일을 더 읽기 쉽고 이해하기 쉽게 만드는데 도움을 줍니다.

ZenScript는 다음과 같은 세 가지 유형의 주석을 지원합니다.

한 라인: `// 한 줄 주석입니다.`

또 다른 한 라인: `# 이것 또한 한줄 주석입니다.`

복수 라인:
```
/* 이건
복수 라인의
주석입니다. */
```

Just note, that `#` comments are also used for PreProcessors (TODO link to PreProcessors when they are documented), so while they are still valid comments, they could cause unwanted side effects. 