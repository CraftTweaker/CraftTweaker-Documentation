# CraftTweaker日志文件

CraftTweaker uses it's own log file, this is done to make debugging issues easier as we don't have to sift through the latest.log file.

### 路径

与`latest.log`一样，`crafttweaker.log`可以在`logs`目录中找到。

你也可以使用`/ct log`指令在你系统的默认文本编辑器中打开日志文件。


### 格式
`crafttweaker.log`文件在它的输出中使用了一种特定的格式：

```plaintext
[HH:MM:SS.ms][TYPE] <message>
```

可能是这样的：

```plaintext
[14:58:06.697][INFO] Hello world!
```


进一步说明一下：

The Time (`HH:MM:SS.ms`) is included mainly as a way to ensure that logs are fresh, but it also gives some insight on how long each task is taking.

The Type tells us the type of message, it makes navigating logs a breeze and tells you the severity of the message (Simply searching `ERROR` ins a log file can show you were all the errors are without having to sift through all the `INFO` or `DEBUG` outputs).