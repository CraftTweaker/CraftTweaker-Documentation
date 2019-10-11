# 스크립트로 시작하기

CraftTweaker uses a custom scripting Language called `ZenScript`, ZenScript is read from `.zs` files that are stored in the `<gamedir>/scripts` folder.

ZenScript는 "하향식" 스크립팅 언어입니다. 즉, `imports`는 파일의 가장 위에 위치해야 하고, `변수 선언`도 파일의 상단에 위치해야 하지만, 제약은 없고 어디에서나 `변수`를 정의 할 수 있습니다. 그러나, 선언이 이루어지기 전에 해당 `변수`는 액세스 할 수 없습니다.

## Scripts

Scripts are stored in `<minecraftdir>/scripts` and are loaded when the player joins a world, much like previous versions of CraftTweaker (excluding 1.12), Scripts CAN be reloaded, just run `/reload`. In the current beta version, scripts are loaded on the client when joining a single player world, when joining a multiplayer world, nothing happens on the client, no scripts are loaded at all, but the vanilla recipe serializers send the custom recipes to the client! So it should all work find for now until mods get involved (and even then, only mods that don't use the datapack system won't work). Next version server -> client script syncing should be done :)

Script files have the `.zs` prefix, make sure that it isn't `.zs.txt`!

### 첫 번째 스크립트 작성

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<minecraftdir>/scripts>` folder.

In `hello.zs` put the following line

```zenscript
println("Hello world!");
```

Now load up Minecraft and and take a look at the `<minecraftdir>/logs/crafttweaker.log` file.

The `crafttweaker.log` file is located in `<minecraftdir>/logs` and can be read by any program that can read plaintext files.

It is recommended to use Notepad++ or Sublime Text to edit script files, however any program will do.

### craftweaker.log 파일

The `crafttweaker.log` file uses a specific syntax in it's output, that syntax is:

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Using the example above, the output would be:

```
[14:58:06.697][DONE][SERVER][INFO] Hello world!
```

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumps is easier.

### 주석

Comments can be used to make your script files more readable and easier to understand!

ZenScript supports 3 types of comments, being:

Single line: `// I'm a single line comment!`

Alternate Single Line: `# I'm also a single line comment!`

Multiline:
```
/* 이건
복수 라인의
주석입니다. */
```