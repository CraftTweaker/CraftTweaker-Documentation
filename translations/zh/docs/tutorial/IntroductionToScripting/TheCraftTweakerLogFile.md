# CraftTweaker日志文件

CraftTweaker使用它自己的日志文件，这主要是为了使调试更容易。

### 路径

与`latest.log`一样，`crafttweaker.log`可以在`logs`目录中找到。

你也可以使用`/ct log`指令在你系统的默认文本编辑器中打开日志文件。


### 格式
`crafttweaker.log`文件在它的输出中使用了一种特定的格式：

```plaintext
[HH:MM:SS.ms][Forge 加载阶段（LOADERSTAGE）][端（SIDE）][类型（TYPE）] <信息>
```

可能是这样的：

```plaintext
[14:58:06.697][DONE][SERVER][INFO] Hello world!
```

The format is used for debugging purposes and the only time the format is not used is when printing command dumps, where it just prints the message so it is easier to copy and paste it.


进一步说明一下：

The Time (`HH:MM:SS.ms`) is included mainly as a way to ensure that logs are fresh, but it also gives some insight on how long each task is taking.

The LoaderStage tells us *when* the script is loaded in the game life cycle (while the game is still starting up, or when joining a world for example).

`SERVER`（服务端）或`CLIENT`（客户端）告诉我们脚本是在哪个逻辑线程上运行。

the Type tells us the type of message, it makes navigating logs a breeze and tells you the severity of the message (Simply searching `ERROR` ins a log file can show you were all the errors are without having to sift through all the `INFO` or `DEBUG` outputs).