# 스크립트로 시작하기

CraftTweaker는 `ZenScript`라는 사용자 지정 스크립팅 언어를 사용합니다. `<gamedir>/scripts` 폴더 아래에 저장되어 있는 `.zs` 파일을 말합니다.

ZenScript는 "하향식" 스크립팅 언어입니다. 즉, `imports`는 파일의 가장 위에 위치해야 하고, `변수 선언`도 파일의 상단에 위치해야 하지만, 제약은 없고 어디에서나 `변수`를 정의 할 수 있습니다. 그러나, 선언이 이루어지기 전에 해당 `변수`는 액세스 할 수 없습니다.

## 소개

이제까지 모드팩을 만들면서 그냥 여러 모드들을 던져 넣고 통합시켰던 경험이 없습니까? 각 모드들은 상대적으로 독립적으로 개발되기 때문에 특정 모드와 비교했을 때 강력함을 느낄 수도 있습니다. 또는 일부 아이템들에 대해서 더 괜찮은 제조법이 있다고 생각할 수 있겠죠. 또는 모드를 제거하지 않고 특정 아이템만 제거하고 싶은 경우도 있을 수 있습니다. 또는 일부 광석사전 항목이 너무 많거나 너무 적은 경우를 발견할 수도 있습니다. 이제는 MineWeaker를 이용한 하나의 지시로 모든 작업을 수행 할 수 있습니다.

바닐라 마인크래프트를 지원하기 위해 제공되는 핵심 기능 외에도 모드 통합 라이브러리는 모드와 함께 제공됩니다. 이에 바닐라 제조법뿐만 아니라 모드에서 제공하는 제조법 및 모드의 동작을 수정할 수 있습니다.

## 스크립트

Scripts are stored in `<minecraftdir>/scripts` and are loaded in the `PreInitialization` phase of Minecraft, unlike previous versions of Crafttweaker, Scripts cannot be reloaded, this is due to changes that Mojang have made in 1.12 and there is no workaround. Also, Scripts need to be on **both, the server AND the client instance** to work

Script files have the `.zs` prefix and can be compressed into a `.zip` that will also be read.

### Writing your first script

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<minecraftdir>/scripts>` folder.

In `hello.zs` put the following line

    print("Hello world!");
    

Now load up Minecraft and and take a look at the `crafttweaker.log` file.

The `crafttweaker.log` file is located in `<minecraftdir>` and can be read by any program that can read plaintext files.

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