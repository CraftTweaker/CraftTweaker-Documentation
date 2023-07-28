# The CraftTweaker Log File

CraftTweaker uses it's own log file, this is done to make debugging issues easier as we don't have to sift through the latest.log file.

### Location

Much like the `latest.log`, the `crafttweaker.log` can be found in the `logs` directory.

You can also use `/ct log` to open the log file in your system's default text editor.


### Format
The `crafttweaker.log` file uses a specific format in it's output, that format is:

```plaintext
[HH:MM:SS.ms][TYPE] <message>
```

An example of how this may look would be:

```plaintext
[14:58:06.697][INFO] Hello world!
```


To explain it a bit more:

The Time (`HH:MM:SS.ms`) is included mainly as a way to ensure that logs are fresh, but it also gives some insight on how long each task is taking.

The Type tells us the type of message, it makes navigating logs a breeze and tells you the severity of the message (Simply searching `ERROR` ins a log file can show you were all the errors are without having to sift through all the `INFO` or `DEBUG` outputs).